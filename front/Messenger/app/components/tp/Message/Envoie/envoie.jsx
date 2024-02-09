import { UserId } from "@/app/components/tp/Message/identification/identifier.jsx"
export async function envoie(event, {message, setLastMessage, clear}){
    event.preventDefault()
    clear()
   
    await fetch("http://192.168.0.126:8000/", {
        
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(
            {
                position: "right",
                type: 'text',
                text: message,
                date: new Date(),
                userId : (await UserId()).userId,
            }
            ),
    })
    setLastMessage(message)
    

}    