import "./increment.css";
import { useAppDispatch, useAppSelector } from "../../app";
import { setIncrementValue } from "../../features/counter/counterSlice";

export const Increment = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(state);
  console.log("dispatch");

  const handleClick = () => {
    console.log("helloccccc world");
    dispatch(setIncrementValue());
  };

  return (
    <button className="btn" onClick={handleClick}>
      Increment
    </button>
  );
};