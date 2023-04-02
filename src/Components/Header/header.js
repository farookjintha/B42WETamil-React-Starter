import './header.css';

function Header(props){
    const { name } = props;
    return (
        <div class="header">
            <h3>Hi, {name}!</h3>
        </div>
    )
}

export default Header;