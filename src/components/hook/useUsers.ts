import { useContext } from 'react'
import { UserContext } from '../context/UserContext/index'



export function useUsers() {
  const value = useContext(UserContext)
  return value
}
