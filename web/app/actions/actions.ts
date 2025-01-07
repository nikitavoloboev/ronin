import { createServerFn } from "@tanstack/start"
import * as models from "../../schema/index"
import ronin from "ronin"

export const $tryRonin = createServerFn({
  method: "POST",
})
  .validator((data: {}) => {
    return data
  })
  .handler(async () => {
    try {
      const { get } = ronin({ models })
      const user = await get.users()
      console.log({ user })
    } catch (error) {
      throw new Error("Failed")
    }
  })

export const $createUser = createServerFn({
  method: "POST",
})
  .validator((data: { name: string }) => {
    return data
  })
  .handler(async () => {
    try {
      const { create } = ronin({ models })
      const user = await create.user.with({
        name: "nikita",
      })
      console.log({ user })
    } catch (error) {
      throw new Error("Failed")
    }
  })
