const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem", margin: "10% 0 0 0" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
