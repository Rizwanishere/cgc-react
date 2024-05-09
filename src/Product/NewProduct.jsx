import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function NewProduct() {
  const [product, setProduct] = useState({
    brand: "",
    model: "",
    price: "",
    discount: "",
    inStock: false,
  });
  const [hasError, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onInputChange = (evt) => {
    const newState = { ...product, [evt.target.name]: evt.target.value };
    setProduct(newState);
  };

  const navigate = useNavigate();

  const onSaveBtn = async () => {
    try {
      const url = "http://localhost:3000/products";
      await axios.post(url, product);
      setSuccess(true);
      setProduct({
        brand: "",
        model: "",
        price: "",
        discount: "",
        inStock: false,
      });
      //   navigate("/products"); // Redirects to products page
    } catch {
      setError(true);
    }
  };

  return (
    <div className="m-2 p-2">
      <ShouldRender when={success}>
        <div className="py-2 my-4 w-1/2 bg-green-500 text-white rounded text-center font-semibold">
          Successfully saved data
        </div>
      </ShouldRender>

      <ShouldRender when={hasError}>
        <Error />
      </ShouldRender>

      <h1 className="text-2xl font-bold">New Product</h1>
      <div className="mt-8 mb-7">
        <label className="block py-1">Brand</label>
        <select
          name="brand"
          value={product.brand}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
        >
          <option value="">brand</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Google">Google</option>
          <option value="Oneplus">Oneplus</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block py-1">Model</label>
        <input
          name="model"
          value={product.model}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
          placeholder="model"
          type="text"
        />
      </div>

      <div className="mb-8">
        <label className="block py-1">Price</label>
        <input
          name="price"
          value={product.price}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
          placeholder="price"
          type="text"
        />
      </div>

      <div className="mb-8">
        <label className="block py-1">Discount</label>
        <input
          name="discount"
          value={product.discount}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
          placeholder="discount"
          type="text"
        />
      </div>

      <div className="mb-8">
        <label className="block py-1">InStock</label>

        <input
          type="radio"
          name="inStock"
          value="true"
          onChange={onInputChange}
        />
        <label className="py-1 m-2">Yes</label>

        <input
          type="radio"
          name="inStock"
          value="false"
          onChange={onInputChange}
        />
        <label className="py-1 m-2">No</label>
      </div>

      <div className="mb-8">
        <button
          onClick={onSaveBtn}
          className="bg-orange-500 hover:bg-orange-600 rounded px-6 py-1 focus:ring-4 focus:ring-gray-400"
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default NewProduct;
