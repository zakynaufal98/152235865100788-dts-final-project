import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { listGames } from "../services/GetData";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Card({ propsGames }) {
  const navigate = useNavigate();

  const openDetail = (obj) => {
    navigate(`/detailgame/${propsGames.id}`);
  };

  return (
    <div className="text-white m-3 border-2 rounded-lg">
      <div className="flex flex-col items-center rounded-lg  text-white">
        <img
          src={`https://www.freetogame.com/g/${propsGames.id}/thumbnail.jpg`}
          className="max-h-[300px] object-fill p-2 rounded-xl cursor-pointer hover:brightness-75"
          onClick={() => {
            openDetail(propsGames);
          }}
        />
      </div>
      <div className="p-2">{propsGames.title} </div>
    </div>
  );
}

function CardCarousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    listGames().then((data) => setData(data.slice(0, 20)));
  }, []);

  const list = data.map((game) => (
    <div key={game.id}>
      <Card title={game.title} id={game.id} propsGames={game} />
    </div>
  ));

  return (
    <div className="px-20 text-white ">
      <Carousel responsive={responsive}>{list}</Carousel>
    </div>
  );
}

export default CardCarousel;
