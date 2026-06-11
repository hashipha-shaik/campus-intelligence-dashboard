function AIAssistant() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2> AI Assistant</h2>

      <input
        type="text"
        placeholder="Ask a campus question..."
        style={{
          width: "80%",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button
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
  );
}

export default AIAssistant;