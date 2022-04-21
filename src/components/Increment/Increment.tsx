import { useAppDispatch, useAppSelector } from "../../app";
import { setDecrementValue } from "decrement-button";
import { setIncrementValue } from "./IncrementSlice";
import "./Increment.css";

export const Increment = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(state);
  console.log("dispatch");

  const handleClick = () => {
    console.log("hiiiiii99999333333");
    dispatch(setIncrementValue());
    dispatch(setDecrementValue(10000));
  };

  return (
    <button className="btn" onClick={handleClick}>
      Increment
    </button>
  );
};
