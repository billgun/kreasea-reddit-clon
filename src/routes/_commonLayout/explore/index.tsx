import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_commonLayout/explore/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_commonLayout/explore/"!</div>;
}
