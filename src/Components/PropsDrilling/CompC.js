import CompD from "./CompD";

const CompC = (props) => {
    const {counter, setCounter} = props;
    console.log('CompC');
    
    return (
        <div>
            <CompD counter={counter} setCounter={setCounter} />
        </div>
    )
}

export default CompC;