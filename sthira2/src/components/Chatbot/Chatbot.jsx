import React, { useState } from "react";

const Chatbot = () => {
  const [input, setInput] = useState(""); // Store user input
  const [messages, setMessages] = useState([]); // Store all messages
  const [chats, setChats] = useState([]); // Store all chat sessions
  const [currentChatIndex, setCurrentChatIndex] = useState(null); // Track selected chat

  const handleSend = () => {
    if (input.trim() === "") return; // Prevent sending empty messages

    const userMessage = { user: "User", text: input }; // User message
    const botReply = { user: "Bot", text: "Hello! How can I assist you?" }; // Bot's default reply

    // Create a new chat if there's no active one
    if (currentChatIndex === null) {
      setChats([...chats, [{ user: "User", text: input }, { user: "Bot", text: botReply.text }]]);
      setCurrentChatIndex(chats.length);
    } else {
      const updatedChat = [...chats];
      updatedChat[currentChatIndex].push(userMessage, botReply);
      setChats(updatedChat);
    }

    setMessages([...messages, userMessage, botReply]);
    setInput(""); // Clear input after sending the message
  };

  const handleSelectChat = (index) => {
    setCurrentChatIndex(index); // Set selected chat
    setMessages(chats[index]); // Load the selected chat into the messages area
  };

  return (
    <div className="flex h-screen pt-16">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Previous Chats</h2>
        <ul>
          {chats.map((_, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-600 p-2 mb-2 rounded"
              onClick={() => handleSelectChat(index)}
            >
              Chat {index + 1}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setCurrentChatIndex(null);
            setMessages([]);
          }}
          className="w-full mt-4 p-2 bg-green-500 hover:bg-green-700 text-white rounded-lg"
        >
          Start New Chat
        </button>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-backgroundColor flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.length === 0 ? (
              <p className="text-center text-gray-500">No Prevoius Messages</p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${
                    msg.user === "User"
                      ? "text-right bg-brightColor text-white"
                      : "text-left bg-white text-black"
                  } p-3 rounded-lg max-w-xs ml-auto mr-auto`}
                >
                  <strong>{msg.user}: </strong> {msg.text}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Input Box */}
        <div className="flex p-4 bg-white border-t border-gray-300">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg outline-none"
          />
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 bg-green-500 hover:bg-green-800 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
