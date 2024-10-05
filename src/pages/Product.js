import axios from "axios";
import Card from "../reusableComponents/Card";
import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  function getFirstImageUrl(item) {
    const images = item.images;
    let image = "";

    if (Array.isArray(images) && images.length > 0) {
      try {
        image = JSON.parse(images[0]);
        return image;
      } catch (e) {
        console.error(e);

        return "https://i.imgur.com/mp3rUty.jpeg";
      }
    }

    return image;
  }

  async function getProducts() {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  const categories = [1, 2, 3, 4];

  return (
    <>
     <header className="pl-16 flex flex-col justify-items-start bg-black text-white h-64 p-4">
  <h1 className="text-2xl text-left font-semibold">Shop Products</h1>
  <p className="text-left mt-3">
    Discover Your Next Favorite: Explore Our Curated Selection of Top-Rated Products!
  </p>
</header>
      <section className="flex justify-between items-center ml-16">
        <div className=" my-4 ">
          <h3 className="font-bold text-2xl ">Filters</h3>
          <input type="text" placeholder="Start typing to search" />
        </div>
        <div className="flex justify-between items-center mr-[14%] my-4 border border-black p-4">
            <p className="mr-2">Sort by</p>
            <select className="border-none outline-none">
                <option>Ascending</option>
                <option>Decending</option>
            </select>
        </div>
      </section>
      <section className="product-section grid grid-cols-1 md:grid-cols-[20%_70%] ">
        <section className="sidenav ml-16">
          <div>
            <h4 className="font-bold text-2l">Category</h4>
            {categories.map((value, index) => (
              <div key={value} className={`flex `}>
                <input type="checkbox" />
                <p>Category {value}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="products grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
          {products.map((product, index) => (
            <>
              <Card
                price={product.price}
                image={getFirstImageUrl(product)}
                description={product.title}
                key={product.id}
              />
            </>
          ))}
        </section>
      </section>
    </>
  );
};
export default Product;
