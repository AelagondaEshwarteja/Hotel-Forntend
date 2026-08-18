import type { HotelContentRoom } from "../../hotelDetail/types/hotelDetailTypes";

export type RoomRateMoneyItem = { type: string; amount: number };
export type RoomRateDiscount = RoomRateMoneyItem & { desc: string };
export type RoomRateCommission = {
  type: string;
  percentage: number;
  grossAmount: number;
  netAmount: number;
  taxes: RoomRateMoneyItem[];
};

export type RoomRatePriceBlock = {
  base: number;
  price: number;
  taxes: RoomRateMoneyItem[];
  charges: RoomRateMoneyItem[];
  discounts: RoomRateDiscount[];
  commissions: RoomRateCommission[];
};

export type RoomRatePlan = {
  roomTypeId: string;
  ratePlanId: string;
  ratePlanName: string;
  rateProvider: string;
  pricing: { total: RoomRatePriceBlock; perNight: RoomRatePriceBlock };
  currency: string;
  guaranteeType: string;
  roomName: string;
  roomsLeft: number;
  taxPercentage: number;
  cancellation: {
    cancellationTypeId: string;
    freeCancellation: boolean;
    freeCancelDeadLine: string;
    cancellationPolicies: string[];
    cancellationPenalty: { date: string; fee: string }[];
  };
  checkInRestricted: boolean;
  checkOutRestricted: boolean;
  restrictedMsg: string;
  inclusions: string[];
  maxAdultOccupancy: number;
  maxChildOccupancy: number;
  maxGuestOccupancy: number;
};

export type HotelRatesApiResponse = {
  meta: { status: string; uid: string; createdAt: string; timeTaken: number; count: number };
  data: { rates: RoomRatePlan[]; propertyType: string };
};

export type RoomWithRates = { room: HotelContentRoom; rates: RoomRatePlan[] };
