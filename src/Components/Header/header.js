import './header.css';

function Header(props){
    const { name, isAuthenticated } = props;
    return (
        <div className="header">
            <div>TheChennaiShop</div>
            {isAuthenticated ?
             <div>
                <span>Hi, {name}!</span>
                <button>Sign out</button>
            </div> : 
            <div>
                <button>Sign in</button>
            </div>}
        </div>
    )
}

export default Header;