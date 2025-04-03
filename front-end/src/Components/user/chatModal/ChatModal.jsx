import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { io } from 'socket.io-client'
import { useSelector } from "react-redux";

const socket = io("http://localhost:5000");

const ChatModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const user = useSelector((store) => store.user.user)
    

    // Toggle chat modal
    const toggleChat = () => setIsOpen(!isOpen);

    // Handle message send
    const sendMessage = () => {
        if (input.trim()) {
            const messageData = { text: input, sender: "user" };

            setMessages((prev) => [...prev, messageData]); // Update UI immediately
            console.log("prev msg ",messages)
            socket.emit("sendMessage", { userId:user._id , message: input , senderId:socket.id}); // Send to backend

            setInput(""); // Clear input after sending
        }
    };

    useEffect(() => {
        socket.on("receiveReply", ({ userId, message }) => {
            console.log("receiveReply")
            console.log(message, "inside receive user")
            const messageData = { text: message, sender: "admin" };
            console.log(messages)
            setMessages((prev) => [...prev, messageData]); // Update UI with new message
        });

        return () => {
            socket.off("receiveReply"); // Cleanup to avoid multiple event listeners
        };
    }, []);

    return (
        <div>
            {/* Message Icon Button */}
            <div
                className="chat-icon"
                onClick={toggleChat}
                style={{

                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    background: "#007bff",
                    color: "white",
                    width: "50px",
                    height: "50px",
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
                    <MessageCircle size={34} />
                </div>
            </div>

            {/* Chat Modal */}
            {isOpen && (
                <div
                    className="chat-modal"
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
                                className={`font-bold text-black ${msg.sender === 'user' ?"rounded-l-xl bg-gray-300 " : "rounded-r-xl bg-green-300"}`} 
                                
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
                            onClick={sendMessage}
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
