import { useState } from "react";
import Navbar from "../../components/Navbar";
import FullScreenDisplay from "../../components/FullScreenDisplay";
import bgImage from "../../assets/1.jpg"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import "./home.css"; // Create this file for loading animation styles

const initialFormData = {
  name: "",
  organization: "",
  role: "",
  businessUnit: "",
  country: "",
  cityState: "",
  crop: "",
  varietals: "",
  quantity: "",
  productType: "",
  timeNeeded: "",
  interests: {
    products: false,
    prediction: false,
    traceability: false,
    impact: false,
  },
};

const Home = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    const requiredFields = [
      'name', 'organization', 'role', 'businessUnit', 
      'country', 'cityState', 'crop', 'varietals', 
      'quantity', 'productType', 'timeNeeded'
    ];

    // Validate required text fields
    requiredFields.forEach(field => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "This field is required";
      }
    });

    // Validate at least one interest is selected
    const interestsSelected = Object.values(formData.interests).some(Boolean);
    if (!interestsSelected) {
      newErrors.interests = "Please select at least one interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }

    if (type === "checkbox") {
      setFormData({
        ...formData,
        interests: { ...formData.interests, [id]: checked },
      });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);

    setTimeout(() => {
      navigate("/results", { state: formData });
      setIsLoading(false);
    }, 2000);
    setFormData(initialFormData);
  };

  return (
    <div>
      <Navbar />
      
      {/* FullScreen for the introductory message */}
      <FullScreenDisplay backgroundImage={bgImage}>
        <div className="text-center text-white flex items-center justify-center h-full">
          <h1 className="font-bold max-w-3xl mx-auto text-left header1" style={{ fontSize: "4rem", lineHeight: "1.2" }}>
            Reliable <br />crop prediction <br />for African <br />crops
          </h1>
        </div>
      </FullScreenDisplay>
      
      {/* FullScreen for the input form */}
      <FullScreenDisplay backgroundColor="rgba(0, 0, 0, 0.7)">
        <div className="text-white p-8">
          <form className="form_container" onSubmit={handleSubmit}>
            <div className="each_field">
              <label htmlFor="name" className="w-1/3 text-white">Your Name:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            </div>
            
            <div className="each_field">
              <label htmlFor="organization" className="w-1/3 text-white">Organization:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="organization" 
                  value={formData.organization}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.organization ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
              </div>
            </div>
            
            <div className="each_field">
              <label htmlFor="role" className="w-1/3 text-white">Role:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="role" 
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.role ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
              </div>
            </div>
            
            <div className="each_field">
              <label htmlFor="businessUnit" className="w-1/3 text-white">Business Unit:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="businessUnit" 
                  value={formData.businessUnit}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.businessUnit ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.businessUnit && <p className="text-red-500 text-sm mt-1">{errors.businessUnit}</p>}
              </div>
            </div>
            
            <div className="each_field">
              <label htmlFor="country" className="w-1/3 text-white">Country:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="country" 
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>
            
            <div className="each_field">
              <label htmlFor="cityState" className="w-1/3 text-white">City & State:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="cityState" 
                  value={formData.cityState}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.cityState ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.cityState && <p className="text-red-500 text-sm mt-1">{errors.cityState}</p>}
              </div>
            </div>
          </form>
        </div>
      </FullScreenDisplay>

      {/* Crop/Product Request Information */}
      <FullScreenDisplay backgroundColor="rgba(0, 0, 0, 0.7)">
        <div className="text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Crop/Product Request Information: </h2>
          <form onSubmit={handleSubmit}>
            <div className="each_field">
              <label htmlFor="crop" className="w-1/3 text-white">Crop:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="crop" 
                  value={formData.crop}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.crop ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.crop && <p className="text-red-500 text-sm mt-1">{errors.crop}</p>}
              </div>
            </div>

            <div className="each_field">
              <label htmlFor="varietals" className="w-1/3 text-white">Varietals:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="varietals" 
                  value={formData.varietals}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.varietals ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.varietals && <p className="text-red-500 text-sm mt-1">{errors.varietals}</p>}
              </div>
            </div>

            <div className="each_field">
              <label htmlFor="quantity" className="w-1/3 text-white">Quantity of Crop:</label>
              <div className="w-2/3">
                <select
                  id="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white text-black border border-solid ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-none appearance-none`}
                >
                  <option value="">Select quantity</option>
                  <option value="metric tons">metric tons</option>
                  <option value="kgs">kgs</option>
                  <option value="lbs">lbs</option>
                  <option value="40ft reefer">40ft reefer</option>
                </select>
                {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
              </div>
            </div>

            <div className="each_field">
              <label htmlFor="productType" className="w-1/3 text-white">Product Type:</label>
              <div className="w-2/3">
                <select
                  id="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white text-black border border-solid ${errors.productType ? 'border-red-500' : 'border-gray-300'} rounded-none appearance-none`}
                >
                  <option value="">Select product type</option>
                  <option value="Fresh">Fresh</option>
                  <option value="Dried">Dried</option>
                  <option value="Flour">Flour</option>
                  <option value="Chips">Chips</option>
                </select>
                {errors.productType && <p className="text-red-500 text-sm mt-1">{errors.productType}</p>}
              </div>
            </div>

            <div className="each_field">
              <label htmlFor="timeNeeded" className="w-1/3 text-white">Time Needed:</label>
              <div className="w-2/3">
                <input 
                  type="text" 
                  id="timeNeeded" 
                  value={formData.timeNeeded}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white border border-solid ${errors.timeNeeded ? 'border-red-500' : 'border-gray-300'} rounded-none`} 
                />
                {errors.timeNeeded && <p className="text-red-500 text-sm mt-1">{errors.timeNeeded}</p>}
              </div>
            </div>
          </form>
        </div>
      </FullScreenDisplay>

      {/* Interests Section */}
      <FullScreenDisplay backgroundColor="rgba(0, 0, 0, 0.7)">
        <div className="text-white p-8">
          <h2 className="text-2xl font-bold mb-4">I'm most interested in...</h2>
          <form onSubmit={handleSubmit}>
            <div className="each_field">
              <label htmlFor="products" className="w-1/3 text-white">Products</label>  
              <input 
                type="checkbox" 
                id="products" 
                checked={formData.interests.products}
                onChange={handleChange}
                className="styled-checkbox" 
              />
            </div>
            <div className="each_field">
              <label htmlFor="prediction" className="w-1/3 text-white">Prediction Data</label>
              <input 
                type="checkbox" 
                id="prediction" 
                checked={formData.interests.prediction}
                onChange={handleChange}
                className="styled-checkbox" 
              />
            </div>
            <div className="each_field">
              <label htmlFor="traceability" className="w-1/3 text-white">Traceability Data</label>
              <input 
                type="checkbox" 
                id="traceability" 
                checked={formData.interests.traceability}
                onChange={handleChange}
                className="styled-checkbox" 
              />
            </div>
            <div className="each_field">
              <label htmlFor="impact" className="w-1/3 text-white">Farmer Impact</label>
              <input 
                type="checkbox" 
                id="impact" 
                checked={formData.interests.impact}
                onChange={handleChange}
                className="styled-checkbox" 
              />
            </div>
            {errors.interests && <p className="text-red-500 text-sm mt-2">{errors.interests}</p>}
            <button type="submit" className="finalbutton mt-4">Submit</button>
          </form>
        </div>
      </FullScreenDisplay>
    </div>
  );
};

export default Home;