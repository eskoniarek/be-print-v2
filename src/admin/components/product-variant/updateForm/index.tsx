// import { useAdminUpdateVariant, useAdminUploadProtectedFile } from "medusa-react"
// import { useState } from "react"
// import {
//   Button,
//   Container,
//   Input,
//   Label,
// } from "@medusajs/ui"
// import { ProductVariant } from "@medusajs/medusa/dist/models/product-variant"

// type Props = {
//   productId: string
//   variantId: string
// }

// const ProductVariantUpdate = ({
//   productId,
//   variantId
// }: Props) => {
//   const updateVariant = useAdminUpdateVariant(productId)
//   const uploadFile = useAdminUploadProtectedFile()

//   const [name, setName] = useState("")
//   const [file, setFile] = useState<File>()

//   const handleUpdate = (title: string) => {
//     // upload file
//     uploadFile.mutate(file, {
//       onSuccess: ({ uploads }) => {
//         if (!("key" in uploads[0])) {
//           return
//         }
//         // update the product variant
//         updateVariant.mutate({
//           variant_id: variantId,
//           title,
//           name,
//           file_key: uploads[0].key as string,
//           mime_type: file.type,
//         }, {
//           onSuccess: ({ product }) => {
//             console.log(product.variants)
//           }
//         })
//       }
//     })
//   }

//   return (
//     <Container>
//       <Label>Name</Label>
//       <Input value={name} onChange={e => setName(e.target.value)} />
//       <Label>File</Label>
//       <Input type="file" onChange={e => setFile(e.target.files[0])} />
//       <Button onClick={() => handleUpdate(name)}>Update Product Variant</Button>
//     </Container>
//   )
// }

// export default ProductVariantUpdate
