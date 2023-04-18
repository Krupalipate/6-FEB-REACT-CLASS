import React, { useState, useEffect } from "react";

// Api kyare call karsu jyare component mount thase tyare
// API calling always useEffect ni under j call karvanu [ ] pan aapi devu because 1 j var run thai

// console.log("products", products);
function Main() {
  //  product show thai te pehla loding effect batava mate
  const [isloding, setIsLoding] = useState(true);

  // products batava mate
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoding(false);
        // api mathi deta aamathi aave che
        setProducts(data);
      })
      .catch((e) => {
        // arror aave tyare pan false karvu pade na kare to loding farya j kare
        setIsLoding(false);
        console.log("error", e);
      });
  }, []);

  if (isloding) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      // isloding true hase to j loding dekhase ni to product dekhase
    );
  }

  console.log("product", products);
  return (
    <div className="container">
      <h3>Total product : {products.length}</h3>
      <div className="row ">
        {products.map((item) => {
          //   destructuring ma {  } aave
          const { title, price, description, image } = item;
          // console.log("item", item);
          return (
            <div className="col-md-4  col-6 mb-5">
              <div className="card" style={{ border: "1px solid black" }}>
                <img
                  src={image}
                  alt=""
                  className="w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div
                  className="card-body "
                  style={{ border: "1px solid black" }}
                >
                  <h3 className="text-truncate">{title}</h3>
                  {/* text-truncate & title  aa 2 no used thai sake  */}
                  <p className="text-truncate">{description}</p>
                  <p>price: {price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
