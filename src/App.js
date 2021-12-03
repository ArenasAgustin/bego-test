import NavBar from "./components/navBar/NavBar";
import Statistic from "./components/statistics/Statistic";
import Tasks from "./components/tasks/Tasks";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Tasks />

      <Statistic />
    </div>
  );
}

export default App;
