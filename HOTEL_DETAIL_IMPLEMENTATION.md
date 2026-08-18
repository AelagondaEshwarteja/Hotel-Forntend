# Hotel Detail / Review UI Implementation

## New route
- `/hotels/:hotelId`
- Example: `/hotels/HTL-MUM-1001`

## New feature module
Place the full `hotelDetail` folder at:
`src/features/hotelDetail/`

Files:
- `api/hotelDetailApi.ts` — mock Content API fetch by hotelId
- `data/hotelContentData.ts` — supplied Content API JSON converted to typed TS fixture
- `types/hotelDetailTypes.ts` — complete Content API types
- `validation/hotelDetailValidation.ts` — Zod validation matching supplied schema
- `pages/HotelDetailPage.tsx` — route-level page
- `components/HotelImageGallery.tsx` — single large swipeable gallery
- `components/HotelDetailHeader.tsx` — name, location, rating summary
- `components/HotelDetailTabs.tsx` — About / Amenities / Policies tabs
- `components/AboutSection.tsx` — description, timings, landmarks, overview, contact
- `components/AmenitiesSection.tsx` — all hotel amenities, dining, nearby attractions
- `components/PoliciesSection.tsx` — all policies + check-in instructions
- `components/HotelBookingBar.tsx` — sticky price + View Rooms CTA

## Existing files updated
- `src/app/router/AppRouter.tsx`
  - lazy-loads HotelDetailPage
  - adds `hotels/:hotelId`
- `src/features/hotelList/components/HotelListCard.tsx`
  - clicking a hotel card navigates to `/hotels/${hotel.id}`
  - wishlist click stops propagation
- `src/features/hotelList/api/hotelListApi.ts`
  - adds `getHotelListItemById()` so starting price remains available even on direct detail URL load
- `src/shared/api/queryKeys.ts`
  - adds `hotelDetail(hotelId)` query key
- `src/shared/layouts/AppLayout.tsx`
  - keeps existing global navigation unchanged on existing pages
  - hides it only on the full-screen Hotel Detail route so the detail page can use its own sticky View Rooms bar

## Theme / responsiveness
- No new hard-coded UI colors were added in the hotelDetail feature.
- Uses existing Tailwind theme tokens sourced from `index.css`: primary, secondary, muted, card, foreground, border, etc.
- Primary remains `--primary: #2ca9e1`.
- Existing `max-w-[430px]` mobile-first app shell is retained.
- Existing Framer Motion approach is retained for page/tab transitions.

## Run locally
```bash
npm install
npm run dev
```

## Verification
TypeScript project check passed with the project's TypeScript compiler.
