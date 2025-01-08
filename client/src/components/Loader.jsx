import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Loading...</p>

      <style jsx>{`
        .loader {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: fixed; /* Ensure it stays in the center of the viewport */
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%); /* Centering */
          z-index: 1000; /* Ensure it appears above other elements */
          color: #1e40af;
        }

        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid #1e40af; /* Blue spinner color */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        p {
          margin-top: 10px;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default Loader;
