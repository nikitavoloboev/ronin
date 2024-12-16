import { get, create } from "ronin"

async function main() {
  const user = await get.user({
    with: {
      name: "Nikita",
    },
  })
  if (!user) throw new Error("Failed to get user")
  const newPost = await create.post.with({
    content: "This is a test post",
    createdBy: user.id,
  })
  if (!newPost) throw new Error("Failed to create post")
  console.log(newPost)
}

main()
