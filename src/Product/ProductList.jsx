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
    page: 1,
    metadata: {}
  };

  onPrev = () => {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1,
      });
    }
    console.log("onPrev");
  };

  onNext = () => {
    if (this.state.page < this.state.metadata.pages) {
      this.setState({
        page: this.state.page + 1,
      });
      console.log("onNext");
    }
  };

  constructor() {
    super();
  }

  fetchData() {
    const url = `http://localhost:3000/products/page/${this.state.page}/size/9`;
    axios.get(url)
      .then((res) => this.setState({ products: res.data.data, metadata: res.data.metadata}))
      .catch((err) => this.setState({ hasError: true }))
      .finally(() => this.setState({ loading: false }));
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(a, b) {
    if (b.page != this.state.page) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-500 m-2 flex p-1">
            Products
            <button
              onClick={this.onPrev}
              style={{ backgroundColor: this.state.page === 1 ? "gray" : '' }}
              className="bg-orange-500 m-1 ml-3 text-white hover:bg-orange-600 p-1 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <h1 className="m-1 text-gray-500 font-normal text-lg">
              {this.state.page} of {this.state.metadata.pages}
              {' '}
              (Total: {this.state.metadata.rows})
            </h1>
            <button
              onClick={this.onNext}
              style={{ backgroundColor: this.state.page === this.state.metadata.pages ? "gray" : '' }}
              className="bg-orange-500 m-1 text-white hover:bg-orange-600 p-1 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <ShouldRender when={this.state.loading}>
              <Loader />
            </ShouldRender>
            <ShouldRender when={this.state.hasError}>
              <Error />
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
