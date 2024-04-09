import logo from './logo.svg';
import './App.css';
import { Counter } from './components/lession1';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p className='header-p'>This will be the app where i recreate the assignments from the React Course</p>
      </header>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
