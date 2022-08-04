import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";
import SearchList from "./SearchList";
import { useEffect, useState } from "react";
import { listGames } from "../services/GetData";

const SearchAndDiscover = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [data, setData] = useState([]);

  function searchSetter(value) {
    setSearch(value);
  }

  useEffect(() => {
    let unmounted = false;

    listGames().then((data) => {
      if (!unmounted) {
        setData(data);
        setSearchList(
          data
            .map((item) => ({ title: item.title, id: item.id }))
            .filter((item) =>
              item.title.toLowerCase().match(search.toLowerCase())
            )
            .slice(0, 10)
        );
      }
    });

    return () => {
      unmounted = true;
    };
  }, [data, search]);

  return (
    <div>
      <div className="nav-2 flex max-w-full justify-start h-16 items-center min-w-[360px] pl-10  md:pl-40 md:pr-40 gap-4 ">
        <div className="flex bg-[#090909] rounded-xl px-2 py-1 items-center gap-2 ">
          <SearchIcon className="w-5 h-5 text-white" />
          <input
            type="text"
            name=""
            id="searchhGame"
            placeholder="Search Game"
            className="w-36 bg-[#2a2a2a] rounded-xl focus:outline-none"
            value={search}
            onChange={(e) => searchSetter(e.target.value)}
          />
        </div>
        <ul className="flex text-[#f5f5f5] items-center ">
          <li>Discover</li>
          <ChevronDownIcon className="w-6 h-6 md:invisible" />
          <div className="gap-6 flex hidden md:flex">
            <li>Browse</li>
            <li>News</li>
          </div>
        </ul>
      </div>
      <div>{search !== "" && <SearchList item={searchList} />}</div>
    </div>
  );
};

export default SearchAndDiscover;
