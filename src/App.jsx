import { useState } from "react";
import Navbar from "./components/Navbar";
import FullScreenDisplay from "./components/FullScreenDisplay";
import bgImage from "./assets/1.jpg"; // Background image for the first FullScreen
import "./App.css"; // Ensure you have the correct path to your CSS file
import { useNavigate } from "react-router-dom";

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

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === "string" && !value.trim()) {
        newErrors[key] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
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
    navigate("/results", { state: formData });
    setFormData(initialFormData);
  };


  return (
    <div>
      <Navbar />
      
      {/* FullScreen for the introductory message */}
      <FullScreenDisplay backgroundImage={bgImage}>
        <div className="text-center text-white flex items-center justify-center h-full">
        <h1
  className="font-bold max-w-3xl mx-auto text-left header1"
  style={{ fontSize: "4rem", lineHeight: "1.2" }}
>
  Reliable <br />crop prediction <br />for African <br />crops
</h1>

        </div>
      </FullScreenDisplay>
      
      {/* FullScreen for the input form */}
<FullScreenDisplay backgroundColor="rgba(0, 0, 0, 0.7)">
  <div className="text-white p-8">
    <form className="form_container">
      <div className="each_field">
        <label htmlFor="name" className="w-1/3 text-white">Your Name:</label>
        <input type="text" id="name" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
      </div>
      <div className="each_field">
        <label htmlFor="organization" className="w-1/3 text-white">Organization:</label>
        <input type="text" id="organization" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
      </div>
      <div className="each_field">
        <label htmlFor="role" className="w-1/3 text-white">Role:</label>
        <input type="text" id="role" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
      </div>
      <div className="each_field">
        <label htmlFor="businessUnit" className="w-1/3 text-white">Business Unit:</label>
        <input type="text" id="businessUnit" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
      </div>
      <div className="each_field">
        <label htmlFor="country" className="w-1/3 text-white">Country:</label>
        <input type="text" id="country" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
      </div>
      <div className="each_field">
        <label htmlFor="cityState" className="w-1/3 text-white">City & State:</label>
        <input type="text" id="cityState" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
      </div>
    </form>
  </div>
</FullScreenDisplay>


            {/*3 ullScreen for the input form */}
<FullScreenDisplay backgroundColor="rgba(0, 0, 0, 0.7)">
  <div className="text-white p-8">
  <h2 className="text-2xl font-bold mb-4">Crop/Product Request Information: </h2>

  <form>
  <div className="each_field">
    <label htmlFor="name" className="w-1/3 text-white">Crop:</label>
    <input type="text" id="name" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
  </div>

  <div className="each_field">
    <label htmlFor="organization" className="w-1/3 text-white">Varietals</label>
    <input type="text" id="organization" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
  </div>

  <div className="each_field">
  <label htmlFor="quantity" className="w-1/3 text-white">Quantity of Crop:</label>
  <select
    id="quantity"
    className="w-2/3 p-3 bg-white text-black border border-solid border-gray-300 rounded-none appearance-none"
  >
    <option className="text-white bg-black">metric tons</option>
    <option className="text-white bg-black">kgs</option>
    <option className="text-white bg-black">lbs</option>
    <option className="text-white bg-black">40ft reefer</option>
  </select>
</div>

<div className="each_field">
  <label htmlFor="productType" className="w-1/3 text-white">Product Type</label>
  <select
    id="productType"
    className="w-2/3 p-3 bg-white text-black border border-solid border-gray-300 rounded-none appearance-none"
  >
    <option className="text-white bg-black">Fresh</option>
    <option className="text-white bg-black">Dried</option>
    <option className="text-white bg-black">Flour</option>
    <option className="text-white bg-black">Chips</option>
  </select>
</div>


  <div className="each_field">
    <label htmlFor="timeNeeded" className="w-1/3 text-white">Time Needed</label>
    <input type="text" id="timeNeeded" className="w-2/3 p-3 bg-white border border-solid border-gray-300 rounded-none" />
  </div>

    </form>
  </div>
</FullScreenDisplay>

<FullScreenDisplay backgroundColor="rgba(0, 0, 0, 0.7)">
  <div className="text-white p-8">
    <h2 className="text-2xl font-bold mb-4">I'm most interested in...</h2>
    <form>
      <div className="each_field">
        <label htmlFor="products" className="w-1/3 text-white">Products</label>  
        <input type="checkbox" id="products" className="styled-checkbox" />
      </div>
      <div className="each_field">
        <label htmlFor="prediction" className="w-1/3 text-white">Prediction Data</label>
        <input type="checkbox" id="prediction" className="styled-checkbox" />
      </div>
      <div className="each_field">
        <label htmlFor="traceability" className="w-1/3 text-white">Traceability Data</label>
        <input type="checkbox" id="traceability" className="styled-checkbox" />
      </div>
      <div className="each_field">
        <label htmlFor="impact" className="w-1/3 text-white">Farmer Impact</label>
        <input type="checkbox" id="impact" className="styled-checkbox" />
      </div>
      <button type="submit" className="finalbutton">Submit</button>
    </form>
  </div>
</FullScreenDisplay>

    </div>
  );
};

export default App;
