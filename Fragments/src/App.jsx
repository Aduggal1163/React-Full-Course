import "./App.css";
import Container from "./Container";
import ErrorMessage from "./ErrorMessage";
import FoodInput from "./FoodInput";
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
      <ErrorMessage items={foodItemss}/>
      <FoodInput/>
      
      <FoodItems items={foodItemss}/>
      {/* eg of children props */}
      <Container>
      <p>random text</p>
      <p>random text</p>
      <p>random text</p>
      <p>random text</p>
      <p>random text</p>
      <p>random text</p>
      </Container>
    </>
  );
}

export default App;
