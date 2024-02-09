"use server"
import { auth} from "@clerk/nextjs";
 
export async function UserId() {
  const { userId } = auth()
  return { userId }  
 


}