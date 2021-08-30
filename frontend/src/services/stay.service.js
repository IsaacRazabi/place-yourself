// import {storageService } from './async-storage.service.js'
// import {defaultStayes } from '../data/airbnb.js';
import { userService } from './user.service.js';
import { httpService } from './http.service.js'




export const stayService = {
  query,
  getById,
  getEmptyStay,
  remove,
add,
saveSearchNames,
loadSearchNames,
// initMap,
// onInit
};

// const STAY_KEY = 'stayData';
// const gStayes = defaultStayes.stay;
const SEARCH = 'SEARCH NAMES'
// var gMap;

function query(filterBy) {
  console.log(filterBy);
  return httpService.get("stay", filterBy);

  // return storageService.query(STAY_KEY)
  // .then(stayes => {
  //   if (!stayes.length) { 
  //       const initialstayList =  gStayes;
  //       storageService.postMany(STAY_KEY, initialstayList) 
  //       return initialstayList;
  //   }


  //   let cheakedAmenities = [];
  //   if(cheakedAmenities.length) {
  //    Object.entries(filterBy.amenities).forEach(
  //     ([key, value]) => { if (value) {cheakedAmenities.push(key)}}
  // );
  //    }
  // if (cheakedAmenities.includes('Smokingallowed')) {
  //   let idx = cheakedAmenities.findIndex(name=> name === 'Smokingallowed');
  //   cheakedAmenities.splice(idx,1,'Smoking allowed')
  // } 
  // if (cheakedAmenities.includes('Cookingbasics')) {
  //   let idx = cheakedAmenities.findIndex(name=> name === 'Cookingbasics');
  //   cheakedAmenities.splice(idx,1,'Cooking basics')
  // } 
  // if (cheakedAmenities.includes('Petsallowed')) {
  //   let idx = cheakedAmenities.findIndex(name=> name === 'Petsallowed');
  //   cheakedAmenities.splice(idx,1,'Pets allowed')
  // } 


  //   let regex = new RegExp(filterBy.loc.address, 'i')
  //   let filteredStayes=stayes.filter((stay) =>regex.test(stay.loc.address)) 
  //   .filter(stay=> stay.price>filterBy.priceStart && stay.price < filterBy.priceEnd )


  //   if(cheakedAmenities.length) {
  //   return filteredStayes.filter(stay=>stay.amenities.some(sta=>cheakedAmenities.includes(sta)))
  //   } 

  //    return filteredStayes;
  //   })
}

function getById(stayId) {
  return httpService.get("stay/" + stayId);
}

function getEmptyStay() {
  return {
    name: "Located near by the Royal Palace",
    summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    price: null,
    loc: {
      country: "France",
      countryCode: "FR",
      address: "Paris, France",
      lat: -8.61308,
      lng: 41.1413,
    },
    type: "",
    createdAt: Date.now(),
    imgUrls: [],
    reviews: [{
      "id": "mtest111",
      "txt": "Very helpful hosts. Cooked traditional...",
      "rate": 4.9,
      "votes": 432,
      "by": {
          "_id": "u102",
          "fullname": "Jesica Brown",
          "imgUrl": "../assets/examp/exam-avatar3.jpg"
      }
  }],
    host: {
      _id: userService.getLoggedinUser()._id,
      fullname: userService.getLoggedinUser().fullname,
      imgUrl: userService.getLoggedinUser().imgUrl
    }
  };
}

// function getEmptyStay() {
//   return {
//     name: "",
//     summary: "",
//     price: null,
//     loc: { address: '' },
//     type: "",
//     createdAt: Date.now(),
//     imgUrls: [],
//     reviews: [{
//       "id": "mtest111",
//       "txt": "Very helpful hosts. Cooked traditional...",
//       "rate": 5,
//       "votes": 1,
//       "by": {
//           "_id": "u102",
//           "fullname": "user2",
//           "imgUrl": "/img/img2.jpg"
//       }
//   }],
//     host: {
//       _id: userService.getLoggedinUser()._id,
//       fullname: userService.getLoggedinUser().fullname,
//       imgUrl: userService.getLoggedinUser().imgUrl
//     }
//   };
// }

function remove(stayId) {
  return httpService.delete(`stay/${stayId}`)
  // return storageService.delete('stayData', stayId)

}


async function add(stay) {
  try {


    if (stay._id) {
      // stay.byUser = userService.getLoggedinUser()
      // stay.aboutUser = await userService.getById(stay.aboutUserId)
      const addedStay = await httpService.put("stay", stay);
      // const addedStay = storageService.put(STAY_KEY, stay)
      return addedStay
    }
    else {
      //  stay.byUser = userService.getLoggedinUser()
      //  stay.aboutUser = await userService.getById(stay.aboutUserId)
      const addedStay = await httpService.post("stay", stay);
      //  const addedStay = storageService.post(STAY_KEY, stay)
      return addedStay
    }
  }
  catch (error) {
    console.log(error);
    throw new Error("could not save stay");
  }
}

function saveSearchNames(names){
  return _saveToStorage(SEARCH,names)
 }
 function loadSearchNames(){
  // if (!_loadFromStorage(SEARCH)){
  //   _saveToStorage(SEARCH,defaultSearch)
  // }
 return _loadFromStorage(SEARCH)
}

function _saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function _loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}

// function initMap(lat = 48.864716, lng =2.349014) {
//   return _connectGoogleApi()
//       .then(() => {
//           gMap = new google.maps.Map(
//               document.querySelector('#map'), {
//               center: { lat, lng },
//               zoom: 15
//           })
//           return gMap
//       })
//   }

//   function _connectGoogleApi() {
//     if (window.google) return Promise.resolve()
//     const API_KEY = 'AIzaSyCbite0Sj6yV5I4oJPBkTebcmdfT01sW9w'; 
//     var elGoogleApi = document.createElement('script');
//     elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
//     elGoogleApi.async = true;
//     document.body.append(elGoogleApi);

//     return new Promise((resolve, reject) => {
//         elGoogleApi.onload = resolve;
//         elGoogleApi.onerror = () => reject('Google script failed to load')
//     })
// }

// function onInit() {
//   mapService.initMap()
//       .then((map) => {
//           console.log('Map is ready');
//           map.addListener("click", (event) => {
//               mapService.addMarker(event.latLng.toJSON());
//               let time = Date.now()
//               let name = prompt('what is the name of this location')
//              locService.saveLocations(name,event.latLng.toJSON(),time)
//              onGetLocs()
//            });
//       })
//       .catch(() => console.log('Error: cannot init map'));
// }