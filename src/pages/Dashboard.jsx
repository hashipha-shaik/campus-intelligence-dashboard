import Card from "../components/Card";
import sections from "../data/sections";

function Dashboard() {
  return (
    <div>
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
  );
}

export default Dashboard;