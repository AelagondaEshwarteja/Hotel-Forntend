import type { HotelContentApiResponse } from "../types/hotelDetailTypes";

export const HOTEL_CONTENT_DATA: HotelContentApiResponse[] = [
  {
    "data": {
      "id": "HTL-MUM-1001",
      "name": "Taj Lands End",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&q=80",
          "caption": "Taj Lands End exterior"
        },
        {
          "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
          "caption": "Guest room"
        },
        {
          "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
          "caption": "Hotel facilities"
        },
        {
          "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80",
          "caption": "Restaurant"
        }
      ],
      "address": {
        "addressLine": "Bandra",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400000",
        "area": "Bandra",
        "latitude": 19.0453,
        "longitude": 72.8203,
        "zone": "Central / Main Zone"
      },
      "roomTypes": [
        {
          "id": "HTL-MUM-1001-ROOM-1",
          "name": "Deluxe King Room",
          "maxGuestOccupancy": 3,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Deluxe King Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Deluxe King Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        },
        {
          "id": "HTL-MUM-1001-ROOM-2",
          "name": "Luxury Sea View Room",
          "maxGuestOccupancy": 4,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Luxury Sea View Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Luxury Sea View Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        }
      ],
      "description": "Taj Lands End is a 5-star property in Bandra, Mumbai, offering comfortable accommodation and modern facilities.",
      "checkIn": "14:00",
      "checkOut": "11:00",
      "contact": {
        "phone": "+91 99999 00000",
        "phoneNoExtension": "9999900000",
        "fax": "+91 99999 00001",
        "email": "reservations.htl-mum-1001@example.com"
      },
      "starRating": 5,
      "totalRooms": 110,
      "totalFloors": 6,
      "carParkingSlots": 25,
      "landmarks": [
        {
          "name": "Bandra Main Attraction",
          "distance": 0.8
        },
        {
          "name": "Mumbai City Centre",
          "distance": 2.5
        }
      ],
      "amenities": [
        {
          "name": "Free Wi-Fi",
          "code": "FREE_WI_FI",
          "category": "Connectivity",
          "subCategory": "Free Wi-Fi"
        },
        {
          "name": "Swimming Pool",
          "code": "SWIMMING_POOL",
          "category": "Recreation",
          "subCategory": "Swimming Pool"
        },
        {
          "name": "Fitness Center",
          "code": "FITNESS_CENTER",
          "category": "Wellness",
          "subCategory": "Fitness Center"
        },
        {
          "name": "Restaurant",
          "code": "RESTAURANT",
          "category": "Food & Beverage",
          "subCategory": "Restaurant"
        },
        {
          "name": "Room Service",
          "code": "ROOM_SERVICE",
          "category": "Property",
          "subCategory": "Room Service"
        },
        {
          "name": "Parking",
          "code": "PARKING",
          "category": "Transport",
          "subCategory": "Parking"
        },
        {
          "name": "Air Conditioning",
          "code": "AIR_CONDITIONING",
          "category": "Property",
          "subCategory": "Air Conditioning"
        },
        {
          "name": "Spa",
          "code": "SPA",
          "category": "Wellness",
          "subCategory": "Spa"
        }
      ],
      "policies": [
        {
          "type": "CHECK_IN",
          "desc": "Check-in starts from 2:00 PM."
        },
        {
          "type": "CHECK_OUT",
          "desc": "Check-out must be completed by 11:00 AM."
        },
        {
          "type": "CHILD_POLICY",
          "desc": "Children are welcome. Extra bed charges may apply."
        },
        {
          "type": "PET_POLICY",
          "desc": "Pets are not allowed unless approved by the property."
        }
      ],
      "themes": [
        "Luxury",
        "Family",
        "Business"
      ],
      "rank": {
        "weekday": 1,
        "weekend": 1
      },
      "anyTimeCheckIn": false,
      "googleReviewInfo": {
        "placeId": "PLACE-HTL-MUM-1001",
        "noOfReviews": 650,
        "averageRating": 4.1,
        "writeReviewURL": "https://example.com/review/htl-mum-1001",
        "reviewsPageURL": "https://example.com/reviews/htl-mum-1001",
        "review": [
          {
            "review": "Comfortable stay, clean rooms and helpful staff.",
            "name": "Aarav Mehta",
            "rating": 5,
            "timestamp": "2026-08-01T10:30:00Z"
          },
          {
            "review": "Good location and a smooth overall experience.",
            "name": "Sneha Kapoor",
            "rating": 4,
            "timestamp": "2026-07-20T08:15:00Z"
          }
        ]
      },
      "nCtgs": {
        "Restaurant": [
          {
            "R": "Taj Lands End Restaurant",
            "C": "Multi Cuisine",
            "T": "All Day Dining"
          }
        ],
        "Bar": [],
        "Important_Landmark": [
          {
            "D": "0.8 km",
            "L": "Bandra Main Attraction"
          }
        ],
        "Most_Popular_Landmark": [
          {
            "D": "2.5 km",
            "L": "Mumbai City Centre"
          }
        ]
      },
      "extraInfo": {
        "checkInInstruction": "Please carry valid government-issued photo identification and booking confirmation. Early check-in is subject to availability."
      }
    }
  },
  {
    "data": {
      "id": "HTL-MUM-1002",
      "name": "The Oberoi Mumbai",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&q=80",
          "caption": "The Oberoi Mumbai exterior"
        },
        {
          "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
          "caption": "Guest room"
        },
        {
          "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
          "caption": "Hotel facilities"
        },
        {
          "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80",
          "caption": "Restaurant"
        }
      ],
      "address": {
        "addressLine": "Nariman Point",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400000",
        "area": "Nariman Point",
        "latitude": 18.9256,
        "longitude": 72.8242,
        "zone": "Central / Main Zone"
      },
      "roomTypes": [
        {
          "id": "HTL-MUM-1002-ROOM-1",
          "name": "Premier Sea View Room",
          "maxGuestOccupancy": 3,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Premier Sea View Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Premier Sea View Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        },
        {
          "id": "HTL-MUM-1002-ROOM-2",
          "name": "Luxury Suite",
          "maxGuestOccupancy": 4,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Luxury Suite"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Luxury Suite interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        }
      ],
      "description": "The Oberoi Mumbai is a 5-star property in Nariman Point, Mumbai, offering comfortable accommodation and modern facilities.",
      "checkIn": "14:00",
      "checkOut": "11:00",
      "contact": {
        "phone": "+91 99999 00000",
        "phoneNoExtension": "9999900000",
        "fax": "+91 99999 00001",
        "email": "reservations.htl-mum-1002@example.com"
      },
      "starRating": 5,
      "totalRooms": 120,
      "totalFloors": 7,
      "carParkingSlots": 30,
      "landmarks": [
        {
          "name": "Nariman Point Main Attraction",
          "distance": 0.8
        },
        {
          "name": "Mumbai City Centre",
          "distance": 2.5
        }
      ],
      "amenities": [
        {
          "name": "Free Wi-Fi",
          "code": "FREE_WI_FI",
          "category": "Connectivity",
          "subCategory": "Free Wi-Fi"
        },
        {
          "name": "Swimming Pool",
          "code": "SWIMMING_POOL",
          "category": "Recreation",
          "subCategory": "Swimming Pool"
        },
        {
          "name": "Restaurant",
          "code": "RESTAURANT",
          "category": "Food & Beverage",
          "subCategory": "Restaurant"
        },
        {
          "name": "Room Service",
          "code": "ROOM_SERVICE",
          "category": "Property",
          "subCategory": "Room Service"
        },
        {
          "name": "Air Conditioning",
          "code": "AIR_CONDITIONING",
          "category": "Property",
          "subCategory": "Air Conditioning"
        },
        {
          "name": "Spa",
          "code": "SPA",
          "category": "Wellness",
          "subCategory": "Spa"
        },
        {
          "name": "Bar",
          "code": "BAR",
          "category": "Food & Beverage",
          "subCategory": "Bar"
        }
      ],
      "policies": [
        {
          "type": "CHECK_IN",
          "desc": "Check-in starts from 2:00 PM."
        },
        {
          "type": "CHECK_OUT",
          "desc": "Check-out must be completed by 11:00 AM."
        },
        {
          "type": "CHILD_POLICY",
          "desc": "Children are welcome. Extra bed charges may apply."
        },
        {
          "type": "PET_POLICY",
          "desc": "Pets are not allowed unless approved by the property."
        }
      ],
      "themes": [
        "Luxury",
        "Family",
        "Business"
      ],
      "rank": {
        "weekday": 2,
        "weekend": 1
      },
      "anyTimeCheckIn": false,
      "googleReviewInfo": {
        "placeId": "PLACE-HTL-MUM-1002",
        "noOfReviews": 800,
        "averageRating": 4.2,
        "writeReviewURL": "https://example.com/review/htl-mum-1002",
        "reviewsPageURL": "https://example.com/reviews/htl-mum-1002",
        "review": [
          {
            "review": "Comfortable stay, clean rooms and helpful staff.",
            "name": "Aarav Mehta",
            "rating": 5,
            "timestamp": "2026-08-01T10:30:00Z"
          },
          {
            "review": "Good location and a smooth overall experience.",
            "name": "Sneha Kapoor",
            "rating": 4,
            "timestamp": "2026-07-20T08:15:00Z"
          }
        ]
      },
      "nCtgs": {
        "Restaurant": [
          {
            "R": "The Oberoi Mumbai Restaurant",
            "C": "Multi Cuisine",
            "T": "All Day Dining"
          }
        ],
        "Bar": [
          {
            "B": "The Oberoi Mumbai Bar",
            "C": "Beverages",
            "T": "Lounge"
          }
        ],
        "Important_Landmark": [
          {
            "D": "0.8 km",
            "L": "Nariman Point Main Attraction"
          }
        ],
        "Most_Popular_Landmark": [
          {
            "D": "2.5 km",
            "L": "Mumbai City Centre"
          }
        ]
      },
      "extraInfo": {
        "checkInInstruction": "Please carry valid government-issued photo identification and booking confirmation. Early check-in is subject to availability."
      }
    }
  },
  {
    "data": {
      "id": "HTL-MUM-1003",
      "name": "Fairmont Mumbai",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=300&q=80",
          "caption": "Fairmont Mumbai exterior"
        },
        {
          "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
          "caption": "Guest room"
        },
        {
          "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
          "caption": "Hotel facilities"
        },
        {
          "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80",
          "caption": "Restaurant"
        }
      ],
      "address": {
        "addressLine": "Western Suburbs",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400000",
        "area": "Western Suburbs",
        "latitude": 19.1075,
        "longitude": 72.8263,
        "zone": "Central / Main Zone"
      },
      "roomTypes": [
        {
          "id": "HTL-MUM-1003-ROOM-1",
          "name": "Fairmont King Room",
          "maxGuestOccupancy": 3,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Fairmont King Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Fairmont King Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        },
        {
          "id": "HTL-MUM-1003-ROOM-2",
          "name": "Fairmont Twin Room",
          "maxGuestOccupancy": 4,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Fairmont Twin Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Fairmont Twin Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "Single Bed",
              "bedCount": 2
            }
          ],
          "roomSize": "420 sq ft"
        }
      ],
      "description": "Fairmont Mumbai is a 5-star property in Western Suburbs, Mumbai, offering comfortable accommodation and modern facilities.",
      "checkIn": "14:00",
      "checkOut": "11:00",
      "contact": {
        "phone": "+91 99999 00000",
        "phoneNoExtension": "9999900000",
        "fax": "+91 99999 00001",
        "email": "reservations.htl-mum-1003@example.com"
      },
      "starRating": 5,
      "totalRooms": 130,
      "totalFloors": 8,
      "carParkingSlots": 35,
      "landmarks": [
        {
          "name": "Western Suburbs Main Attraction",
          "distance": 0.8
        },
        {
          "name": "Mumbai City Centre",
          "distance": 2.5
        }
      ],
      "amenities": [
        {
          "name": "Free Wi-Fi",
          "code": "FREE_WI_FI",
          "category": "Connectivity",
          "subCategory": "Free Wi-Fi"
        },
        {
          "name": "Swimming Pool",
          "code": "SWIMMING_POOL",
          "category": "Recreation",
          "subCategory": "Swimming Pool"
        },
        {
          "name": "Fitness Center",
          "code": "FITNESS_CENTER",
          "category": "Wellness",
          "subCategory": "Fitness Center"
        },
        {
          "name": "Restaurant",
          "code": "RESTAURANT",
          "category": "Food & Beverage",
          "subCategory": "Restaurant"
        },
        {
          "name": "Parking",
          "code": "PARKING",
          "category": "Transport",
          "subCategory": "Parking"
        },
        {
          "name": "Air Conditioning",
          "code": "AIR_CONDITIONING",
          "category": "Property",
          "subCategory": "Air Conditioning"
        }
      ],
      "policies": [
        {
          "type": "CHECK_IN",
          "desc": "Check-in starts from 2:00 PM."
        },
        {
          "type": "CHECK_OUT",
          "desc": "Check-out must be completed by 11:00 AM."
        },
        {
          "type": "CHILD_POLICY",
          "desc": "Children are welcome. Extra bed charges may apply."
        },
        {
          "type": "PET_POLICY",
          "desc": "Pets are not allowed unless approved by the property."
        }
      ],
      "themes": [
        "Luxury",
        "Family",
        "Business"
      ],
      "rank": {
        "weekday": 3,
        "weekend": 2
      },
      "anyTimeCheckIn": false,
      "googleReviewInfo": {
        "placeId": "PLACE-HTL-MUM-1003",
        "noOfReviews": 950,
        "averageRating": 4.3,
        "writeReviewURL": "https://example.com/review/htl-mum-1003",
        "reviewsPageURL": "https://example.com/reviews/htl-mum-1003",
        "review": [
          {
            "review": "Comfortable stay, clean rooms and helpful staff.",
            "name": "Aarav Mehta",
            "rating": 5,
            "timestamp": "2026-08-01T10:30:00Z"
          },
          {
            "review": "Good location and a smooth overall experience.",
            "name": "Sneha Kapoor",
            "rating": 4,
            "timestamp": "2026-07-20T08:15:00Z"
          }
        ]
      },
      "nCtgs": {
        "Restaurant": [
          {
            "R": "Fairmont Mumbai Restaurant",
            "C": "Multi Cuisine",
            "T": "All Day Dining"
          }
        ],
        "Bar": [],
        "Important_Landmark": [
          {
            "D": "0.8 km",
            "L": "Western Suburbs Main Attraction"
          }
        ],
        "Most_Popular_Landmark": [
          {
            "D": "2.5 km",
            "L": "Mumbai City Centre"
          }
        ]
      },
      "extraInfo": {
        "checkInInstruction": "Please carry valid government-issued photo identification and booking confirmation. Early check-in is subject to availability."
      }
    }
  },
  {
    "data": {
      "id": "HTL-MUM-1004",
      "name": "Sea Pearl Boutique Stay",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=300&q=80",
          "caption": "Sea Pearl Boutique Stay exterior"
        },
        {
          "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
          "caption": "Guest room"
        },
        {
          "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
          "caption": "Hotel facilities"
        },
        {
          "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80",
          "caption": "Restaurant"
        }
      ],
      "address": {
        "addressLine": "Andheri East",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400000",
        "area": "Andheri East",
        "latitude": 19.1197,
        "longitude": 72.8697,
        "zone": "Central / Main Zone"
      },
      "roomTypes": [
        {
          "id": "HTL-MUM-1004-ROOM-1",
          "name": "Standard Room",
          "maxGuestOccupancy": 3,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Standard Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Standard Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "Queen Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "260 sq ft"
        },
        {
          "id": "HTL-MUM-1004-ROOM-2",
          "name": "Deluxe Room",
          "maxGuestOccupancy": 4,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Deluxe Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Deluxe Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "Queen Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "260 sq ft"
        }
      ],
      "description": "Sea Pearl Boutique Stay is a 3-star property in Andheri East, Mumbai, offering comfortable accommodation and modern facilities.",
      "checkIn": "14:00",
      "checkOut": "11:00",
      "contact": {
        "phone": "+91 99999 00000",
        "phoneNoExtension": "9999900000",
        "fax": "+91 99999 00001",
        "email": "reservations.htl-mum-1004@example.com"
      },
      "starRating": 3,
      "totalRooms": 140,
      "totalFloors": 9,
      "carParkingSlots": 40,
      "landmarks": [
        {
          "name": "Andheri East Main Attraction",
          "distance": 0.8
        },
        {
          "name": "Mumbai City Centre",
          "distance": 2.5
        }
      ],
      "amenities": [
        {
          "name": "Free Wi-Fi",
          "code": "FREE_WI_FI",
          "category": "Connectivity",
          "subCategory": "Free Wi-Fi"
        },
        {
          "name": "Room Service",
          "code": "ROOM_SERVICE",
          "category": "Property",
          "subCategory": "Room Service"
        },
        {
          "name": "Air Conditioning",
          "code": "AIR_CONDITIONING",
          "category": "Property",
          "subCategory": "Air Conditioning"
        }
      ],
      "policies": [
        {
          "type": "CHECK_IN",
          "desc": "Check-in starts from 2:00 PM."
        },
        {
          "type": "CHECK_OUT",
          "desc": "Check-out must be completed by 11:00 AM."
        },
        {
          "type": "CHILD_POLICY",
          "desc": "Children are welcome. Extra bed charges may apply."
        },
        {
          "type": "PET_POLICY",
          "desc": "Pets are not allowed unless approved by the property."
        }
      ],
      "themes": [
        "City Stay",
        "Family",
        "Business"
      ],
      "rank": {
        "weekday": 4,
        "weekend": 3
      },
      "anyTimeCheckIn": false,
      "googleReviewInfo": {
        "placeId": "PLACE-HTL-MUM-1004",
        "noOfReviews": 1100,
        "averageRating": 4.4,
        "writeReviewURL": "https://example.com/review/htl-mum-1004",
        "reviewsPageURL": "https://example.com/reviews/htl-mum-1004",
        "review": [
          {
            "review": "Comfortable stay, clean rooms and helpful staff.",
            "name": "Aarav Mehta",
            "rating": 5,
            "timestamp": "2026-08-01T10:30:00Z"
          },
          {
            "review": "Good location and a smooth overall experience.",
            "name": "Sneha Kapoor",
            "rating": 4,
            "timestamp": "2026-07-20T08:15:00Z"
          }
        ]
      },
      "nCtgs": {
        "Restaurant": [
          {
            "R": "Sea Pearl Boutique Stay Restaurant",
            "C": "Multi Cuisine",
            "T": "All Day Dining"
          }
        ],
        "Bar": [],
        "Important_Landmark": [
          {
            "D": "0.8 km",
            "L": "Andheri East Main Attraction"
          }
        ],
        "Most_Popular_Landmark": [
          {
            "D": "2.5 km",
            "L": "Mumbai City Centre"
          }
        ]
      },
      "extraInfo": {
        "checkInInstruction": "Please carry valid government-issued photo identification and booking confirmation. Early check-in is subject to availability."
      }
    }
  },
  {
    "data": {
      "id": "HTL-MUM-1005",
      "name": "Marine Drive Suites",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&q=80",
          "caption": "Marine Drive Suites exterior"
        },
        {
          "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
          "caption": "Guest room"
        },
        {
          "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
          "caption": "Hotel facilities"
        },
        {
          "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80",
          "caption": "Restaurant"
        }
      ],
      "address": {
        "addressLine": "Marine Drive",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400000",
        "area": "Marine Drive",
        "latitude": 18.9432,
        "longitude": 72.8235,
        "zone": "Central / Main Zone"
      },
      "roomTypes": [
        {
          "id": "HTL-MUM-1005-ROOM-1",
          "name": "City View Suite",
          "maxGuestOccupancy": 3,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "City View Suite"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "City View Suite interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        },
        {
          "id": "HTL-MUM-1005-ROOM-2",
          "name": "Family Suite",
          "maxGuestOccupancy": 4,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Family Suite"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Family Suite interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "Queen Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        }
      ],
      "description": "Marine Drive Suites is a 4-star property in Marine Drive, Mumbai, offering comfortable accommodation and modern facilities.",
      "checkIn": "14:00",
      "checkOut": "11:00",
      "contact": {
        "phone": "+91 99999 00000",
        "phoneNoExtension": "9999900000",
        "fax": "+91 99999 00001",
        "email": "reservations.htl-mum-1005@example.com"
      },
      "starRating": 4,
      "totalRooms": 150,
      "totalFloors": 10,
      "carParkingSlots": 45,
      "landmarks": [
        {
          "name": "Marine Drive Main Attraction",
          "distance": 0.8
        },
        {
          "name": "Mumbai City Centre",
          "distance": 2.5
        }
      ],
      "amenities": [
        {
          "name": "City view",
          "code": "CITY_VIEW",
          "category": "Property",
          "subCategory": "City view"
        },
        {
          "name": "Free Wi-Fi",
          "code": "FREE_WI_FI",
          "category": "Connectivity",
          "subCategory": "Free Wi-Fi"
        },
        {
          "name": "Fitness Center",
          "code": "FITNESS_CENTER",
          "category": "Wellness",
          "subCategory": "Fitness Center"
        },
        {
          "name": "Restaurant",
          "code": "RESTAURANT",
          "category": "Food & Beverage",
          "subCategory": "Restaurant"
        },
        {
          "name": "Air Conditioning",
          "code": "AIR_CONDITIONING",
          "category": "Property",
          "subCategory": "Air Conditioning"
        }
      ],
      "policies": [
        {
          "type": "CHECK_IN",
          "desc": "Check-in starts from 2:00 PM."
        },
        {
          "type": "CHECK_OUT",
          "desc": "Check-out must be completed by 11:00 AM."
        },
        {
          "type": "CHILD_POLICY",
          "desc": "Children are welcome. Extra bed charges may apply."
        },
        {
          "type": "PET_POLICY",
          "desc": "Pets are not allowed unless approved by the property."
        }
      ],
      "themes": [
        "City Stay",
        "Family",
        "Business"
      ],
      "rank": {
        "weekday": 5,
        "weekend": 4
      },
      "anyTimeCheckIn": false,
      "googleReviewInfo": {
        "placeId": "PLACE-HTL-MUM-1005",
        "noOfReviews": 1250,
        "averageRating": 4.0,
        "writeReviewURL": "https://example.com/review/htl-mum-1005",
        "reviewsPageURL": "https://example.com/reviews/htl-mum-1005",
        "review": [
          {
            "review": "Comfortable stay, clean rooms and helpful staff.",
            "name": "Aarav Mehta",
            "rating": 5,
            "timestamp": "2026-08-01T10:30:00Z"
          },
          {
            "review": "Good location and a smooth overall experience.",
            "name": "Sneha Kapoor",
            "rating": 4,
            "timestamp": "2026-07-20T08:15:00Z"
          }
        ]
      },
      "nCtgs": {
        "Restaurant": [
          {
            "R": "Marine Drive Suites Restaurant",
            "C": "Multi Cuisine",
            "T": "All Day Dining"
          }
        ],
        "Bar": [],
        "Important_Landmark": [
          {
            "D": "0.8 km",
            "L": "Marine Drive Main Attraction"
          }
        ],
        "Most_Popular_Landmark": [
          {
            "D": "2.5 km",
            "L": "Mumbai City Centre"
          }
        ]
      },
      "extraInfo": {
        "checkInInstruction": "Please carry valid government-issued photo identification and booking confirmation. Early check-in is subject to availability."
      }
    }
  },
  {
    "data": {
      "id": "HTL-MUM-1006",
      "name": "Harbour View Residency",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=300&q=80",
          "caption": "Harbour View Residency exterior"
        },
        {
          "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
          "caption": "Guest room"
        },
        {
          "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
          "caption": "Hotel facilities"
        },
        {
          "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80",
          "caption": "Restaurant"
        }
      ],
      "address": {
        "addressLine": "Colaba",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "400000",
        "area": "Colaba",
        "latitude": 18.9067,
        "longitude": 72.8147,
        "zone": "Central / Main Zone"
      },
      "roomTypes": [
        {
          "id": "HTL-MUM-1006-ROOM-1",
          "name": "Deluxe Twin Room",
          "maxGuestOccupancy": 3,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Deluxe Twin Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Deluxe Twin Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "Single Bed",
              "bedCount": 2
            }
          ],
          "roomSize": "260 sq ft"
        },
        {
          "id": "HTL-MUM-1006-ROOM-2",
          "name": "Deluxe Double Room",
          "maxGuestOccupancy": 4,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Deluxe Double Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Deluxe Double Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "Queen Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "260 sq ft"
        }
      ],
      "description": "Harbour View Residency is a 3-star property in Colaba, Mumbai, offering comfortable accommodation and modern facilities.",
      "checkIn": "14:00",
      "checkOut": "11:00",
      "contact": {
        "phone": "+91 99999 00000",
        "phoneNoExtension": "9999900000",
        "fax": "+91 99999 00001",
        "email": "reservations.htl-mum-1006@example.com"
      },
      "starRating": 3,
      "totalRooms": 160,
      "totalFloors": 11,
      "carParkingSlots": 50,
      "landmarks": [
        {
          "name": "Colaba Main Attraction",
          "distance": 0.8
        },
        {
          "name": "Mumbai City Centre",
          "distance": 2.5
        }
      ],
      "amenities": [
        {
          "name": "Free Wi-Fi",
          "code": "FREE_WI_FI",
          "category": "Connectivity",
          "subCategory": "Free Wi-Fi"
        },
        {
          "name": "Parking",
          "code": "PARKING",
          "category": "Transport",
          "subCategory": "Parking"
        },
        {
          "name": "Air Conditioning",
          "code": "AIR_CONDITIONING",
          "category": "Property",
          "subCategory": "Air Conditioning"
        },
        {
          "name": "Room Service",
          "code": "ROOM_SERVICE",
          "category": "Property",
          "subCategory": "Room Service"
        }
      ],
      "policies": [
        {
          "type": "CHECK_IN",
          "desc": "Check-in starts from 2:00 PM."
        },
        {
          "type": "CHECK_OUT",
          "desc": "Check-out must be completed by 11:00 AM."
        },
        {
          "type": "CHILD_POLICY",
          "desc": "Children are welcome. Extra bed charges may apply."
        },
        {
          "type": "PET_POLICY",
          "desc": "Pets are not allowed unless approved by the property."
        }
      ],
      "themes": [
        "City Stay",
        "Family",
        "Business"
      ],
      "rank": {
        "weekday": 6,
        "weekend": 5
      },
      "anyTimeCheckIn": false,
      "googleReviewInfo": {
        "placeId": "PLACE-HTL-MUM-1006",
        "noOfReviews": 1400,
        "averageRating": 4.1,
        "writeReviewURL": "https://example.com/review/htl-mum-1006",
        "reviewsPageURL": "https://example.com/reviews/htl-mum-1006",
        "review": [
          {
            "review": "Comfortable stay, clean rooms and helpful staff.",
            "name": "Aarav Mehta",
            "rating": 5,
            "timestamp": "2026-08-01T10:30:00Z"
          },
          {
            "review": "Good location and a smooth overall experience.",
            "name": "Sneha Kapoor",
            "rating": 4,
            "timestamp": "2026-07-20T08:15:00Z"
          }
        ]
      },
      "nCtgs": {
        "Restaurant": [
          {
            "R": "Harbour View Residency Restaurant",
            "C": "Multi Cuisine",
            "T": "All Day Dining"
          }
        ],
        "Bar": [],
        "Important_Landmark": [
          {
            "D": "0.8 km",
            "L": "Colaba Main Attraction"
          }
        ],
        "Most_Popular_Landmark": [
          {
            "D": "2.5 km",
            "L": "Mumbai City Centre"
          }
        ]
      },
      "extraInfo": {
        "checkInInstruction": "Please carry valid government-issued photo identification and booking confirmation. Early check-in is subject to availability."
      }
    }
  },
  {
    "data": {
      "id": "HTL-GOA-2001",
      "name": "The Grand Resort",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80",
          "caption": "The Grand Resort exterior"
        },
        {
          "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
          "caption": "Guest room"
        },
        {
          "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
          "caption": "Hotel facilities"
        },
        {
          "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80",
          "caption": "Restaurant"
        }
      ],
      "address": {
        "addressLine": "Candolim",
        "city": "Goa",
        "state": "Goa",
        "country": "India",
        "pincode": "403515",
        "area": "Candolim",
        "latitude": 15.5185,
        "longitude": 73.7631,
        "zone": "Central / Main Zone"
      },
      "roomTypes": [
        {
          "id": "HTL-GOA-2001-ROOM-1",
          "name": "Beachfront Villa",
          "maxGuestOccupancy": 3,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Beachfront Villa"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Beachfront Villa interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        },
        {
          "id": "HTL-GOA-2001-ROOM-2",
          "name": "Pool View Villa",
          "maxGuestOccupancy": 4,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Pool View Villa"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Pool View Villa interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        }
      ],
      "description": "The Grand Resort is a 5-star property in Candolim, Goa, offering comfortable accommodation and modern facilities.",
      "checkIn": "14:00",
      "checkOut": "11:00",
      "contact": {
        "phone": "+91 99999 00000",
        "phoneNoExtension": "9999900000",
        "fax": "+91 99999 00001",
        "email": "reservations.htl-goa-2001@example.com"
      },
      "starRating": 5,
      "totalRooms": 170,
      "totalFloors": 12,
      "carParkingSlots": 55,
      "landmarks": [
        {
          "name": "Candolim Main Attraction",
          "distance": 0.8
        },
        {
          "name": "Goa City Centre",
          "distance": 2.5
        }
      ],
      "amenities": [
        {
          "name": "Pool",
          "code": "POOL",
          "category": "Recreation",
          "subCategory": "Pool"
        },
        {
          "name": "Spa",
          "code": "SPA",
          "category": "Wellness",
          "subCategory": "Spa"
        },
        {
          "name": "Free Wi-Fi",
          "code": "FREE_WI_FI",
          "category": "Connectivity",
          "subCategory": "Free Wi-Fi"
        },
        {
          "name": "Restaurant",
          "code": "RESTAURANT",
          "category": "Food & Beverage",
          "subCategory": "Restaurant"
        },
        {
          "name": "Bar",
          "code": "BAR",
          "category": "Food & Beverage",
          "subCategory": "Bar"
        },
        {
          "name": "Air Conditioning",
          "code": "AIR_CONDITIONING",
          "category": "Property",
          "subCategory": "Air Conditioning"
        }
      ],
      "policies": [
        {
          "type": "CHECK_IN",
          "desc": "Check-in starts from 2:00 PM."
        },
        {
          "type": "CHECK_OUT",
          "desc": "Check-out must be completed by 11:00 AM."
        },
        {
          "type": "CHILD_POLICY",
          "desc": "Children are welcome. Extra bed charges may apply."
        },
        {
          "type": "PET_POLICY",
          "desc": "Pets are not allowed unless approved by the property."
        }
      ],
      "themes": [
        "Luxury",
        "Family",
        "Business"
      ],
      "rank": {
        "weekday": 7,
        "weekend": 6
      },
      "anyTimeCheckIn": false,
      "googleReviewInfo": {
        "placeId": "PLACE-HTL-GOA-2001",
        "noOfReviews": 1550,
        "averageRating": 4.2,
        "writeReviewURL": "https://example.com/review/htl-goa-2001",
        "reviewsPageURL": "https://example.com/reviews/htl-goa-2001",
        "review": [
          {
            "review": "Comfortable stay, clean rooms and helpful staff.",
            "name": "Aarav Mehta",
            "rating": 5,
            "timestamp": "2026-08-01T10:30:00Z"
          },
          {
            "review": "Good location and a smooth overall experience.",
            "name": "Sneha Kapoor",
            "rating": 4,
            "timestamp": "2026-07-20T08:15:00Z"
          }
        ]
      },
      "nCtgs": {
        "Restaurant": [
          {
            "R": "The Grand Resort Restaurant",
            "C": "Multi Cuisine",
            "T": "All Day Dining"
          }
        ],
        "Bar": [
          {
            "B": "The Grand Resort Bar",
            "C": "Beverages",
            "T": "Lounge"
          }
        ],
        "Important_Landmark": [
          {
            "D": "0.8 km",
            "L": "Candolim Main Attraction"
          }
        ],
        "Most_Popular_Landmark": [
          {
            "D": "2.5 km",
            "L": "Goa City Centre"
          }
        ]
      },
      "extraInfo": {
        "checkInInstruction": "Please carry valid government-issued photo identification and booking confirmation. Early check-in is subject to availability."
      }
    }
  },
  {
    "data": {
      "id": "HTL-JAI-3001",
      "name": "Pink City Boutique Stay",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&q=80",
          "caption": "Pink City Boutique Stay exterior"
        },
        {
          "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
          "caption": "Guest room"
        },
        {
          "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
          "caption": "Hotel facilities"
        },
        {
          "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
          "thumburl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=80",
          "caption": "Restaurant"
        }
      ],
      "address": {
        "addressLine": "Pink City",
        "city": "Jaipur",
        "state": "Rajasthan",
        "country": "India",
        "pincode": "302002",
        "area": "Pink City",
        "latitude": 26.9124,
        "longitude": 75.7873,
        "zone": "Central / Main Zone"
      },
      "roomTypes": [
        {
          "id": "HTL-JAI-3001-ROOM-1",
          "name": "Heritage Room",
          "maxGuestOccupancy": 3,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Heritage Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Heritage Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "Queen Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        },
        {
          "id": "HTL-JAI-3001-ROOM-2",
          "name": "Royal Heritage Room",
          "maxGuestOccupancy": 4,
          "images": [
            {
              "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=250&q=80",
              "caption": "Royal Heritage Room"
            },
            {
              "url": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80",
              "thumburl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=250&q=80",
              "caption": "Royal Heritage Room interior"
            }
          ],
          "amenities": [
            {
              "name": "Free Wi-Fi",
              "code": "FREE_WI_FI",
              "category": "Connectivity",
              "subCategory": "Free Wi-Fi"
            },
            {
              "name": "Air Conditioning",
              "code": "AIR_CONDITIONING",
              "category": "Property",
              "subCategory": "Air Conditioning"
            }
          ],
          "beds": [
            {
              "bedType": "King Bed",
              "bedCount": 1
            }
          ],
          "roomSize": "420 sq ft"
        }
      ],
      "description": "Pink City Boutique Stay is a 4-star property in Pink City, Jaipur, offering comfortable accommodation and modern facilities.",
      "checkIn": "14:00",
      "checkOut": "11:00",
      "contact": {
        "phone": "+91 99999 00000",
        "phoneNoExtension": "9999900000",
        "fax": "+91 99999 00001",
        "email": "reservations.htl-jai-3001@example.com"
      },
      "starRating": 4,
      "totalRooms": 180,
      "totalFloors": 13,
      "carParkingSlots": 60,
      "landmarks": [
        {
          "name": "Pink City Main Attraction",
          "distance": 0.8
        },
        {
          "name": "Jaipur City Centre",
          "distance": 2.5
        }
      ],
      "amenities": [
        {
          "name": "Rooftop",
          "code": "ROOFTOP",
          "category": "Recreation",
          "subCategory": "Rooftop"
        },
        {
          "name": "Breakfast",
          "code": "BREAKFAST",
          "category": "Food & Beverage",
          "subCategory": "Breakfast"
        },
        {
          "name": "Parking",
          "code": "PARKING",
          "category": "Transport",
          "subCategory": "Parking"
        },
        {
          "name": "Free Wi-Fi",
          "code": "FREE_WI_FI",
          "category": "Connectivity",
          "subCategory": "Free Wi-Fi"
        },
        {
          "name": "Air Conditioning",
          "code": "AIR_CONDITIONING",
          "category": "Property",
          "subCategory": "Air Conditioning"
        }
      ],
      "policies": [
        {
          "type": "CHECK_IN",
          "desc": "Check-in starts from 2:00 PM."
        },
        {
          "type": "CHECK_OUT",
          "desc": "Check-out must be completed by 11:00 AM."
        },
        {
          "type": "CHILD_POLICY",
          "desc": "Children are welcome. Extra bed charges may apply."
        },
        {
          "type": "PET_POLICY",
          "desc": "Pets are not allowed unless approved by the property."
        }
      ],
      "themes": [
        "City Stay",
        "Family",
        "Business"
      ],
      "rank": {
        "weekday": 8,
        "weekend": 7
      },
      "anyTimeCheckIn": false,
      "googleReviewInfo": {
        "placeId": "PLACE-HTL-JAI-3001",
        "noOfReviews": 1700,
        "averageRating": 4.3,
        "writeReviewURL": "https://example.com/review/htl-jai-3001",
        "reviewsPageURL": "https://example.com/reviews/htl-jai-3001",
        "review": [
          {
            "review": "Comfortable stay, clean rooms and helpful staff.",
            "name": "Aarav Mehta",
            "rating": 5,
            "timestamp": "2026-08-01T10:30:00Z"
          },
          {
            "review": "Good location and a smooth overall experience.",
            "name": "Sneha Kapoor",
            "rating": 4,
            "timestamp": "2026-07-20T08:15:00Z"
          }
        ]
      },
      "nCtgs": {
        "Restaurant": [
          {
            "R": "Pink City Boutique Stay Restaurant",
            "C": "Multi Cuisine",
            "T": "All Day Dining"
          }
        ],
        "Bar": [],
        "Important_Landmark": [
          {
            "D": "0.8 km",
            "L": "Pink City Main Attraction"
          }
        ],
        "Most_Popular_Landmark": [
          {
            "D": "2.5 km",
            "L": "Jaipur City Centre"
          }
        ]
      },
      "extraInfo": {
        "checkInInstruction": "Please carry valid government-issued photo identification and booking confirmation. Early check-in is subject to availability."
      }
    }
  }
];
