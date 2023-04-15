import { useEffect } from "react";

const FunctionalComponentB = () => {

    
    useEffect(() => {
        console.log('Child Component... while mounting')

        //Unmounting
        return () => {
            console.log('useEffect ->  Type 4 is called... (Child) while unmounting')
        }
    }, []); 

    return (
        <div>
            <h2>Child Component in the Lifecycle</h2>
        </div>
    )
}

export default FunctionalComponentB;