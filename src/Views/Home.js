import React from "react";
// import axios from "axios";
// import Loader from "../Components/Loader";
// import ProductCard from "../Components/ProductCard";
// import { useAxiosGet } from "../Hooks/Httpsrequests";
// import HelloWorld from "../Components/HelloWorld";

function Home() {
  // const url = `https://5eead1beb13d0a00164e4bbe.mockapi.io/products?page=1&limit=10`;
  // let products = useAxiosGet(url);
  let content = (
    <div>
      <p>
        This is the temp home page. click the navigation menu on the top right
        to select model view
      </p>
    </div>
  );

  // if (products.error) {
  //   content = <p> There was an error, try again or something</p>;
  // }
  // if (products.loading) {
  //   content = <Loader></Loader>;
  // }
  // if (products.data) {
  //   content = products.data.map((product) => (
  //     <div key={product.id}>
  //       <ProductCard product={product} />
  //     </div>
  //   ));
  // }
  return (
    <div>
      <h1 className="font-bold text-2xl">Feature Visualizing...</h1>
      {content}
    </div>
  );
}

export default Home;
