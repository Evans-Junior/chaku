import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();  // To access the state passed from navigate
  const formData = location.state || {};  // Use the state if available, otherwise an empty object

  return (
    <div className="results-page p-8">
      <h2 className="text-2xl font-bold mb-4">Submitted Data:</h2>
      <div className="data-display">
        <p><strong>Your Name:</strong> {formData.name}</p>
        <p><strong>Organization:</strong> {formData.organization}</p>
        <p><strong>Role:</strong> {formData.role}</p>
        <p><strong>Business Unit:</strong> {formData.businessUnit}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>City & State:</strong> {formData.cityState}</p>

        {/* Display Crop Information */}
        <h3 className="mt-4 font-semibold">Crop/Product Information:</h3>
        <p><strong>Crop:</strong> {formData.crop}</p>
        <p><strong>Varietals:</strong> {formData.varietals}</p>
        <p><strong>Quantity:</strong> {formData.quantity}</p>
        <p><strong>Product Type:</strong> {formData.productType}</p>
        <p><strong>Time Needed:</strong> {formData.timeNeeded}</p>

        {/* Display Interests */}
        <h3 className="mt-4 font-semibold">Your Interests:</h3>
        <ul>
          {formData.interests.products && <li>Products</li>}
          {formData.interests.prediction && <li>Prediction Data</li>}
          {formData.interests.traceability && <li>Traceability Data</li>}
          {formData.interests.impact && <li>Farmer Impact</li>}
        </ul>
      </div>
    </div>
  );
};

export default Results;
