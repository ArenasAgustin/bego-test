import NavBar from "./components/navBar/NavBar";
import Statistic from "./components/statistics/Statistic";
import Tasks from "./components/tasks/Tasks";
import ValueCard from "./components/valueCard/ValueCard";

function App() {
  return (
    <div>
      <NavBar />

      <Tasks />

      <Statistic />

      <ValueCard />
    </div>
  );
}

export default App;
