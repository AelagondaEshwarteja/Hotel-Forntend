import { useQuery } from "@tanstack/react-query";
// import { RefreshCcw } from "lucide-react";
import { queryKeys } from "../../../shared/api/queryKeys";
// import { AppHeader } from "../../../shared/components/AppHeader";
import { ErrorState } from "../../../shared/components/ErrorState";
import { GlobalLoader } from "../../../shared/components/GlobalLoader";
import { PageTransition } from "../../../shared/components/PageTransition";
import { formatCurrency } from "../../../shared/utils/formatters";
import { fetchExampleItems } from "../api/exampleApi";

export default function ExamplePage() {
  const exampleQuery = useQuery({
    queryKey: queryKeys.exampleItems,
    queryFn: fetchExampleItems,
  });

  if (exampleQuery.isLoading) {
    return <GlobalLoader label="Loading example data" />;
  }

  if (exampleQuery.isError) {
    return (
      <ErrorState
        title="Unable to load example"
        description="This shows the standard error state used by feature pages."
        actionLabel="Retry"
        onAction={() => void exampleQuery.refetch()}
      />
    );
  }

  return (
    <PageTransition>
      <section className="min-h-dvh bg-muted">
        {/* <AppHeader
          title="Example API"
          subtitle="React Query + Zod + typed feature API"
          rightContent={
            <button
              type="button"
              aria-label="Refresh example"
              onClick={() => void exampleQuery.refetch()}
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition active:scale-95"
            >
              <RefreshCcw aria-hidden="true" className="size-5" />
            </button>
          }
        /> */}

        <div className="relative z-10 space-y-3 px-5 pb-8 pt-6">
          {exampleQuery.data?.map((item) => (
            <article key={item.id} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="truncate text-base font-bold">{item.title}</h2>
                  <p className="mt-1 text-xs font-semibold uppercase text-muted-foreground">{item.status}</p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                  {formatCurrency(item.amount)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
