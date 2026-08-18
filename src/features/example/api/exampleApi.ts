import { z } from "zod";
import { delayedResponse } from "../../../shared/api/delay";
import type { ExampleItem } from "../types/exampleTypes";

const ExampleItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.enum(["active", "pending", "complete"]),
  amount: z.number(),
});

const ExampleItemsSchema = z.array(ExampleItemSchema);

const exampleItems: ExampleItem[] = [
  {
    id: "example-1",
    title: "Example API item",
    status: "active",
    amount: 1200,
  },
  {
    id: "example-2",
    title: "Mapped response item",
    status: "pending",
    amount: 2400,
  },
];

export async function fetchExampleItems() {
  return delayedResponse(ExampleItemsSchema.parse(exampleItems));
}
