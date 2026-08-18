import type { HotelRatesApiResponse } from "../types/roomSelectionTypes";

export const HOTEL_RATES_DATA: Record<string, HotelRatesApiResponse> = {
  "HTL-MUM-1001": {
    "meta": {
      "status": "SUCCESS",
      "uid": "rates-htl-mum-1001-20260910",
      "createdAt": "2026-08-14T06:05:00.000Z",
      "timeTaken": 162,
      "count": 4
    },
    "data": {
      "rates": [
        {
          "roomTypeId": "HTL-MUM-1001-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1001-ROOM-1-FLEX",
          "ratePlanName": "Deluxe King Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 22400.0,
              "price": 23699.2,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2472.96
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 618.24
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1792.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1895.94,
                  "netAmount": 1554.67,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 341.27
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 11200.0,
              "price": 11849.6,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1236.48
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 309.12
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 896.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 947.97,
                  "netAmount": 777.34,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 170.63
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Deluxe King Room",
          "roomsLeft": 5,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 11849.60"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1001-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1001-ROOM-1-NRF",
          "ratePlanName": "Deluxe King Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 21952.0,
              "price": 21710.53,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2265.45
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 566.36
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 3073.28,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1736.84,
                  "netAmount": 1424.21,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 312.63
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 10976.0,
              "price": 10855.26,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1132.72
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 283.18
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1536.64,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 868.42,
                  "netAmount": 712.1,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 156.32
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Deluxe King Room",
          "roomsLeft": 4,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 21710.53)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1001-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1001-ROOM-2-FLEX",
          "ratePlanName": "Luxury Sea View Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 27328.0,
              "price": 28913.02,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 3017.01
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 754.25
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 2186.24,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 2313.04,
                  "netAmount": 1896.69,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 416.35
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 13664.0,
              "price": 14456.52,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1508.51
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 377.13
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1093.12,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1156.52,
                  "netAmount": 948.35,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 208.17
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Luxury Sea View Room",
          "roomsLeft": 5,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 14456.52"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        },
        {
          "roomTypeId": "HTL-MUM-1001-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1001-ROOM-2-NRF",
          "ratePlanName": "Luxury Sea View Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 26781.44,
              "price": 26486.84,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2763.84
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 690.96
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 3749.4,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 2118.95,
                  "netAmount": 1737.54,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 381.41
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 13390.72,
              "price": 13243.42,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1381.92
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 345.48
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1874.7,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1059.47,
                  "netAmount": 868.77,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 190.7
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Luxury Sea View Room",
          "roomsLeft": 4,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 26486.84)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        }
      ],
      "propertyType": "HOTEL"
    }
  },
  "HTL-MUM-1002": {
    "meta": {
      "status": "SUCCESS",
      "uid": "rates-htl-mum-1002-20260910",
      "createdAt": "2026-08-14T06:05:00.000Z",
      "timeTaken": 179,
      "count": 4
    },
    "data": {
      "rates": [
        {
          "roomTypeId": "HTL-MUM-1002-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1002-ROOM-1-FLEX",
          "ratePlanName": "Premier Sea View Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 43000.0,
              "price": 45494.0,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 4747.2
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 1186.8
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 3440.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 3639.52,
                  "netAmount": 2984.41,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 655.11
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 21500.0,
              "price": 22747.0,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2373.6
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 593.4
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1720.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1819.76,
                  "netAmount": 1492.2,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 327.56
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Premier Sea View Room",
          "roomsLeft": 4,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 22747.00"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1002-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1002-ROOM-1-NRF",
          "ratePlanName": "Premier Sea View Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 42140.0,
              "price": 41676.46,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 4348.85
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 1087.21
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 5899.6,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 3334.12,
                  "netAmount": 2733.98,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 600.14
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 21070.0,
              "price": 20838.23,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2174.42
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 543.61
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 2949.8,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1667.06,
                  "netAmount": 1366.99,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 300.07
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Premier Sea View Room",
          "roomsLeft": 3,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 41676.46)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1002-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1002-ROOM-2-FLEX",
          "ratePlanName": "Luxury Suite - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 52460.0,
              "price": 55502.68,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 5791.58
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 1447.9
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 4196.8,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 4440.21,
                  "netAmount": 3640.97,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 799.24
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 26230.0,
              "price": 27751.34,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2895.79
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 723.95
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 2098.4,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 2220.11,
                  "netAmount": 1820.49,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 399.62
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Luxury Suite",
          "roomsLeft": 4,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 27751.34"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        },
        {
          "roomTypeId": "HTL-MUM-1002-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1002-ROOM-2-NRF",
          "ratePlanName": "Luxury Suite - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 51410.8,
              "price": 50845.28,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 5305.59
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 1326.4
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 7197.51,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 4067.62,
                  "netAmount": 3335.45,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 732.17
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 25705.4,
              "price": 25422.64,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2652.8
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 663.2
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 3598.76,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 2033.81,
                  "netAmount": 1667.72,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 366.09
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Luxury Suite",
          "roomsLeft": 3,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 50845.28)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        }
      ],
      "propertyType": "HOTEL"
    }
  },
  "HTL-MUM-1003": {
    "meta": {
      "status": "SUCCESS",
      "uid": "rates-htl-mum-1003-20260910",
      "createdAt": "2026-08-14T06:05:00.000Z",
      "timeTaken": 196,
      "count": 4
    },
    "data": {
      "rates": [
        {
          "roomTypeId": "HTL-MUM-1003-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1003-ROOM-1-FLEX",
          "ratePlanName": "Fairmont King Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 19600.0,
              "price": 20736.8,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2163.84
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 540.96
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1568.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1658.94,
                  "netAmount": 1360.33,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 298.61
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 9800.0,
              "price": 10368.4,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1081.92
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 270.48
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 784.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 829.47,
                  "netAmount": 680.17,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 149.3
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Fairmont King Room",
          "roomsLeft": 3,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 10368.40"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1003-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1003-ROOM-1-NRF",
          "ratePlanName": "Fairmont King Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 19208.0,
              "price": 18996.72,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1982.27
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 495.57
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 2689.12,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1519.74,
                  "netAmount": 1246.19,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 273.55
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 9604.0,
              "price": 9498.35,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 991.13
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 247.78
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1344.56,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 759.87,
                  "netAmount": 623.09,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 136.78
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Fairmont King Room",
          "roomsLeft": 2,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 18996.72)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1003-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1003-ROOM-2-FLEX",
          "ratePlanName": "Fairmont Twin Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 23912.0,
              "price": 25298.89,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2639.88
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 659.97
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1912.96,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 2023.91,
                  "netAmount": 1659.61,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 364.3
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 11956.0,
              "price": 12649.45,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1319.94
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 329.99
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 956.48,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1011.96,
                  "netAmount": 829.81,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 182.15
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Fairmont Twin Room",
          "roomsLeft": 3,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 12649.45"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        },
        {
          "roomTypeId": "HTL-MUM-1003-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1003-ROOM-2-NRF",
          "ratePlanName": "Fairmont Twin Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 23433.76,
              "price": 23175.98,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2418.36
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 604.59
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 3280.73,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1854.08,
                  "netAmount": 1520.35,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 333.73
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 11716.88,
              "price": 11588.0,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1209.18
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 302.3
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1640.36,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 927.04,
                  "netAmount": 760.17,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 166.87
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Fairmont Twin Room",
          "roomsLeft": 2,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 23175.98)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        }
      ],
      "propertyType": "HOTEL"
    }
  },
  "HTL-MUM-1004": {
    "meta": {
      "status": "SUCCESS",
      "uid": "rates-htl-mum-1004-20260910",
      "createdAt": "2026-08-14T06:05:00.000Z",
      "timeTaken": 213,
      "count": 4
    },
    "data": {
      "rates": [
        {
          "roomTypeId": "HTL-MUM-1004-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1004-ROOM-1-FLEX",
          "ratePlanName": "Standard Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 6400.0,
              "price": 6771.2,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 706.56
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 176.64
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 512.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 541.7,
                  "netAmount": 444.19,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 97.51
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 3200.0,
              "price": 3385.6,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 353.28
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 88.32
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 256.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 270.85,
                  "netAmount": 222.1,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 48.75
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Standard Room",
          "roomsLeft": 2,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 3385.60"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1004-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1004-ROOM-1-NRF",
          "ratePlanName": "Standard Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 6272.0,
              "price": 6203.01,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 647.27
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 161.82
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 878.08,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 496.24,
                  "netAmount": 406.92,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 89.32
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 3136.0,
              "price": 3101.51,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 323.64
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 80.91
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 439.04,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 248.12,
                  "netAmount": 203.46,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 44.66
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Standard Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 6203.01)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1004-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1004-ROOM-2-FLEX",
          "ratePlanName": "Deluxe Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 7808.0,
              "price": 8260.86,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 862.0
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 215.5
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 624.64,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 660.87,
                  "netAmount": 541.91,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 118.96
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 3904.0,
              "price": 4130.43,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 431.0
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 107.75
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 312.32,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 330.43,
                  "netAmount": 270.95,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 59.48
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Deluxe Room",
          "roomsLeft": 2,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 4130.43"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        },
        {
          "roomTypeId": "HTL-MUM-1004-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1004-ROOM-2-NRF",
          "ratePlanName": "Deluxe Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 7651.84,
              "price": 7567.67,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 789.67
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 197.42
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1071.26,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 605.41,
                  "netAmount": 496.44,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 108.97
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 3825.92,
              "price": 3783.83,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 394.83
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 98.71
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 535.63,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 302.71,
                  "netAmount": 248.22,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 54.49
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Deluxe Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 7567.67)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        }
      ],
      "propertyType": "HOTEL"
    }
  },
  "HTL-MUM-1005": {
    "meta": {
      "status": "SUCCESS",
      "uid": "rates-htl-mum-1005-20260910",
      "createdAt": "2026-08-14T06:05:00.000Z",
      "timeTaken": 230,
      "count": 4
    },
    "data": {
      "rates": [
        {
          "roomTypeId": "HTL-MUM-1005-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1005-ROOM-1-FLEX",
          "ratePlanName": "City View Suite - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 13600.0,
              "price": 14388.8,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1501.44
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 375.36
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1088.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1151.1,
                  "netAmount": 943.9,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 207.2
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 6800.0,
              "price": 7194.4,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 750.72
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 187.68
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 544.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 575.55,
                  "netAmount": 471.95,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 103.6
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "City View Suite",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 7194.40"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1005-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1005-ROOM-1-NRF",
          "ratePlanName": "City View Suite - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 13328.0,
              "price": 13181.39,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1375.45
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 343.86
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1865.92,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1054.51,
                  "netAmount": 864.7,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 189.81
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 6664.0,
              "price": 6590.69,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 687.72
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 171.93
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 932.96,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 527.26,
                  "netAmount": 432.35,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 94.91
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "City View Suite",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 13181.39)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1005-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1005-ROOM-2-FLEX",
          "ratePlanName": "Family Suite - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 16592.0,
              "price": 17554.34,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1831.76
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 457.94
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1327.36,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1404.35,
                  "netAmount": 1151.57,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 252.78
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 8296.0,
              "price": 8777.17,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 915.88
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 228.97
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 663.68,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 702.17,
                  "netAmount": 575.78,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 126.39
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Family Suite",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 8777.17"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        },
        {
          "roomTypeId": "HTL-MUM-1005-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1005-ROOM-2-NRF",
          "ratePlanName": "Family Suite - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 16260.16,
              "price": 16081.3,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1678.05
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 419.51
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 2276.42,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1286.5,
                  "netAmount": 1054.93,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 231.57
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 8130.08,
              "price": 8040.65,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 839.02
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 209.76
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1138.21,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 643.25,
                  "netAmount": 527.47,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 115.78
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Family Suite",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 16081.30)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        }
      ],
      "propertyType": "APARTMENT"
    }
  },
  "HTL-MUM-1006": {
    "meta": {
      "status": "SUCCESS",
      "uid": "rates-htl-mum-1006-20260910",
      "createdAt": "2026-08-14T06:05:00.000Z",
      "timeTaken": 247,
      "count": 4
    },
    "data": {
      "rates": [
        {
          "roomTypeId": "HTL-MUM-1006-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1006-ROOM-1-FLEX",
          "ratePlanName": "Deluxe Twin Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 8200.0,
              "price": 8675.6,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 905.28
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 226.32
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 656.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 694.05,
                  "netAmount": 569.12,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 124.93
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 4100.0,
              "price": 4337.8,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 452.64
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 113.16
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 328.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 347.02,
                  "netAmount": 284.56,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 62.46
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Deluxe Twin Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 4337.80"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1006-ROOM-1",
          "ratePlanId": "RP-HTL-MUM-1006-ROOM-1-NRF",
          "ratePlanName": "Deluxe Twin Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 8036.0,
              "price": 7947.61,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 829.32
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 207.33
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1125.04,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 635.81,
                  "netAmount": 521.36,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 114.45
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 4018.0,
              "price": 3973.8,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 414.66
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 103.66
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 562.52,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 317.9,
                  "netAmount": 260.68,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 57.22
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Deluxe Twin Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 7947.61)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-MUM-1006-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1006-ROOM-2-FLEX",
          "ratePlanName": "Deluxe Double Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 10004.0,
              "price": 10584.23,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1104.44
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 276.11
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 800.32,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 846.74,
                  "netAmount": 694.33,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 152.41
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 5002.0,
              "price": 5292.12,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 552.22
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 138.06
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 400.16,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 423.37,
                  "netAmount": 347.16,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 76.21
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Deluxe Double Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 5292.12"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        },
        {
          "roomTypeId": "HTL-MUM-1006-ROOM-2",
          "ratePlanId": "RP-HTL-MUM-1006-ROOM-2-NRF",
          "ratePlanName": "Deluxe Double Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 9803.92,
              "price": 9696.07,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1011.76
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 252.94
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1372.55,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 775.69,
                  "netAmount": 636.07,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 139.62
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 4901.96,
              "price": 4848.04,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 505.88
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 126.47
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 686.27,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 387.84,
                  "netAmount": 318.03,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 69.81
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Deluxe Double Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 9696.07)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        }
      ],
      "propertyType": "HOTEL"
    }
  },
  "HTL-GOA-2001": {
    "meta": {
      "status": "SUCCESS",
      "uid": "rates-htl-goa-2001-20260910",
      "createdAt": "2026-08-14T06:05:00.000Z",
      "timeTaken": 264,
      "count": 4
    },
    "data": {
      "rates": [
        {
          "roomTypeId": "HTL-GOA-2001-ROOM-1",
          "ratePlanId": "RP-HTL-GOA-2001-ROOM-1-FLEX",
          "ratePlanName": "Beachfront Villa - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 31200.0,
              "price": 33009.6,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 3444.48
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 861.12
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 2496.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 2640.77,
                  "netAmount": 2165.43,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 475.34
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 15600.0,
              "price": 16504.8,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1722.24
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 430.56
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1248.0,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1320.38,
                  "netAmount": 1082.71,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 237.67
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Beachfront Villa",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 16504.80"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-GOA-2001-ROOM-1",
          "ratePlanId": "RP-HTL-GOA-2001-ROOM-1-NRF",
          "ratePlanName": "Beachfront Villa - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 30576.0,
              "price": 30239.66,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 3155.44
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 788.86
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 4280.64,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 2419.17,
                  "netAmount": 1983.72,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 435.45
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 15288.0,
              "price": 15119.83,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1577.72
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 394.43
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 2140.32,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1209.59,
                  "netAmount": 991.86,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 217.73
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Beachfront Villa",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 30239.66)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-GOA-2001-ROOM-2",
          "ratePlanId": "RP-HTL-GOA-2001-ROOM-2-FLEX",
          "ratePlanName": "Pool View Villa - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 38064.0,
              "price": 40271.72,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 4202.27
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 1050.57
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 3045.12,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 3221.74,
                  "netAmount": 2641.83,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 579.91
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 19032.0,
              "price": 20135.85,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 2101.13
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 525.28
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1522.56,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1610.87,
                  "netAmount": 1320.91,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 289.96
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Pool View Villa",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 20135.85"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        },
        {
          "roomTypeId": "HTL-GOA-2001-ROOM-2",
          "ratePlanId": "RP-HTL-GOA-2001-ROOM-2-NRF",
          "ratePlanName": "Pool View Villa - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 37302.72,
              "price": 36892.39,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 3849.64
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 962.41
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 5222.38,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 2951.39,
                  "netAmount": 2420.14,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 531.25
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 18651.36,
              "price": 18446.2,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 1924.82
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 481.21
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 2611.19,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 1475.7,
                  "netAmount": 1210.07,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 265.63
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Pool View Villa",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 36892.39)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        }
      ],
      "propertyType": "RESORT"
    }
  },
  "HTL-JAI-3001": {
    "meta": {
      "status": "SUCCESS",
      "uid": "rates-htl-jai-3001-20260910",
      "createdAt": "2026-08-14T06:05:00.000Z",
      "timeTaken": 281,
      "count": 4
    },
    "data": {
      "rates": [
        {
          "roomTypeId": "HTL-JAI-3001-ROOM-1",
          "ratePlanId": "RP-HTL-JAI-3001-ROOM-1-FLEX",
          "ratePlanName": "Heritage Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 6598.0,
              "price": 6980.68,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 728.42
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 182.1
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 527.84,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 558.45,
                  "netAmount": 457.93,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 100.52
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 3299.0,
              "price": 3490.34,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 364.21
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 91.05
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 263.92,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 279.23,
                  "netAmount": 228.97,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 50.26
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Heritage Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 3490.34"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-JAI-3001-ROOM-1",
          "ratePlanId": "RP-HTL-JAI-3001-ROOM-1-NRF",
          "ratePlanName": "Heritage Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 6466.04,
              "price": 6394.9,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 667.29
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 166.82
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 905.25,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 511.59,
                  "netAmount": 419.5,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 92.09
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 3233.02,
              "price": 3197.46,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 333.65
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 83.41
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 452.62,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 255.8,
                  "netAmount": 209.76,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 46.04
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Heritage Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 6394.90)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 2,
          "maxGuestOccupancy": 3
        },
        {
          "roomTypeId": "HTL-JAI-3001-ROOM-2",
          "ratePlanId": "RP-HTL-JAI-3001-ROOM-2-FLEX",
          "ratePlanName": "Royal Heritage Room - Flexible Breakfast Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 8049.56,
              "price": 8516.44,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 888.67
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 222.17
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 643.96,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 681.32,
                  "netAmount": 558.68,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 122.64
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 4024.78,
              "price": 4258.22,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 444.34
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 111.08
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 321.98,
                  "desc": "8% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 340.66,
                  "netAmount": 279.34,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 61.32
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Royal Heritage Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "FREE_CANCELLATION",
            "freeCancellation": true,
            "freeCancelDeadLine": "2026-09-08T18:30:00.000Z",
            "cancellationPolicies": [
              "Free cancellation until 08 September 2026, 11:59 PM local hotel time.",
              "Cancellation after the free-cancellation deadline will incur a one-night room charge."
            ],
            "cancellationPenalty": [
              {
                "date": "2026-09-09",
                "fee": "INR 4258.22"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi",
            "Breakfast for registered guests"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        },
        {
          "roomTypeId": "HTL-JAI-3001-ROOM-2",
          "ratePlanId": "RP-HTL-JAI-3001-ROOM-2-NRF",
          "ratePlanName": "Royal Heritage Room - Saver Non-Refundable Rate",
          "rateProvider": "TGU",
          "pricing": {
            "total": {
              "base": 7888.56,
              "price": 7801.78,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 814.1
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 203.52
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 1104.4,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 624.14,
                  "netAmount": 511.79,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 112.35
                    }
                  ]
                }
              ]
            },
            "perNight": {
              "base": 3944.28,
              "price": 3900.89,
              "taxes": [
                {
                  "type": "GST",
                  "amount": 407.05
                }
              ],
              "charges": [
                {
                  "type": "SERVICE_CHARGE",
                  "amount": 101.76
                }
              ],
              "discounts": [
                {
                  "type": "RATE_RULE",
                  "amount": 552.2,
                  "desc": "14% promotional discount"
                }
              ],
              "commissions": [
                {
                  "type": "AFFILIATE_COMMISSION",
                  "percentage": 8,
                  "grossAmount": 312.07,
                  "netAmount": 255.9,
                  "taxes": [
                    {
                      "type": "GST",
                      "amount": 56.17
                    }
                  ]
                }
              ]
            }
          },
          "currency": "INR",
          "guaranteeType": "PREPAY",
          "roomName": "Royal Heritage Room",
          "roomsLeft": 1,
          "taxPercentage": 12,
          "cancellation": {
            "cancellationTypeId": "NON_REFUNDABLE",
            "freeCancellation": false,
            "freeCancelDeadLine": "2026-08-14T04:26:27.535Z",
            "cancellationPolicies": [
              "This rate is non-refundable.",
              "No refund will be provided for cancellation, no-show or early departure."
            ],
            "cancellationPenalty": [
              {
                "date": "From booking date",
                "fee": "100% of booking value (INR 7801.78)"
              }
            ]
          },
          "checkInRestricted": false,
          "checkOutRestricted": false,
          "restrictedMsg": "",
          "inclusions": [
            "Free Wi-Fi"
          ],
          "maxAdultOccupancy": 3,
          "maxChildOccupancy": 3,
          "maxGuestOccupancy": 4
        }
      ],
      "propertyType": "HOTEL"
    }
  }
};
