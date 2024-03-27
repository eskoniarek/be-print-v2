import React, { useState } from 'react';
import type { WidgetConfig } from "@medusajs/admin"

const ProductWidget = () => {
  const [digitalProduct, setDigitalProduct] = useState({});

  const handleChange = (e) => {
    setDigitalProduct({
      ...digitalProduct,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a request to the appropriate API endpoint to create the digital product
  }

  return (
    <div>
      <h1>Create Digital Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for the digital product details */}
        <input type="text" name="name" onChange={handleChange} />
        {/* Add more fields as necessary */}
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "product.details.after",
}

export default ProductWidget
