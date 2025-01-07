import type { Model } from "@ronin/compiler"
import { link, model, string } from "@ronin/schema"

const User = model({
  slug: "user",
  fields: {
    name: string(),
    email: string({ unique: true }),
  },
}) as unknown as Model

const Post = model({
  slug: "post",
  fields: {
    title: string(),
    content: string(),
    createdBy: link(User),
  },
}) as unknown as Model
