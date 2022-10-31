import { ErrorFallback } from "@components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { Layout } from "@components/Layout";
import { QueryProvider } from "@contexts/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Layout>
          <Outlet />
        </Layout>
      </ErrorBoundary>
    </QueryProvider>
  );
}

export { App };
