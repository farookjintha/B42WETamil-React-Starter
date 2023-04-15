import { useState } from "react";
import CompB from "./CompB";

const CompA = () => {
    const [counter, setCounter] = useState(0);
    console.log('CompA');
    return (
        <div>
            <CompB counter={counter} setCounter={setCounter} />
        </div>
    )
}

export default CompA;