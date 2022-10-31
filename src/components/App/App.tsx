import { ErrorFallback } from "@components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="text-2xl">React + Vite + TypeScript starter</div>
      </ErrorBoundary>
    </div>
  );
}

export { App };
