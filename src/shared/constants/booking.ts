/**
 * A single booking can hold guest details for at most this many rooms.
 * Enforced in two places that must agree:
 *  - the room stepper on the home search (features/home/hooks/useSearchForm.ts)
 *  - the guest details form (features/guestDetails)
 */
export const MAX_ROOMS_PER_BOOKING = 4;