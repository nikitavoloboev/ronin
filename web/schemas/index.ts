import { link, model, string } from "ronin/schema"

const User = model({
  slug: "user",
  fields: {
    name: string(),
    email: string({ unique: true }),
  },
})

const Post = model({
  slug: "post",
  fields: {
    title: string(),
    content: string(),
    createdBy: link(User),
  },
})
