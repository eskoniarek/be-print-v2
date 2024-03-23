import { ProductVariant as MedusaProductVariant } from "@medusajs/medusa";
import { Column, Entity } from "typeorm";

@Entity()
export class ProductVariant extends MedusaProductVariant {
    @Column()
    name: string;

    @Column({ type: "varchar" })
  file_key: string

  @Column({ type: "varchar" })
  mime_type: string

}