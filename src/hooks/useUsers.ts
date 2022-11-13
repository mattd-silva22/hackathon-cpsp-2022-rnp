import { useContext } from 'react'
import { UserContext } from '../components/context/UserContext/index'



export function useUsers() {
  const value = useContext(UserContext)
  return value
}
