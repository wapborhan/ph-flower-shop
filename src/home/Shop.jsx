const Shop = () => {
  return (
    <section id="shop">
      <div className="wrapper">
        <div className="shop-title">
          <h1>Shop</h1>
          <p>
            Flowers have incredible diversity which probably is the most
            distinctive feature for the identification of plants. They have been
            a constant presence in society which symbolise beauty and love.
          </p>
        </div>
        <div className="shop-cat">
          <div className="shop-item">
            <div className="img">
              <img src="./assets/images/Rectangle 6.png" alt="" />
            </div>
            <div className="shop-content">
              <h1>Flower 1</h1>
              <div className="btm">
                <div className="price">$2</div>
                <div className="cart">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-item">
            <div className="img">
              <img src="./assets/images/Rectangle 5.png" alt="" />
            </div>
            <div className="shop-content">
              <h1>Flower 2</h1>
              <div className="btm">
                <div className="price">$2</div>
                <div className="cart">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-item">
            <div className="img">
              <img src="./assets/images/Rectangle 4.png" alt="" />
            </div>
            <div className="shop-content">
              <h1>Flower 3</h1>
              <div className="btm">
                <div className="price">$2</div>
                <div className="cart">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-item">
            <div className="img">
              <img src="./assets/images/Flower 01.png" alt="" />
            </div>
            <div className="shop-content">
              <h1>Flower 4</h1>
              <div className="btm">
                <div className="price">$2</div>
                <div className="cart">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
