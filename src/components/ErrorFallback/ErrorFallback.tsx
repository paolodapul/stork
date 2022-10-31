interface ErrorFallbackProps {
  error: {
    message: string;
  };
}

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      {error && <pre>{error.message}</pre>}
    </div>
  );
};

export { ErrorFallback };
