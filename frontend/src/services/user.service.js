// import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { socketService} from './socket.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const SCORE_FOR_REVIEW = 10
// var gWatchedUser = null;

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    increaseScore,
    addUserReview,
    _makeId,
    addUserOrder,
    addUserStay
}

window.userService = userService
// Note: due to async, must run one by one...
// userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
// userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})
// userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 100})

function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

async function getById(userId) {
    // const user = await storageService.get('user', userId)
    const user = await httpService.get(`user/${userId}`)
    // gWatchedUser = user;
    return user;
}
function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
    return user;
}

async function login(userCred) {
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)
    // return _saveLocalUser(user)

    const user = await httpService.post('auth/login', userCred)
    socketService.emit('login', user._id);
    if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    // userCred.score = 100;
    // const user = await storageService.post('user', userCred)
    const user = await httpService.post('auth/signup', userCred)
    socketService.emit('set-user-socket', user._id);
    return _saveLocalUser(user)
}
async function logout() {
    // sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    socketService.emit('unset-user-socket');
    return await httpService.post('auth/logout')
}

async function increaseScore(by = SCORE_FOR_REVIEW) {
    const user = getLoggedinUser()
    user.score = user.score + by || by
    await update(user)
    return user.score
}

async function addUserReview(stat) {
    const user = getLoggedinUser()
    if(!user.reviews) user.reviews=[]
    user.reviews.push(stat.review)
    await update(user)
    return user.reviews
}

async function addUserOrder({order}) {
    const user = getLoggedinUser()
    if(!user.orders) user.orders=[]
    user.orders.push(order)
    await update(user)
    return user.orders
}

async function addUserStay({stay}) {
    const user = getLoggedinUser()
    if(!user.stayes) user.stayes=[]
    user.stayes.push(stay)
    await update(user)
    return user.stayes
}




function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

// This IIFE functions for Dev purposes 
// It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
    // var user = getLoggedinUser()
    // Dev Helper: Listens to when localStorage changes in OTHER browser

    // Here we are listening to changes for the watched user (comming from other browsers)
    // window.addEventListener('storage', async () => {
    //     if (!gWatchedUser) return;
    //     const freshUsers = await storageService.query('user')
    //     const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
    //     if (!watchedUser) return;
    //     if (gWatchedUser.score !== watchedUser.score) {
    //         console.log('Watched user score changed - localStorage updated from another browser')
            // socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
        // }

        
//         gWatchedUser = watchedUser
//     })
// })();

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
// This is relevant when backend is connected
(async () => {
    var user = getLoggedinUser()
    if (user) socketService.emit('set-user-socket', user._id)
})();