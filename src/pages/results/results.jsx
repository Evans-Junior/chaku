import { useLocation } from "react-router-dom";
import "./results.css"; // Create this file for results page styles

const Results = () => {
  const { state } = useLocation();
  
  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Thank You For Your Submission</h1>
        <p>We've received your information and will process your request shortly.</p>
      </div>
      
      <div className="results-content">
        <div className="results-summary">
          <h2>Submission Summary</h2>
          
          <div className="summary-grid">
            <div className="summary-section">
              <h3>Personal Information</h3>
              <p><strong>Name:</strong> {state.name}</p>
              <p><strong>Organization:</strong> {state.organization}</p>
              <p><strong>Role:</strong> {state.role}</p>
              <p><strong>Business Unit:</strong> {state.businessUnit}</p>
              <p><strong>Location:</strong> {state.cityState}, {state.country}</p>
            </div>
            
            <div className="summary-section">
              <h3>Crop Information</h3>
              <p><strong>Crop:</strong> {state.crop}</p>
              <p><strong>Varietals:</strong> {state.varietals}</p>
              <p><strong>Quantity:</strong> {state.quantity}</p>
              <p><strong>Product Type:</strong> {state.productType}</p>
              <p><strong>Time Needed:</strong> {state.timeNeeded}</p>
            </div>
            
            <div className="summary-section">
              <h3>Areas of Interest</h3>
              <ul className="interests-list">
                {state.interests.products && <li>Products</li>}
                {state.interests.prediction && <li>Prediction Data</li>}
                {state.interests.traceability && <li>Traceability Data</li>}
                {state.interests.impact && <li>Farmer Impact</li>}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="results-actions">
          <button className="print-button" onClick={() => window.print()}>
            Print This Page
          </button>
          <button className="new-request-button" onClick={() => window.location.href = "/"}>
            Submit Another Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;