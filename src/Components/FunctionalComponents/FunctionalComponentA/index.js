import { useEffect, useState } from "react";
import FunctionalComponentB from "../FunctionalComponentB";

const FunctionalComponentA = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('useEffect ->  Type 1 is called... with one parameter')
    }); //called every time (mounting and updating);

    useEffect(() => {
        console.log('useEffect ->  Type 2 is called... with empty depedency array')
        
    }, []); //called only on mounting


    useEffect(() => {
        console.log('useEffect ->  Type 3 is called... with a varaible in dependecy array');
        //Unmounting
         return () => {
            console.log('useEffect ->  Type 4 is called...  while unmounting the parent')
        }
    }, [name]); //called on mounting and only when the variable in the dependency array changes.


    return(
        <div>
           <h2>Lifecycle using Functional Component</h2>
            <h4>Counter: {counter}</h4>
            <h4>Name: {name}</h4>
           <button onClick={() => setCounter(counter + 1)}>Click!</button>
           <input placeholder="Enter a name!" onChange={(e) => setName(e.target.value)} />
           {counter <= 10 && <FunctionalComponentB /> }
        </div>
    )
}

export default FunctionalComponentA;