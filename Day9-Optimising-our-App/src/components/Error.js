import "./error.css"; 
import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className="error-page">
      <div className="error-card">
        <h1 className="error-code">{err.status}</h1>
        <h2 className="error-title">{err.data}</h2>
        <p className="error-text">
          The page you are looking for doesn’t exist or an unexpected error
          occurred.
        </p>

        <div className="error-actions">
          <button className="error-btn primary" onClick={() => window.location.reload()}>
            Retry
          </button>
          <button
            className="error-btn secondary"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
