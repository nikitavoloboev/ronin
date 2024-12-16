import { createServerFn } from "@tanstack/start"
import { get } from "ronin"

export const $simpleGetOfRoninData = createServerFn({
  method: "GET",
}).handler(async () => {
  try {
    const posts = await get.posts()
    return {
      posts,
    }
  } catch (error) {
    throw new Error("Failed to get data")
  }
})
