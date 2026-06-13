import { useState } from "react";
function AIAssistant() {
  const [messages, setMessages] = useState([
  {
    role: "assistant",
    text: "Hello! Ask me anything about campus services."
  }
]);

 const [input, setInput] = useState("");
 const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    { role: "user", text: userMessage },
  ]);

  setInput("");

  try {
    const response = await fetch(
      "http://localhost:5000/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      }
    );

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: data.answer,
      },
    ]);
  } catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: "Error connecting to server.",
      },
    ]);
  }
};
   return (
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      marginTop: "20px",
    }}
  >
    <h2>AI Assistant</h2>

    {/* Chat Messages */}
    <div
      style={{
        height: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        overflowY: "auto",
        marginBottom: "15px",
      }}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            background:
              msg.role === "user" ? "#dbeafe" : "#f3f4f6",
            padding: "10px",
            borderRadius: "8px",
            margin: "8px 0",
            textAlign:
              msg.role === "user" ? "right" : "left",
          }}
        >
          {msg.text}
        </div>
      ))}
    </div>

    {/* Input Area */}
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Ask a campus question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
        }}
      />

      <button
       onClick={sendMessage}
        style={{
          padding: "7px 11px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#1e293b",
          color: "white",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        ➤
      </button>
    </div>
  </div>
);
}

export default AIAssistant;