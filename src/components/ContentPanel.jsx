function ContentPanel({ selectedSection }) {
  const content = {
    Library: "Browse books, journals and study materials.",
    Events: "View upcoming workshops and campus events.",
    Academics: "Check courses, timetables and academic resources.",
    Placements: "Explore internships and placement opportunities.",
    Cafeteria: "View today's menu and cafeteria timings.",
    "AI Assistant": "Ask questions about campus services.",
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
      <h2>{selectedSection}</h2>

      <p>{content[selectedSection]}</p>
    </div>
  );
}

export default ContentPanel;