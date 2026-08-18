# Room Selection Implementation

## Flow
Hotel list -> Hotel details -> View Rooms -> `/hotels/:hotelId/rooms` -> Select a rate plan -> `/hotels/:hotelId/review`

Search parameters (city, check-in, check-out, rooms, adults, children) are preserved from the hotel list through hotel details into room selection.

## Data join
Room information comes from `hotelContentData.ts`.
Rate plans come from `roomSelection/data/hotelRatesData.ts`.

The room page joins them with:
`rate.roomTypeId === room.id`.

## Added files
- `src/features/roomSelection/api/roomSelectionApi.ts`
- `src/features/roomSelection/components/RoomOptionCard.tsx`
- `src/features/roomSelection/components/RoomRateCard.tsx`
- `src/features/roomSelection/components/RoomSelectionHeader.tsx`
- `src/features/roomSelection/data/hotelRatesData.ts`
- `src/features/roomSelection/pages/RoomSelectionPage.tsx`
- `src/features/roomSelection/pages/RoomReviewPlaceholderPage.tsx`
- `src/features/roomSelection/types/roomSelectionTypes.ts`
- `src/features/roomSelection/validation/roomSelectionValidation.ts`

## Modified files
- `src/features/hotelDetail/components/HotelBookingBar.tsx`
- `src/features/hotelList/components/HotelListCard.tsx`
- `src/app/router/AppRouter.tsx`
- `src/shared/layouts/AppLayout.tsx`
- `src/shared/api/queryKeys.ts`

## Theme
No changes were made to `index.css`. The new UI only uses existing theme tokens (`primary`, `secondary`, `card`, `border`, `muted`, etc.), so primary remains `#2ca9e1`.

## Review page note
The review route is intentionally a lightweight placeholder. It preserves `hotelId`, `roomTypeId`, and `ratePlanId` so the next Review API can be integrated without changing the room-selection flow.
