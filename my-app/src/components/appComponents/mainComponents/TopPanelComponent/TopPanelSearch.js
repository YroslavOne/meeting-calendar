import { useContext } from "react";
import { Search } from "react-bootstrap-icons";
import { Context } from "../../../Context";

function TopPanelSearch() {
  const { searchValue, setSearchValue } = useContext(Context);
  return (
    <div className="top-panel-div">
      <Search className="top-panel-icon-serch" />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-input"
        placeholder="Search"
      />
    </div>
  );
}
export default TopPanelSearch;
