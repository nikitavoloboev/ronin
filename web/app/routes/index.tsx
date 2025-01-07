import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { $createUser, $tryRonin } from "../actions/actions"

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ["/"],
    queryFn: () => $tryRonin({ data: {} }),
  })
  console.log(data, "data")
  return (
    <>
      <button
        onClick={async () => {
          await $createUser({
            data: {
              name: "nikita",
            },
          })
        }}
      >
        Add User
      </button>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
