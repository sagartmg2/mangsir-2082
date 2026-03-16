import axios from "axios";
import { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    basePrice: "",
    discountedPrice: "",
    stock: "",
    category: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let token = localStorage.getItem("accessToken");

    //  to upload images we need to use from data

    axios.post("http://localhost:3000/api/products", form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Submitting...");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create Product</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="text-sm text-gray-600">Title</label>
          <input name="title" type="text" required value={form.title} onChange={handleChange} className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label className="text-sm text-gray-600">Category</label>
          <select name="category" onChange={handleChange} className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select</option>
            <option>Electronics</option>
            <option>Clothes</option>
            <option>Furniture</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm text-gray-600">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="3" className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        {/* Price + Stock */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Base Price</label>
            <input name="basePrice" type="number" step="0.01" value={form.basePrice} onChange={handleChange} className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="text-sm text-gray-600">DiscountedPrice</label>
            <input name="discountedPrice" type="number" step="0.01" value={form.discountedPrice} onChange={handleChange} className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Stock</label>
            <input name="stock" type="number" value={form.stock} onChange={handleChange} className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>

        {/* Images */}
        <div>
          <label className="text-sm text-gray-600">Product Images</label>
          <input type="file" multiple accept="image/*" onChange={handleImageChange} className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2" />
        </div>

        {/* Preview */}
        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {images.map((img, index) => (
              <img key={index} src={URL.createObjectURL(img)} alt="" className="h-24 w-full object-cover rounded-lg border border-gray-200" />
            ))}
          </div>
        )}

        {/* Button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
          Save Product
        </button>
      </form>
    </div>
  );
}
