import { useNavigate } from "react-router-dom";

function SearchList(props) {
  const navigate = useNavigate();

  const openDetail = (url) => {
    navigate(`/detailgame/${url}`);
    console.log(url);
  };

  return (
    <div className="bg-[#2a2a2a] text-white max-w-sm overflow-clip absolute z-10 translate-x-[40px] md:translate-x-[160px]">
      <ul>
        {props.item.map((item) => (
          <li
            onClick={() => openDetail(item.id)}
            key={item.id}
            className="py-1 px-3 hover:bg-[#3a3a3a] cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
