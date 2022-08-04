import { listGames, randomize } from "../services/GetData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CategoryItems(props) {
  const navigate = useNavigate();

  const openDetail = () => {
    navigate(`/detailgame/${props.id}`);
  };

  return (
    <div>
      <img
        src={props.thumbnail}
        key={props.id}
        alt={props.id}
        className="max-h-28 hover:brightness-75"
        onClick={() => {
          openDetail();
        }}
      />
    </div>
  );
}

const ByCategoryList = () => {
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    listGames().then((items) =>
      setListCategory(
        randomize(
          items.filter((item) => item.id),
          20
        )
      )
    );
  }, []);

  return (
    <div className="grid grid-cols-5 grid-flow-row my-6 mx-20 gap-3">
      {listCategory.map((items) => (
        <div key={items.id}>
          <CategoryItems thumbnail={items.thumbnail} id={items.id} />
        </div>
      ))}
    </div>
  );
};

export default ByCategoryList;
