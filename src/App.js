import logo from './logo.svg';
import './App.css';
import { Counter, UserProfile } from './components/lession3';
import { Timer } from './components/lession3';
import { TraditionalGreeting, Greet, UserProfile2 } from './components/lession4';

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
        <Counter title='Counter' />
        <Timer />
        <UserProfile
          name='Jonas'
          email='Jonas.Collsten@gmail.com'
          bio='Im Jonas, 28 years old from Sweden. Currently studying React-Development at Företagsuniverstitetet'
          title='About me'
        />
      </div>
      <div className='userProfile'>
        <h4>Assignment 1.1, lession 4</h4>
        <TraditionalGreeting name='Jonas' />
        <Greet name='(Your name)' />
      </div>
      <div className='userProfile'>
        <h4>Assignment 1.2, lession 4</h4>
        <UserProfile2
          name='Jonas'
          age={28}
          location='Stockholm, Sweden'
        />
      </div>
    </div>
  );
}

export default App;
