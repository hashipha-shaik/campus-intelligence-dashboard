import Card from "../components/Card";
import sections from "../data/sections";
import Sidebar from "../components/Sidebar";
function Dashboard() {
  
     return (
  <div style={{ display: "flex" }}>
    <Sidebar />

    <div style={{ flex: 1, padding: "20px" }}>
      <h2>Campus Services</h2>

      <div className="grid">
        {sections.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </div>
);
   
}

export default Dashboard;