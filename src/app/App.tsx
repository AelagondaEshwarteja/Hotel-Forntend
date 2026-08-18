import { ErrorBoundary } from "../shared/components/ErrorBoundary";
import { AppProviders } from "./providers/AppProviders";
import { AppRouter } from "./router/AppRouter";

export function App() {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </ErrorBoundary>
  );
}
