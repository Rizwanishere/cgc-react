import { Component } from "react";
import axios from "axios";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";
import Loader from "../util/Loader";

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      hasError: false,
      loading: true,
      page: 1,
      metadata: {},
      search: "",
      sort: null,
      direction: null,
    };
  }

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

  fetchData = () => {
    const url = `http://localhost:3000/products/page/${this.state.page}/size/9?search=${this.state.search}&sort=${this.state.sort}&direction=${this.state.direction}`;
    axios.get(url)
      .then((res) => this.setState({ products: res.data.data, metadata: res.data.metadata }))
      .catch((err) => this.setState({ hasError: true }))
      .finally(() => this.setState({ loading: false }));
  }

  shouldComponentUpdate(a, b) {
    return true;
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page != this.state.page ||
      prevState.sort != this.state.sort ||
      prevState.direction != this.state.direction
    ) {
      this.fetchData();
    }
  }

  onTextChange = (evt) => {
    this.setState({ search: evt.target.value });
  }

  onSearch = () => {
    this.fetchData();
  }

  onEnter = (evt) => {
    if (evt.keyCode === 13) this.fetchData();
  }

  onSortChange = (evt) => {
    // price:asc
    const sortStrings = evt.target.value;
    const tokens = sortStrings.split(":");
    this.setState({ sort: tokens[0], direction: tokens[1] });
  }

  render() {
    return (
      <div>
        <div className="flex m-2">
          <h1 className="flex text-2xl font-semibold text-gray-500 mt-2 p-1">
            Products
          </h1>
          <button
            onClick={this.onPrev}
            style={{ backgroundColor: this.state.page === 1 ? "gray" : "" }}
            className="bg-orange-500 m-3 text-white hover:bg-orange-600 p-2 rounded"
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
          <h1 className=" mt-5 text-gray-500 font-normal text-md">
            {this.state.page} of {this.state.metadata.pages} 
            {' '}
            (Total: {this.state.metadata.rows})
          </h1>
          <button
            onClick={this.onNext}
            style={{ backgroundColor: this.state.page === this.state.metadata.pages ? "gray" : '' }}
            className="bg-orange-500 m-3 text-white hover:bg-orange-600 p-2 rounded"
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

          <div className="mt-1">
            <label
              for="default-search"
              className="sr-only mb-2 text-sm font-medium"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  class="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onKeyUp={this.onEnter}
                onChange={this.onTextChange}
                type="search"
                id="default-search"
                className="block w-full rounded-lg border p-4 ps-10 text-sm text-black focus:ring-orange-600"
                placeholder="Search Brand.."
                required
              />
              <button
                onClick={this.onSearch}
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-gray-400"
              >
                Search
              </button>
            </div>
          </div>

          <div>
            <select
              onChange={this.onSortChange}
              className="h-12 ml-3 mt-2 border border-orange-500 rounded"
            >
              <option>Sort</option>
              <option value="price:asc">Price Low to High</option>
              <option value="price:desc">Price High to Low</option>
              <option value="discount:asc">Discount Low to High</option>
              <option value="discount:desc">Discount High to Low</option>
            </select>
          </div>
        </div>

        <ShouldRender when={this.state.loading}>
          <Loader />
        </ShouldRender>

        <ShouldRender when={this.state.hasError}>
          <Error />
        </ShouldRender>

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
