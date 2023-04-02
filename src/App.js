import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/login';
import Header from './Components/Header/header';

//JSX Format - JS and XML
function App() {
  const name = 'Priya!'
  const email = 'john@gmail.com';
  // -> We can send data from Parent to Child via Props(properties)
  return (
    <div className="App">
      <Header name={name} age={13} address={'Chennai'} />
      <h1> Welcome to our App!</h1>
      <Login />
    </div>
  );
}

export default App;
