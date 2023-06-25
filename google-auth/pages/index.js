import { useSession } from 'next-auth/react';
import Login from './login'
import User from './user'

export default function Home() {
  const {data:session} = useSession()

  if(session){
    return <User />
  }else{
    return <Login />
  }
  
}
