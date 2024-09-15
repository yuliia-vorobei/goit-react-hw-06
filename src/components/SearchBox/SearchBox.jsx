import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <>
      <p className={css.contacts}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
}
