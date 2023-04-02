const Login = () => {
    const handleClick = () => {
        alert('Hello world!');
    }
    
    return (
        <div>
            <h2>Login!</h2>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default Login;