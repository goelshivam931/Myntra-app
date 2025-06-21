import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagitems = useSelector((store) => store.bag);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const elementFoundInBag = bagitems.indexOf(item.id) >= 0; //Stpres index of element in a bag

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFoundInBag ? (
          <button
            className="btn-add-bag removeButton"
            onClick={handleRemoveFromBag}
          >
            Remove
          </button>
        ) : (
          <button className="btn-add-bag" onClick={handleAddToBag}>
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
