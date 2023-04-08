import Card from "../Card/card";
import './layout.css';

const Layout = (props) => {
    const { products } = props;
    return (
        <div className="layout">
            {
                products.map((product, index) => (
                    <Card product={product} key={index} />
                ))
            }
        </div>
    )
}

export default Layout;