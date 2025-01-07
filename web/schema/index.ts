import { link, model, string } from "ronin/schema"

export const User = model({
  slug: "user",
  fields: {
    name: string(),
    email: string({ unique: true }),
  },
})

export const Post = model({
  slug: "post",
  fields: {
    title: string(),
    content: string(),
    createdBy: link(User),
  },
})
