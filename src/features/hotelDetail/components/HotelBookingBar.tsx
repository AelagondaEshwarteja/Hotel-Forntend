import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatCurrency } from "../../../shared/utils/formatters";

type Props = { price?: number };
export function HotelBookingBar({ price }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { hotelId } = useParams();

  return <div className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-[430px] border-t border-border bg-card/95 px-4 pb-[calc(0.85rem+env(safe-area-inset-bottom))] pt-3 shadow-xl backdrop-blur">
    <div className="flex items-center gap-4"><div className="min-w-0 flex-1"><p className="text-xs text-muted-foreground">From</p><div className="flex items-baseline gap-1"><span className="text-xl font-bold text-foreground">{price ? formatCurrency(price) : "Price on request"}</span>{price ? <span className="text-xs text-muted-foreground">/ night</span> : null}</div></div><button type="button" onClick={() => navigate(`/hotels/${hotelId}/rooms${location.search}`)} className="h-12 min-w-36 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm transition active:scale-[0.98]">View Rooms</button></div>
  </div>;
}
