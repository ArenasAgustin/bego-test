import NavBar from "./components/navBar/NavBar";
import Statistic from "./components/statistics/Statistic";
import Tasks from "./components/tasks/Tasks";
import ValueCard from "./components/valueCard/ValueCard";
import './_app.scss';

function App() {
  return (
    <div className='app'>
      <NavBar />

      <Tasks />

      <Statistic />

      <ValueCard />
    </div>
  );
}

export default App;
