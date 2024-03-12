import { useContext, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Context } from "../../../Context";

function TopPanelSearch() {
  const { meetings, meetingsAfterSearch, setMeetingsAfterSearch } =
    useContext(Context);
  const [searchValue, setSearchValue] = useState("");

  function search() {
    if (searchValue != "") {
      let temporaryMeetings = meetings.filter((obj) =>
        obj.name.includes(searchValue)
      );
      setMeetingsAfterSearch(temporaryMeetings);
    } else {
      let temporaryMeetings = [...meetings];
      setMeetingsAfterSearch(temporaryMeetings);
    }
  }
  console.log(meetingsAfterSearch);

  return (
    <div className="top-panel-div">
      <Search className="top-panel-icon-serch" />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          search();
        }}
        className="search-input"
        placeholder="Search"
      />
    </div>
  );
}
export default TopPanelSearch;
