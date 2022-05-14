import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:4200")

const SocketChat = () => {
    const [message, setMessage] = useState('') 
    const [messageReceived, setMessageReceived] = useState('') 
    const sendMessage = () => {
        socket.emit('send_message', { message })
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageReceived(data.message)
        })
    }, [])
    return (
        <div>
            <ul id="messages"></ul>
            <form id="form" action="">
                <input 
                    id="input" 
                    autoComplete="off" 
                    onChange={ (e) => { 
                        e.preventDefault() 
                        setMessage(e.target.value)
                        } 
                    }
                />
                <button onClick={sendMessage}> Send </button>
                <h2>Message:</h2>
                <p>{messageReceived}</p>
            </form>
        </div>
    )
}

export default SocketChat