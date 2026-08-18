import { useNavigate } from "react-router-dom";
import { ErrorState } from "../../../shared/components/ErrorState";

export function RouteErrorPage() {
  const navigate = useNavigate();

  return (
    <ErrorState
      title="Page not found"
      description="The requested route is not available in this web view."
      actionLabel="Go home"
      onAction={() => navigate("/home", { replace: true })}
    />
  );
}
