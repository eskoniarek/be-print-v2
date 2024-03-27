import { ProductVariant as MedusaProductVariant } from '@medusajs/medusa';

export interface ExtendedProductVariant extends MedusaProductVariant {
  name: string;
  file_key: string;
  mime_type: string;
}
export interface UpdateProductVariantInput {
        name?: string;
        file_key?: string;
        mime_type?: string;
      
    }
export interface ProductVariant {
        name?: string;
        file_key?: string;
        mime_type?: string;
      
    }
export type FormImage = {
        variant_id: string
        name: string
        file_key: string
        mime_type: string
      }
