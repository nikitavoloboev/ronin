import { link, model, string } from "ronin/schema"

export const UserModel = model({
  slug: "user",
  fields: {
    name: string(),
    email: string({ unique: true }),
  },
})

export const PostModel = model({
  slug: "post",
  fields: {
    title: string(),
    content: string(),
    createdBy: link({
      target: "user",
    }),
  },
})
