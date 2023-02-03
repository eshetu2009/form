
import './App.css';
import './style.css';
import LoginForm from './Components/LoginForm';
import RegistorForm from './Components/RegistorForm';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Airbnb</h1>
      <LoginForm />
      <RegistorForm />
    </div>
  );
}

export default App;
