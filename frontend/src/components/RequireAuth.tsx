import { Navigate } from 'react-router-dom'
import { isLoggedIn } from '../auth'

type Props = {
  children: React.ReactElement
}

export default function RequireAuth({ children }: Props) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />
  }

  return children
}