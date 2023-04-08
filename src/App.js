import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/login';
import Header from './Components/Header/header';
import Layout from './Components/Layout/layout';
import ComponentA from './Components/ComponentA/componentA';

//JSX Format - JS and XML
function App() {
  const name = 'Priya!'
  const age = 17;
  const voterId = null;
  const email = 'john@gmail.com';
  const isAuthenticated = false;
  const products = [
    {
      id: 1, 
      productName: 'Adidas',
      size: 7,
      price: 2000
    },
    {
      id: 2, 
      productName: 'Nike',
      size: 10,
      price: 4000
    },
    {
      id: 3, 
      productName: 'Puma',
      size: 8,
      price: 2400
    },
    {
      id: 4, 
      productName: 'Under Armour',
      size: 9,
      price: 4000
    },
    {
      id: 5, 
      productName: 'Reebok',
      size: 11,
      price: 2000
    }, {
      id: 6, 
      productName: 'Adidas Lite',
      size: 9,
      price: 4800
    }
  ]
  // -> We can send data from Parent to Child via Props(properties)
  return (
    <div className="App">
      {/* <Header name={name} age={13} isAuthenticated={isAuthenticated} address={'Chennai'} />
      <h1> Welcome to our App!</h1>
      {isAuthenticated && <h2>Have a nice day!</h2>}
      {(voterId || age >= 18) && <h2>Eligible to Vote</h2> }
      <Layout products={products} /> */}

      <ComponentA />
    </div>
  );
}

export default App;
