import type { WidgetConfig } from "@medusajs/admin"

const ProductVariantWidget = () => {
  return (
    <div>
      <h1>Product Variant Widget</h1>
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "product.details.after",
}

export default ProductVariantWidget
