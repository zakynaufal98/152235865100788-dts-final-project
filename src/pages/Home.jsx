import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CardCarousel from "../component/Carousel";
import SearchAndDiscover from "../component/SearchAndDiscover";
import LatestRelease from "../component/LatestRelease";
import { listGames } from "../services/GetData";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    listGames().then(data => setData(data))
  }, [])

  return (
    <div>
      <Navbar />
      <SearchAndDiscover />
      <CardCarousel data={data}/>
      <LatestRelease data={data} />
      <Footer />;
    </div>
  );
};

export default Home;
