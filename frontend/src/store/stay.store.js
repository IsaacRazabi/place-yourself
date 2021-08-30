
// import { storageService } from '../services/async-storage.service';
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'
import { stayService } from '../services/stay.service';
import { reviewService } from '../services/review.service';


export const stayStore = {
    state: {
       stayes: [],
       filterBy: {
        loc: {address:''},
        dateStart: new Date().toISOString().substr(0, 10),
        dateEnd: new Date().toISOString().substr(0, 10),
        guests: 0,
        priceStart:0,
        priceEnd: Infinity,
        amenities:{
            TV:false,
    Wifi:false,
    Kitchen:false,
    Smokingallowed:false,
    Petsallowed:false,
    Cookingbasics:false,
      },
    },
    },
    getters: {
        stayesToDisplay( state ) {
             return  state.stayes 
            }
    },
    mutations: {
        setStayes(state, { stayes }) {
            state.stayes = stayes;
        },
        addStay(state, { stay }) {
            state.stayes.unshift(stay)
        },
        filterStayes(state, { filterBy }) {
            state.filterBy = filterBy
        },
        removeStay(state, { stayId }) {
            state.stayes = state.stayes.filter(stay => stay._id !== stayId)
        },
    },
    actions: {
        async loadStayes(context) {
            try {
                const stayes = await stayService.query(context.state.filterBy);
                context.commit({ type: 'setStayes', stayes })
            } catch (err) {
                console.log('stayesStore: Error in loadStayes', err)
                throw err
            }
        },        
        async saveStay({commit}, { stay }){
            try{
                await stayService.add(stay)
                .then(savedStay => {
                    commit({type: 'addStay', savedStay });
                      return savedStay;
                    })
              
            }
            catch {
                console.log('we have a problem');
            }
        
    },
async updateStay(context, { review , stay}){
    try {
        stay.reviews.push(review);
        stay = await stayService.add(stay)
        return review;
    } catch (err) {
        console.log('reviewStore: Error in addReview', err)
        throw err
    }},

    async updateStayStatus(context, {orderToSave}){
        try {
      
            orderToSave = await stayService.add(orderToSave)
            // commit({type: 'setStayes' });
            return orderToSave;
        } catch (err) {
            console.log('stayStore: Error in update stay status', err)
            throw err
        }},


// async loadReviews(context) {
//     try {
//         const reviews = await reviewService.query();
//         context.commit({ type: 'setReviews', reviews })
        // socketService.off(SOCKET_EVENT_REVIEW_ADDED)
        // socketService.on(SOCKET_EVENT_REVIEW_ADDED, review => {
        //     console.log('Got review from socket', review);
        //     context.commit({ type: 'addReview', review })
        // })
        // socketService.off(SOCKET_EVENT_REVIEW_ABOUT_YOU)
        // socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, review => {
        //     console.log('Review about me!', review);
            
        // })

    // } catch (err) {
    //     console.log('reviewStore: Error in loadReviews', err)
    //     throw err
    // }
// },
async removeReview(context, { reviewId }) {
    try {
        await reviewService.remove(reviewId);
        context.commit({ type: 'removeReview', reviewId })
    } catch (err) {
        console.log('reviewStore: Error in removeReview', err)
        throw err
    }
},
    }
}

