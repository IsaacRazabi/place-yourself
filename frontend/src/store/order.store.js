// import { storageService } from '../services/async-storage.service';
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'
import { orderService } from "../services/order.service.js";
import { userService } from "../services/user.service.js";
// import { stayService } from "../services/stay.service.js";



export const orderStore = {
    state: {
       orders: [],
    },
    getters: {
        ordersToDisplay( state ) {
             return  state.orders 
            }
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders;
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        },
        // filterStayes(state, { filterBy }) {
        //     state.filterBy = filterBy
        // },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
    },
    actions: {
        async loadOrders(context) {
            try {
                const orders = await orderService.query();
                context.commit({ type: 'setOrders', orders })
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err)
                throw err
            }
        },        
        async saveOrder({commit}, { order }){
            try{
               const savedOrder = await orderService.add(order)
                    commit({type: 'addOrder', savedOrder });
                    userService.addUserOrder({ order: savedOrder })
                      return savedOrder;
            }
            catch {
                console.log('we have a problem');
            }
        
    },
    // async updateStayWithOrder(context, { order , stay}){
    //     try {
    //         if(!stay.orders) stay.orders=[]
    //         stay.orders.push(order);
    //         stay = await stayService.add(stay)
    //         return stay;
    //     } catch (err) {
    //         console.log('reviewStore: Error in addReview', err)
    //         throw err
    //     }},

async updateOrderStatus(context, {orderToUpdate}){
    try {
        //    await orderService.add(orderToSave)
    //     let orderToUpdate = await orderService.getById(stat.orderId)
       
    //  if (stat.diff === 1) orderToUpdate.status = "confirm";
    //  if (stat.diff === 0) orderToUpdate.status = "pending";
     await orderService.add(orderToUpdate)
        return orderToUpdate;
    } catch (err) {
        console.log('orderStore: Error in addReview', err)
        throw err
    }}
}}