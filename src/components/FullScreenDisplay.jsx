// src/components/FullScreenDisplay.jsx

const FullScreenDisplay = ({ backgroundImage, backgroundColor, children }) => {
    return (
      <div
        className="fullscreen-overlay"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: backgroundColor || "transparent",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default FullScreenDisplay;
  