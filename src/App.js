import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pomodoro from './components/Pomodoro';
import Loading from './components/loadingWithHook';

function App() {
  return (
    <div className="App container">
      <header className="App-header d-flex justify-content-between">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="fw-bold my-auto">React app</p>
      </header>
      <div className="">
        <Loading />
      </div>
      <div className="">
        <Pomodoro workTime={25} restTime={5} />
        <Pomodoro workTime={30} restTime={10} />
      </div>
    </div>
  );
}

export default App;
