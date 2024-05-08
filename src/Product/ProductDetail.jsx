import React from "react";
import ProductItem from "./ProductItem";
import ShouldRender from "../util/ShouldRender";
import axios from "axios";

class ProductDetail extends React.Component {
  state = {
    product: null,
  };

  componentDidMount() {
    const id = "6633be6eb04edf45cc560044"; //To make it dynamic, Do function migration
    const url = `http://localhost:3000/products/${id}`;
    axios
      .get(url)
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="flex justify-center">
        <ShouldRender when={this.state.product}>
          <ProductItem product={this.state.product} />
        </ShouldRender>
      </div>
    );
  }
}

export default ProductDetail;
