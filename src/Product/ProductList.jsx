import { Component } from "react";
import axios from "axios";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";
import Loader from "../util/Loader";

class ProductList extends Component {
  state = {
    products: [],
    hasError: false,
    loading: true,
  };

  constructor() {
    super();
    axios
      .get("https://cgc-node-b1.onrender.com/api/v1/products")
      .then((res) => this.setState({ products: res.data.data }))
      .catch((err) => this.setState({ hasError: true }))
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-500 m-2 flex">
            Products
            <ShouldRender when = {this.state.loading}>
             <Loader /> 
            </ShouldRender>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2">
          {this.state.products.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    );
  }
}
export default ProductList;
