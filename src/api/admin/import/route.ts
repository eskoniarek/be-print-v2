import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import { ChatCompletionTool } from "openai/resources";
import OpenAiService from "../../../services/open-ai";

import { productTools } from "../../../util/gpt-functions/productTools";

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const openAiService = req.scope.resolve<OpenAiService>("openAiService");

  const { messages, type } = req.body;

  // We're only supporting product import for now
  const tools = (
    type === "product" ? productTools : []
  ) as ChatCompletionTool[];

  try {
    const systemPrompt = [
      {
        role: "system",
        content:
          "You are an AI product import assistant. " +
          "The user will send you a list of products or a single product. " +
          "The input data can be in various forms: JSON, XML, raw text, TSV, CSV, etc. Do your best to interpret and structure incoming data. " +
          "You'll map the product information to the correct fields and propose a list of products to the user using the 'propose_products' function.",
      },
    ];

    messages.unshift(...systemPrompt);

    // Ask OpenAI for a chat completion given the prompt
    const completion = await openAiService.create({ messages, tools });

    // return the completion
    res.status(200).send(completion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
