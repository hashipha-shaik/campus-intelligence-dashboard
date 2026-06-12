import { useState } from "react";
function AIAssistant() {
  const [messages, setMessages] = useState([
  {
    role: "assistant",
    text: "Hello! Ask me anything about campus services."
  }
]);

 const [input, setInput] = useState("");
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
        onClick={() => {
          if (!input.trim()) return;

          setMessages([
            ...messages,
            { role: "user", text: input },
            {
              role: "assistant",
              text: "This response will come from Gemini later.",
            },
          ]);

          setInput("");
        }}
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