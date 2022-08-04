import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { gameDetails } from "../services/GetData";
import ByCategoryList from "./ByCategory";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DetailGame = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    gameDetails(id).then((data) => setData(data));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="text-white">
        <div className="flex flex-col sm:flex-row card-container ml-20 mr-20 text-white m-3 border-2 p-4 gap-6 min-[360px]">
          <div className="detail-image w-full min-w-[360px]">
            <img
              src={`https://www.freetogame.com/g/${data.id}/thumbnail.jpg`}
              alt=""
              className=" min-w-[360px] h-full hover:brightness-75"
            />
          </div>
          <div className="description">
            <ul className="flex flex-col gap-2">
              <h1 className="uppercase text-[2rem] mb-2 font-serif ">
                {data.title}
              </h1>
              <li className="mb-4 font-mono">{data.short_description}</li>
              <li>Platform: {data.platform}</li>
              <li>Genre: {data.genre}</li>
              <li>Release Date: {data.release_date}</li>
              <li>Publisher: {data.publisher} </li>
              <li>Developer: {data.developer} </li>
            </ul>
          </div>
        </div>
        <h1 className="ml-20 mr-20">You Might like</h1>
        <ByCategoryList category={data.genre} propsData={data} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailGame;
