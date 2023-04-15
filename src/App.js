import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/login';
import Header from './Components/Header/header';
import Layout from './Components/Layout/layout';
import ComponentA from './Components/ComponentA/componentA';
import ClassComponentA from './Components/ClassComponents/ClassComponentA/ClassComponentA';
import FunctionalComponentA from './Components/FunctionalComponents/FunctionalComponentA';

import { useState } from 'react';
import CompA from './Components/PropsDrilling/CompA';

//JSX Format - JS and XML
function App() {
  const [showFC, setShowFC] = useState(true);

  // -> We can send data from Parent to Child via Props(properties)
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Header name={name} age={13} isAuthenticated={isAuthenticated} address={'Chennai'} />
      <h1> Welcome to our App!</h1>
      {isAuthenticated && <h2>Have a nice day!</h2>}
      {(voterId || age >= 18) && <h2>Eligible to Vote</h2> }
      <Layout products={products} /> */}
      {/* <ClassComponentA /> */}
      {/* <ComponentA /> */}

      {/* <h1>Functional Component (Lifecycles)</h1>
      {showFC && <FunctionalComponentA />}

      <button onClick={() => setShowFC(!showFC)}>Toggle FC</button> */}


      <CompA />
    </div>
  );
}

export default App;


// class -> SnakeCase -> MyClassName
// functions or variables or objects -> camelCase -> myVariableName or myObjName or myArrayName