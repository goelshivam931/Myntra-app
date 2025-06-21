import { useSelector } from "react-redux";

const BagSummary = () => {
  const Convenience_fees = 99;
  let totalMRP = 0;

  let totalDiscount = 0;
  let finalPayment = 0;

  const bagItemsID = useSelector((store) => store.bag); //array of item IDs in bag
  const items = useSelector((store) => store.items);

  let totalItem = bagItemsID.length;

  //It is array of items in bag
  const ItemExistsinBag = items.filter((item) => {
    const itemIndex = bagItemsID.indexOf(item.id);
    return itemIndex >= 0;
  });

  ItemExistsinBag.forEach((bagitem) => {
    totalMRP += bagitem.original_price;
    totalDiscount += bagitem.original_price - bagitem.current_price;
  });

  finalPayment = totalMRP - totalDiscount + Convenience_fees;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{Convenience_fees}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
