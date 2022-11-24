function ProductScreen(props){
    console.log(props.match.params.id)
    const product = data.products.find(x==x._id === props.match.params.id)
    return 
    <div className="back-to-result">
        <div>
            <Link to="/">back to result</Link>
        </div>
        <div className="details">
        <div className="details-image">
            <img src={product.image} alt="product" ></img>
        </div>
        <div classsName="details-info">
            <ul>
                <li><h4>product.name</h4></li>
                <li>product.rating</li
                <li>
                 price   <b>{product.prize}</b>
                </li>
                <div>product-info</div>
            </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>price: {product.status}</li>
                <li>Qty: <Select>
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 </Select>
                </li>
                <button className="button">
                    Add to cart
                </button>
            </ul>
        </div>
        </div>
    </div>
}
export default ProductScreen;