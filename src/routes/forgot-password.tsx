import { createFileRoute } from '@tanstack/react-router'
import { Login } from '../components/Login'

export const Route = createFileRoute('/forgot-password')({
  component: LoginComp,
})

function LoginComp() {
  return <Login />
}
