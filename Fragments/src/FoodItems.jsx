import Item from "./Item";

const FoodItems=({items})=>{
    return(
      <ul classNameName="list-group">
        {items.map((item) => (
            <Item key={item} foodItem={item}/>
        ))}
      </ul>
    )
}
export default FoodItems