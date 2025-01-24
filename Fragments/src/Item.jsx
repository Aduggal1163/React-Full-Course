const Item = ({foodItem}) => {
  return (
    <li className="list-group-item ad-item">
     <span><b><i>{foodItem}</i></b></span>
    </li>
  );
};
export default Item;
