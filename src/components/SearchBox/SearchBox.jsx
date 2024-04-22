import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
