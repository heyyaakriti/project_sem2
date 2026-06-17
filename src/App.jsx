import "./App.css";

import burger from "./images/burger.jpg";
import fries from "./images/fries.jpg";
import pasta from "./images/pasta.jpg";
import pizza from "./images/pizza.jpg";

const foods = [
  {
    id: 1,
    name: "Burger",
    image: burger,
    quantity: "1 Piece",
    price: 200,
  },
  {
    id: 2,
    name: "French Fries",
    image: fries,
    quantity: "1 Plate",
    price: 180,
  },
  {
    id: 3,
    name: "Pasta",
    image: pasta,
    quantity: "1 Bowl",
    price: 220,
  },
  {
    id: 4,
    name: "Pizza",
    image: pizza,
    quantity: "Medium",
    price: 350,
  },
];

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1>
          <h1><i>Crimson Table🍷</i></h1>
        </h1>

        <button className="cart-btn">Cart</button>
      </nav>

      <div className="cards-container">
        {foods.map((food) => (
          <div className="card" key={food.id}>
            <img src={food.image} alt={food.name} />

            <h2>{food.name}</h2>

            <p>{food.quantity}</p>

            <h3>₹{food.price}</h3>

            <button className="add-btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;