import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: "bot", text: "Hi there! How can I assist you today?" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            const newMessage = { id: Date.now(), sender: "user", text: input };
            setMessages([...messages, newMessage]);
            setInput("");

            // Simulate bot response after 1 second
            setTimeout(() => {
                botResponse();
            }, 1000);
        }
    };

    const botResponse = () => {
        const botMessage = {
            id: Date.now(),
            sender: "bot",
            text: "Thank you for your message! I'll get back to you shortly."
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-50 to-orange-200">
            <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-brightColor2 to-orange-300 p-4">
                    <h1 className="text-xl text-white font-semibold text-center">Doctor Chatbot</h1>
                </div>

                {/* Chat Messages */}
                <div className="p-4 h-96 overflow-y-auto">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
                        >
                            <div
                                className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                                    message.sender === "user"
                                        ? "bg-white text-lightText"
                                        : " bg-brightColor2 text-white"
                                }`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input and Send Button */}
                <div className="p-4 bg-gray-100 border-t border-gray-200 flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-backgroundColor2"
                    />
                    <button
                        onClick={sendMessage}
                        className="ml-2 px-4 py-2 bg-backgroundColor2 text-white rounded-lg hover:bg-rose-700 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
