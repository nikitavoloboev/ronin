import { createFileRoute } from "@tanstack/react-router"
import { $simpleGetOfRoninData } from "../actions/actions"
import { useSuspenseQuery } from "@tanstack/react-query"

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ["/"],
    queryFn: () => $simpleGetOfRoninData(),
  })
  console.log(data, "data")
  return <></>
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
