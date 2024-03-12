import { useContext, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Context } from "../../../Context";

function TopPanelSearch() {
  const { meetings, meetingsAfterSearch, setMeetingsAfterSearch } =
    useContext(Context);
  const [searchValue, setSearchValue] = useState("");

  function search(valueSearch) {
    if (valueSearch != "") {
      let temporaryMeetings = meetings.filter((obj) =>
        obj.name.includes(valueSearch)
      );
      setMeetingsAfterSearch(temporaryMeetings);
    } else {
      let temporaryMeetings = [...meetings];
      setMeetingsAfterSearch(temporaryMeetings);
    }
  }
  console.log(meetingsAfterSearch);
  console.log(searchValue);

  return (
    <div className="top-panel-div">
      <Search className="top-panel-icon-serch" />
      <input
        type="text"
        value={searchValue}
        // onClick={()=>search()}
        onChange={(e) => {
          setSearchValue(e.target.value);
          search(e.target.value);
        }}
        className="search-input"
        placeholder="Search"
      />
    </div>
  );
}
export default TopPanelSearch;
