import logo from './logo.svg';
import './App.css';
import { Counter, UserProfile } from './components/lession3';
import { Timer } from './components/lession3';
import { TraditionalGreeting, Greet, UserProfile2, Card, Counter2, TodoList } from './components/lession4';

// import { BonsaiTreeImage } from './pictures';

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
      <div className='userProfile'>
        <Card>
          <h4>Assignment 1.3, lession 4</h4>
          <h2>A Bonsai Tree</h2>
          <p>lorem ipsum Bonsai Tree 78 years old, </p>
          {/* <img
            src={BonsaiTreeImage}
            alt='tree'
          ></img> */}
        </Card>
      </div>
      <div className='userProfile'>
        <h4>Assignment 1.4 & 1.5, lession 4</h4>
        <Counter2 />
      </div>
      <div className='userProfile'>
        <h4>Assignment 1.6, lession 4</h4>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
