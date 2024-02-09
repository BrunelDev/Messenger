"use client"
import React, {useState, useEffect, useRef} from "react";
import {ListMessage} from './components/tp/Message/listMessage/listMessage.jsx' 
import 'react-chat-elements/dist/main.css'
import {envoie} from './components/tp/Message/Envoie/envoie.jsx'
import { Input, Button} from 'react-chat-elements'


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
                <div>
            <ListMessage lastMessage = {lastMessage}/>
            <div className="container mt-60">  
            
                                    
            
                    <Input
                    referance={React.createRef()}
                    placeholder='Commencez un message...'
                    multiline={true}
                    onChange= {(e)=>setMessage(e.target.value)}
                    value={message}
                    rightButtons={<Button color='white' backgroundColor='black' text='Send' onClick = {HandleEnvoie}/>}
                    clear={clear => (inputClear = clear)} 
                    />
                </div>

        </div>
            </body>    
            )
}