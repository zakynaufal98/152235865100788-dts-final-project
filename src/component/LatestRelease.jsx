import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

function Card({ propsGames }) {
    const navigate = useNavigate();

    const openDetail = (obj) => {
        navigate(`/detailgame/${obj.id}`);
    };

    return (
        <div className="text-white">
            <div className="flex flex-col items-center pr-2 rounded-lg text-white">
                <img
                    src={`https://www.freetogame.com/g/${propsGames.id}/thumbnail.jpg`}
                    className="object-fill rounded-lg cursor-pointer hover:brightness-75"
                    onClick={() => {
                        openDetail(propsGames);
                    }}
                />
            </div>
        </div>
    );
}

function LatestRelease(props) {

    const data = props.data

    function dateToNum(date){
        const newDate = date.split("-").join("")
        return parseInt(newDate);
    }

    const sortedData = data.sort((a,b) => dateToNum(b.release_date)-dateToNum(a.release_date)).slice(0,20)

    const list = sortedData.map((game) => (
        <div key={game.id}>
            <Card title={game.title} id={game.id} propsGames={game} />
        </div>
    ));

    return (
        <div className="px-20 my-10 text-white">
            <h1 className="my-3 text-sm">Latest Released Games</h1>
            <Carousel responsive={responsive}>{list}</Carousel>
        </div>
    );
}

export default LatestRelease;
