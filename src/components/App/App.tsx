import { ErrorFallback } from "@components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { ReactComponent as Icon } from "@assets/icon.svg";

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="text-2xl">
          <Icon className="w-[20px] h-[20px] inline mr-4" />
          React + Vite + TypeScript starter
        </div>
      </ErrorBoundary>
    </div>
  );
}

export { App };
