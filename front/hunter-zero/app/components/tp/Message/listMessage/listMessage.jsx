import { UserId } from "@/app/components/tp/Message/identification/identifier.jsx"
import React, { useState, useEffect, useRef } from 'react';
import { MessageList } from 'react-chat-elements'
let _messages = []
export function ListMessage({lastMessage}) {
    const [messages, setMessages] = useState([]);
    

    useEffect(() => {

        fetch("http://192.168.0.126:8000/")
            .then(response => response.json())
            .then(data => {
                setMessages(data.listMessage);
                _messages = data.listMessage.slice()
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error))
            .then(()=> a())
    }, [lastMessage])
    function a(){
        (UserId()).then((Id)=>{
            const id = Id.userId
          
        _messages.map((msg)=>{

        if(msg.userId ===id ){
            msg.position = "right"
        }
        else {
            msg.position = "left"
        }}
        )
        
        setMessages(_messages)
        
    }
    )
} 
let Ref = React.createRef();
    

    return (
        
        <>
            
            
           
            {messages === _messages && (
                <MessageList
                referance= {Ref}
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={messages} />
            )}

        </> 
    );
}



/*{messages.map((m, index) => (
                <MessageBox
                    key={index}
                    position={'left'}
                    type={'text'}
                    text={m.message}
                    data={{
                        uri: 'https://facebook.github.io/react/img/logo.svg',
                        status: {
                            click: false,
                            loading: 0,
                        },
                    }}
                />
            ))}*/