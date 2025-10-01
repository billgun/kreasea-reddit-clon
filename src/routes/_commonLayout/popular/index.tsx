import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_commonLayout/popular/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_commonLayout/popular/"!</div>
}
