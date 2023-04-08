import './card.css';

const Card = (props) => {
    const {product} = props;

    return (
        <div className="card">
            <h2>{product.productName}</h2>
            <h3>Size: {product.size}</h3>
            <h3>Rs. {product.price}</h3>
        </div>
    )
};

export default Card;