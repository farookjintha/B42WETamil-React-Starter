import './childComponent.css';
import { useState } from 'react';

const ChildComponent = (props) => {
    const {counter, setCounter} = props;
    const [userDetails, setUserDetails] = useState({username:'', city: '', mobileNumber: ''});

    const incrementCounter = () => {
        setCounter(counter + 1);
    }
    const decrementCounter = () => {
        setCounter(counter - 1);
    }

    const resetCounter = () => {
        setCounter(0);
    };

    const handleUserName = (e) => {
        console.log('Username: ',e.target.value);
        setUserDetails({...userDetails, username: e.target.value});
    }
    const handleUserCity = (e) => {
        console.log('City: ',e.target.value);

        setUserDetails({...userDetails, city: e.target.value});
    }
    const handleUserMobile = (e) => {
        console.log('Mobile: ',e.target.value);
        setUserDetails({...userDetails, mobileNumber: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting User Details: ', userDetails);
    }

    return (
        <div>
            Child Component:
            <h3>Counter: {counter}</h3> 
            <button onClick={incrementCounter}>increment!</button>
            <button onClick={decrementCounter}>Decrement!</button>
            <button onClick={resetCounter}>Reset!</button>

            <div className="box" onMouseEnter={incrementCounter}>

            </div>

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleUserName} placeholder='Enter name' />
                <input type='text' onChange={handleUserCity}  placeholder='Enter city' />
                <input type='text' onChange={handleUserMobile}  placeholder='Enter mobilenumber' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ChildComponent;