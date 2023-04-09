import { useState } from 'react';
import ChildComponent from './childComponent';


const ComponentA = () => {
    const email = 'farook@gmail.com';
    const age = 4;

    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            ComponentA
            <ChildComponent counter={counter} setCounter={setCounter}/>
        </div>
    )
}

export default ComponentA;