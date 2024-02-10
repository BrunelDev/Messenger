"use client"
import React, {useState, useEffect, useRef} from "react";
import {ListMessage} from './components/tp/Message/listMessage/listMessage.jsx' 
import 'react-chat-elements/dist/main.css'
import {envoie} from './components/tp/Message/Envoie/envoie.jsx'
import { Input, Button} from 'react-chat-elements'
import {NavBar} from './components/tp/Navbar/navbar.jsx'
import { SendHorizontal } from 'lucide-react'


export default function Home(){
       
    let [message, setMessage] = useState("")
    let[lastMessage, setLastMessage] = useState("")
    let inputClear = () => {}
    let HandleEnvoie = (e)=>{
        envoie(e, {message: message,setLastMessage: setLastMessage, clear: inputClear})
    }
    useEffect(()=>{
        setMessage(()=>'') }, [lastMessage])
        console.log(message)
    
                
    
        return (
            <body style={{backgroundColor: "#8eb9bd"}}>
                <NavBar />
                <div>
            <ListMessage lastMessage = {lastMessage}/>
            <div className="container mt-60 absolute inset-x-7 bottom-0">  
            
                                    
            
                    <Input
                    referance={React.createRef()}
                    placeholder='Commencez un message...'
                    multiline={false}
                    onChange= {(e)=>setMessage(e.target.value)}
                    value={message}
                    rightButtons={<Button color='white' backgroundColor='#a1d0e8' 
                    text='' onClick = {HandleEnvoie} 
                    icon = {{float :'left',
                    size:15,
                    component: <SendHorizontal size={44} color="white" strokeWidth={1.5} absoluteStrokeWidth />
                }
                  }      
                      />}
                    clear={clear => (inputClear = clear)} 
                    />
                </div>

        </div>
            </body>    
            )
}