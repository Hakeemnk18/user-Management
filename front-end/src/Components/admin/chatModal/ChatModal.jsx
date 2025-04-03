import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { io } from 'socket.io-client'

const socket = io("http://localhost:5000");

const ChatModal = ({currentUserId}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [reply, setReply] = useState("");
    const [activeUser, setActiveUser] = useState(null);

    // Receive messages from users
    useEffect(() => {
        
        socket.on("receiveMessage", ({ userId, message, senderId}) => {
            console.log("inside receive message admin")
            console.log(userId)
            console.log(currentUserId)
            if(currentUserId === userId){
                const messageData = { text: message, sender: "user" ,userId};
                console.log(messages)
                setMessages((prev) => [...prev,messageData]);
                setActiveUser(userId);
            }
             // Set the active user
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, []);

    // Toggle chat modal
    const toggleChat = () => setIsOpen(!isOpen);

    // Handle message send
    const sendReply = () => {
        console.log("inside replay")
        if (input.trim() && activeUser) {
            console.log("inside replay ")
            const replyData = { userId: activeUser, message: input };
            const messageData = { text: input, sender: "admin" ,userId: activeUser};

            socket.emit("sendReply", replyData); // Send reply to server
            setMessages((prev) => [...prev, messageData]);

            setReply(""); // Clear input
        }
    };


    

    

    return (
        <div>
            {/* Message Icon Button */}
            <div
                className={`chat-icon  ${activeUser === currentUserId ? "text-green-500"  : "text-blue-500"}`}
                onClick={toggleChat}
                style={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div className="chat-icon" onClick={toggleChat}>
                    <MessageCircle size={20}/>
                </div>
            </div>

            {/* Chat Modal */}
            {isOpen && (
                <div
                    className="chat-modal "
                    style={{
                        position: "fixed",
                        bottom: "80px",
                        right: "20px",
                        width: "300px",
                        background: "white",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                        padding: "10px",
                    }}
                >
                    {/* Chat Header */}
                    <div
                        className="chat-header"
                        style={{
                            background: "#007bff",
                            color: "white",
                            padding: "10px",
                            borderRadius: "10px 10px 0 0",
                            textAlign: "left",
                        }}
                    >
                        Chat
                        <span
                            style={{ float: "right", cursor: "pointer" }}
                            onClick={toggleChat}
                        >
                            ✖
                        </span>
                    </div>

                    {/* Chat Messages */}
                    <div
                        className="chat-messages"
                        style={{
                            height: "200px",
                            overflowY: "auto",
                            padding: "10px",
                            borderBottom: "1px solid #ccc",
                        }}
                    >
                        {messages.map((msg, index) => (
                            <p
                                key={index}
                                className={`font-bold text-black ${msg.sender === 'admin' ?"rounded-l-xl bg-gray-300 " : "rounded-r-xl bg-green-300"}`} 
                                
                                style={{
                                    
                                    padding: "5px 10px",
                                    margin: "5px 0",
                                    textAlign: "left",
                                }}
                            >
                                 {typeof msg === "string" ? msg : msg.text}
                            </p>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="chat-footer" style={{ display: "flex", padding: "10px" }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="text-black"
                            style={{
                                flex: 1,
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />
                        <button
                            onClick={sendReply}
                            style={{
                                background: "#007bff",
                                color: "white",
                                border: "none",
                                padding: "8px",
                                marginLeft: "5px",
                                cursor: "pointer",
                                borderRadius: "5px",
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatModal;
