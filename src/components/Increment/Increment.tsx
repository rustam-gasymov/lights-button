// import css from "./increment.css";
// import style from "./style.css";
// import { css } from "./increment.css";
import { useAppDispatch, useAppSelector } from "../../app";
//@ts-ignore
import { setIncrementValue, setDecrementValue } from "@test/state";
import "./increment.css";

export { setIncrementValue, setDecrementValue };

export const Increment = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(state);
  console.log("dispatch");

  const handleClick = () => {
    console.log("hiiiiii99999333333");
    dispatch(setIncrementValue());
    dispatch(setDecrementValue(10));
  };

  return (
    <button className="btn" onClick={handleClick}>
      Increment
    </button>
  );
};
