// src/components/Chat.js
import React, { useState } from "react";
import axios from "axios";

const Mabot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input) return;
    const message = { input };
    setInput(""); // Clear input field after sending the message
    try {
      const response = await axios.post("http://127.0.0.1:8080/api", message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { input: input, output: response.data.output },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col h-screen bg-blue mt-4">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <div className="text-sm text-blue-700">{message.input}</div>
              <div className="bg-blue-200 text-sm text-gray-900 p-2 rounded-md">
                {message.output}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 flex">
          <input
            type="text"
            className="flex-1 bg-white border border-gray-300 p-2 rounded-md mr-2"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mabot;
