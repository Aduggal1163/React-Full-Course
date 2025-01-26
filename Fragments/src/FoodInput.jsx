import { useState } from "react";

const FoodInput = () => {
  const[textState,setTextState]=useState();
  // const handleOnChnge = (e) => {
  //   console.log(e.target.value);
  //   setTextState(e.target.value);
  // };
  const onKeyDown=(e)=>{
    if(e.key==="Enter")
    {
      let newFoodItem=e.target.value;
      e.target.value="";
      let newItems=[...FoodItems,newFoodItem];
      setTextState(newItems);
    }
  }
  return (
    <>
      <input
          onChange={(e) => onKeyDown(e)}
        type="text"
        placeholder="Type food"
        style={{ width: "60%", padding: "5px", margin: "10%" }}
      />

      <p>{textState}</p>
    </>
  );
};
export default FoodInput;
