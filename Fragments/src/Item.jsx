const Item = ({foodItem}) => {
  const handleBuyClick=()=>{
    console.log(`${foodItem} being bought`)
  }
  return (
    <li className="list-group-item ad-item">
     <span><b><i>{foodItem}</i></b></span>
     <button onClick={()=>handleBuyClick()}
     style={{float: "right"}}>Click</button>
    </li>
  );
};
export default Item;
