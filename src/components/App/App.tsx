import { ErrorFallback } from "@components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div>React + Vite starter</div>
      </ErrorBoundary>
    </div>
  );
}

export { App };
