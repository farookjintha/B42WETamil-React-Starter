import CompC from "./CompC";


const CompB = (props) => {
    const {counter, setCounter} = props;
    console.log('CompB');
    return (
        <div>
            <CompC counter={counter} setCounter={setCounter} />
        </div>
    )
}

export default CompB;