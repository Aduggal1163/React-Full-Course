import "./App.css";
import ErrorMessage from "./ErrorMessage";
import FoodItems from "./FoodItems";
function App() {
  let foodItemss = [
    "Daal",
    "Green Veegies",
    "Roti",
    "Dairy Products",
    "Chicken and eggs",
    "Ghee",
  ];
  return (
    <>
      <h1 className="foodHeading">Healthy food</h1>
      {/* <ul class="list-group">
          <li class="list-group-item">Daal</li>
          <li class="list-group-item">Green Veegies</li>
          <li class="list-group-item">Roti</li>
          <li class="list-group-item">Dairy Products</li>
          <li class="list-group-item">Chicken and eggs</li>
        </ul> */}
      <ErrorMessage items={foodItemss}/>
      <FoodItems items={foodItemss}/>
    </>
  );
}

export default App;
