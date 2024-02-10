import { ChevronLeft, Phone, Video, SlidersHorizontal } from "lucide-react"
import { Avatar } from "react-chat-elements";
export function NavBar(){
    return(
        <div style= {{backgroundColor: "black"}} className="flex">
            <span className="pr-6">
                <ChevronLeft size={48} color="#a1d0e8" strokeWidth={3} absoluteStrokeWidth />
            </span>
            <span className="py-1">
                <Avatar
                src="https://www.freeiconspng.com/uploads/account-profile-icon-2.png"
                alt="avatar"
                size="large"
                type="circle"/> 
            </span>
            
            <span className="flex absolute top-0 right-0 pt-1" >
                <span className="">
                    <Phone size={36} color="#a1d0e8" strokeWidth={2.25} absoluteStrokeWidth />
                </span>
                <span className="pl-6">
                    <Video size={36} color="#a1d0e8" strokeWidth={2.25} absoluteStrokeWidth />
                </span>
                <span className="pl-6 pr-4">
                    <SlidersHorizontal size={36} color="#a1d0e8" strokeWidth={2.25} absoluteStrokeWidth />
                </span>
                
                
            </span>
            
            
        </div>
    )
}