import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

const Bag = () => {
  const bagItemsID = useSelector((store) => store.bag); //array of item IDs in bag
  const items = useSelector((store) => store.items);

  //It is array of items in bag
  const ItemExistsinBag = items.filter((item) => {
    const itemIndex = bagItemsID.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {ItemExistsinBag.map((item, key) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
