// Tempting to use Atlas airbnb test db?
// https://docs.atlas.mongodb.com/sample-data/sample-airbnb/
// Need to be mapped to simpler model

// State: stay (crudl) , trip.

export const defaultStayes = {
  "trip(FrontendOnly)": {
    startDate: "2025/10/15",
    endDate: "2025/10/17",
    guests: {
      adults: 2,
      kids: 1,
    },
    loc: {
      country: "Portugal",
      countryCode: "PT",
      address: "Porto, Portugal",
      lat: -8.61308,
      lng: 41.1413,
    },
  },
  stay: [
    {
      _id: "1000654611",
      name: "Ribeira Charming Duplex",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        "otherImg.jpg",
      ],
      price: 75.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Israel",
        countryCode: "IL",
        address: "Haifa, Israel",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.7,
          votes: 63,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654622",
      name: "Amazing private suite 10min from center",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/be0cacdf-bab1-4734-b74e-b1f8c2977125.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 145.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cooking basics"],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "France",
        countryCode: "FR",
        address: "Paris, France",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.3,
          votes: 435,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654633",
      name: "House in the greenest part of the city",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-42081840/original/7efd2968-6a22-4836-bac4-8ae0dc824002.jpeg?im_w=720",
        "otherImg.jpg",
      ],
      price: 96.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Germany",
        countryCode: "GR",
        address: "Berlin, Germany",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.1,
          votes: 123,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654644",
      name: "Old Nickel is located in the city centre ",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/92f3e0d1-7d10-4be3-8eba-e5ca93e28106.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 101.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Spain",
        countryCode: "SP",
        address: "Spain, Barcelona",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 2.5,
          votes: 14,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654655",
      name: "Located near by the Royal Palace",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/438d8f15-1d46-42d3-a625-23a6c7df8d61.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 74.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cooking basics"],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Italy",
        countryCode: "IT",
        address: "Rome, Italy",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.0,
          votes: 67,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654666",
      name: "In a prime location",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/fd17b546-5ecf-461f-ae41-b3efd0b3ca28.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 256.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed"],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Portugal",
        countryCode: "PT",
        address: "Porto, Portugal",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 3.8,
          votes: 689,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654677",
      name: "Situated in the heart of the city centre",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-47997821/original/49793977-2eff-4e82-a1ef-610832c3f526.jpeg?im_w=720",
        "otherImg.jpg",
      ],
      price: 159.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Portugal",
        countryCode: "PT",
        address: "Porto, Portugal",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.7,
          votes: 35,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654681",
      name: "At walking distance from Central Station ",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/8c94c2fd-d1a6-465a-93a4-ff989cf287ee.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 229.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cooking basics"],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Israel",
        countryCode: "IL",
        address: "Haifa, Israel",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.5,
          votes: 421,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654629",
      name: "Restaurant and Irish pub near by ",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/2bda3dae-6ddc-4215-8728-c76c62bebc64.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 125.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: ["TV", "Wifi", "Kitchen", "Smoking allowed", "Cooking basics"],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "France",
        countryCode: "FR",
        address: "Paris, France",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.3,
          votes: 160,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654603",
      name: "Easy access to all famous sights",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/7df0697a-af3c-4b06-9ef6-73697d43981d.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 81.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Germany",
        countryCode: "GR",
        address: "Berlin, Germany",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.2,
          votes: 253,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654664",
      name: "On-site parking is available",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/d1498446-3c89-4511-8ede-dab28ca50edb.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 76.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Spain",
        countryCode: "SP",
        address: "Spain, Barcelona",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 3.2,
          votes: 893,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "10006546512",
      name: "Is a 5-minute walk away from main square",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-47997821/original/70575592-6805-47b1-80e0-3fab545d6e23.jpeg?im_w=720",
        "otherImg.jpg",
      ],
      price: 154.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Italy",
        countryCode: "IT",
        address: "Rome, Italy",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.4,
          votes: 118,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "10006546634",
      name: " Situated on the most exclusive shopping street",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/f2e6581c-c8f3-4c43-8b02-d095460674d5.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 321.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Portugal",
        countryCode: "PT",
        address: "Porto, Portugal",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.8,
          votes: 82,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },

    {
      _id: "10006546457",
      name: "Ribeira Charming Duplex",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/16c5f59c-2404-4c00-a7b6-497c234ed1e0.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 129.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Portugal",
        countryCode: "PT",
        address: "Porto, Portugal",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 3.7,
          votes: 445,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "10006546173",
      name: "Ribeira Charming Duplex",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        "otherImg.jpg",
      ],
      price: 75.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Israel",
        countryCode: "IL",
        address: "Haifa, Israel",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.7,
          votes: 63,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "10006546288",
      name: "Amazing private suite 10min from center",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/be0cacdf-bab1-4734-b74e-b1f8c2977125.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 145.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "France",
        countryCode: "FR",
        address: "Paris, France",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.3,
          votes: 435,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "10006546903",
      name: "House in the greenest part of the city",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-42081840/original/7efd2968-6a22-4836-bac4-8ae0dc824002.jpeg?im_w=720",
        "otherImg.jpg",
      ],
      price: 96.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Germany",
        countryCode: "GR",
        address: "Berlin, Germany",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.1,
          votes: 123,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "100065462344",
      name: "Old Nickel is located in the city centre ",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/92f3e0d1-7d10-4be3-8eba-e5ca93e28106.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 101.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Spain",
        countryCode: "SP",
        address: "Spain, Barcelona",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 2.5,
          votes: 14,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "10006546545",
      name: "Located near by the Royal Palace",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/438d8f15-1d46-42d3-a625-23a6c7df8d61.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 74.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Italy",
        countryCode: "IT",
        address: "Rome, Italy",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.0,
          votes: 67,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "100065466208",
      name: "In a prime location",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/fd17b546-5ecf-461f-ae41-b3efd0b3ca28.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 256.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Portugal",
        countryCode: "PT",
        address: "Porto, Portugal",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 3.8,
          votes: 689,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654611347",
      name: "Situated in the heart of the city centre",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-47997821/original/49793977-2eff-4e82-a1ef-610832c3f526.jpeg?im_w=720",
        "otherImg.jpg",
      ],
      price: 159.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Portugal",
        countryCode: "PT",
        address: "Porto, Portugal",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.7,
          votes: 35,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654612254",
      name: "At walking distance from Central Station ",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/8c94c2fd-d1a6-465a-93a4-ff989cf287ee.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 229.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Israel",
        countryCode: "IL",
        address: "Haifa, Israel",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.5,
          votes: 421,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "100065468322",
      name: "Restaurant and Irish pub near by ",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/2bda3dae-6ddc-4215-8728-c76c62bebc64.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 125.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "France",
        countryCode: "FR",
        address: "Paris, France",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.3,
          votes: 160,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "100065854613",
      name: "Easy access to all famous sights",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/7df0697a-af3c-4b06-9ef6-73697d43981d.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 81.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Germany",
        countryCode: "GR",
        address: "Berlin, Germany",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.2,
          votes: 253,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "1000654290464",
      name: "On-site parking is available",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/d1498446-3c89-4511-8ede-dab28ca50edb.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 76.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Spain",
        countryCode: "SP",
        address: "Spain, Barcelona",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 3.2,
          votes: 893,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "100065345675907",
      name: "Is a 5-minute walk away from main square",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-47997821/original/70575592-6805-47b1-80e0-3fab545d6e23.jpeg?im_w=720",
        "otherImg.jpg",
      ],
      price: 154.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Italy",
        countryCode: "IT",
        address: "Rome, Italy",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.4,
          votes: 118,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
    {
      _id: "100062316485466",
      name: " Situated on the most exclusive shopping street",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/f2e6581c-c8f3-4c43-8b02-d095460674d5.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 321.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Portugal",
        countryCode: "PT",
        address: "Porto, Portugal",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 4.8,
          votes: 82,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },

    {
      _id: "100065467435",
      name: "Ribeira Charming Duplex",
      imgUrls: [
        "https://a0.muscache.com/im/pictures/16c5f59c-2404-4c00-a7b6-497c234ed1e0.jpg?im_w=720",
        "otherImg.jpg",
      ],
      price: 129.0,
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      capacity: 8,
      amenities: [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics",
      ],
      host: {
        _id: "51399391",
        fullname: "Davit Pok",
        imgUrl:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      loc: {
        country: "Portugal",
        countryCode: "PT",
        address: "Porto, Portugal",
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: "madeId",
          txt: "Very helpful hosts. Cooked traditional...",
          rate: 3.7,
          votes: 445,
          by: {
            _id: "u102",
            fullname: "user2",
            imgUrl: "/img/img2.jpg",
          },
        },
      ],
      likedByUserIds: ["u101", "u102"],
    },
  ],
  order: [
    {
      _id: "o1225",
      hostId: "u102",
      createdAt: 9898989,
      buyer: {
        _id: "u101",
        fullname: "User 1",
      },
      totalPrice: 160,
      startDate: "2025/10/15",
      endDate: "2025/10/17",
      guests: {
        adults: 2,
        kids: 1,
      },
      stay: {
        _id: "h102",
        name: "House Of Uncle My",
        price: 63.0,
      },
      status: "pending",
    },
  ],
  user: [
    {
      _id: "u101",
      fullname: "User 1",
      imgUrl: "/img/img1.jpg",
      isAdmin: false,
      username: "user1",
      password: "secret",
    },
    {
      _id: "u102",
      fullname: "User 2",
      imgUrl: "/img/img2.jpg",
      isAdmin: false,
      username: "user2",
      password: "secret",
    },
  ],
};
