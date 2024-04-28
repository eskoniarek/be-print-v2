import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  OrderService,
  AbstractFileService,
} from "@medusajs/medusa"
import ProductMediaService from "../services/product-media"

export default async function handleOrderPlaced({ 
  data, eventName, container, pluginOptions, 
}: SubscriberArgs<Record<string, string>>) {
  const sendGridService = container.resolve("sendgridService")
  const orderService: OrderService = container.resolve(
    "orderService"
  )
  const fileService: AbstractFileService = container.resolve(
    "fileService"
  )
  const productMediaService: ProductMediaService = 
    container.resolve(
      "productMediaService"
    )

  const order = await orderService.retrieve(data.id, {
    relations: [
      "items", 
      "items.variant", 
    ],
  })

  // find product medias in the order
  const urls = []
  for (const item of order.items) {
    const productMedias = await productMediaService
      .retrieveMediasByVariant(item.variant)
    if (productMedias.length) {
      return
    }

    await Promise.all([
      productMedias.forEach(
        async (productMedia) => {
        // get the download URL from the file service
        const downloadUrl = await 
          fileService.getPresignedDownloadUrl({
            fileKey: productMedia.file_key,
            isPrivate: true,
          })
          console.log(`Presigned URL generated for product media ${productMedia.id}: ${downloadUrl}`)

        urls.push(downloadUrl)
      }),
    ])
  }
  
  if (urls.length) {
    return
  }

  console.log(`Sending email for order ${order.id} with download URLs:`)
  console.log(urls)

  sendGridService.sendEmail({
    templateId: "d-b8d571d61fb54edc8c61258efd2d4022",
    from: "hello@op-app.co",
    to: order.email,
    dynamic_template_data: {
      order_number: order.id,
      items: order.items,
      total: order.total,
      billing_address: order.billing_address,
      downloadUrl: urls,    
    },
  })
}

export const config: SubscriberConfig = {
  event: OrderService.Events.PLACED,
  context: {
    subscriberId: "order-placed-handler",
  },
}
