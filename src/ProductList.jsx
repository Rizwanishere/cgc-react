import ProductItem from './ProductItem';

function ProductList(){
    const items= [
        {id:1,brand:'Samsung',model:'S22',price:700,image:'https://t.ly/4sTbh'},
        {id:2,brand:'Samsung',model:'S23',price:800,image:'https://t.ly/fRVD9'},
        {id:3,brand:'Samsung',model:'S24',price:900,image:'https://t.ly/w1HKT'},
    ];
    
    return (
        <div>
            <h1>Products</h1>
            {/* {
                items.map(item => <div>
                    <h3>{item.brand} {item.model}</h3>
                    <img width="200" height="200" src={item.image}/>
                    <div>${item.price}</div>
                    </div>)
            } */}

            <table className="centered-table" border={1} width="100%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:"center"}}>
                    { items.map(it => <ProductItem item={it}/>) }
                </tbody>
            </table>
        </div>
    );
};
    
export default ProductList;