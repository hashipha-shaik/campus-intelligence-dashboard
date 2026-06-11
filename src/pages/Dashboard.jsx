import { useState } from "react";
import Card from "../components/Card";
import sections from "../data/sections";
import Sidebar from "../components/Sidebar";
import AIAssistant from "../components/AIAssistant";
import ContentPanel from "../components/ContentPanel";
function Dashboard() {
  const [selectedSection, setSelectedSection] =
  useState("Library");
  console.log("Selected Section:", selectedSection);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSections = sections.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);
     return (

  <div style={{ display: "flex" }}>
    <Sidebar />

    <div style={{ flex: 1, padding: "20px" }}>
    
<h2>Campus Services</h2>
<input
  type="text"
  placeholder="Search campus services..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    padding: "10px",
    width: "300px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  }}
/>

      <div className="grid">
        {filteredSections.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            onCardClick={setSelectedSection}
          />
        ))}
      </div>
      <ContentPanel selectedSection={selectedSection} />
      <AIAssistant />
    </div>
  </div>
);
   
}

export default Dashboard;