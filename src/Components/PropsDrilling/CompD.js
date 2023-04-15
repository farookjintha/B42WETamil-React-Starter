const CompD = (props) => {
    const {counter, setCounter} = props;
    console.log('CompD');
    return (
        <div>
            <h4>Counter on Comp4: {counter}</h4>
            <button onClick={() => setCounter(counter+1)}>Click</button>
        </div>
    )
}

export default CompD;