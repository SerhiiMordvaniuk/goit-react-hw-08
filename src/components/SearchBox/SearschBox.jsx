import { useId } from "react";
import s from "./SearschBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectFilterName } from "../../redux/filters/filtersSelectors";

const SearschBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterName);

  return (
    <>
      <form>
        <label htmlFor={id} className={s.form}>
          <span>Find contact by name</span>
          <input
            name="text"
            className={s.input}
            id={id}
            onChange={(event) => {
              dispatch(changeFilter(event.target.value));
            }}
            value={filter}
          />
        </label>
      </form>
    </>
  );
};

export default SearschBox;
