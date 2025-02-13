import { z } from "zod"

export const AVAILABLE_SIZES = ["S", "M", "L"] as const
export const AVAILABLE_COLORS = ["white", "blue", "beige", "green", "purple"] as const

// sort

export const AVAILABLE_SORT = ["none", "price-asc", "price-desc"] as const

export const productFilterValidator = z.object({
    size: z.array(z.enum(AVAILABLE_SIZES)),
    color: z.array(z.enum(AVAILABLE_COLORS)),
    sort: z.enum(AVAILABLE_SORT),
    price: z.tuple([z.number(), z.number()])
})

export type ProductState = Omit<z.infer<typeof productFilterValidator>, "price"> & {
    price:  {isCustom: boolean, range: [number, number]}
}