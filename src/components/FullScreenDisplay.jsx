// src/components/FullScreenDisplay.jsx

const FullScreenDisplay = ({ backgroundImage, backgroundColor, children }) => {
    return (
      <div
        className="fullscreen-overlay"
        style={{
          position: "relative",  // To position the overlay
          overflow: "hidden",    // Ensures the overlay stays within the container
        }}
      >
        {/* Background Image with Darkened Overlay */}
        <div
          className="image-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover", // Ensures image covers the whole container
            backgroundPosition: "center",
            filter: "brightness(50%)", // Darkens the image (adjust as needed)
            zIndex: -1, // Ensures the overlay doesn't interfere with the content
          }}
        ></div>
  
        {/* Content */}
        <div className="content" style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </div>
    );
  };
  
  export default FullScreenDisplay;
  