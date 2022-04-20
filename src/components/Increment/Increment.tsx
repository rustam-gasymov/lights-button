import { useAppDispatch, useAppSelector } from "../../app";
//@ts-ignore
import { setIncrementValue } from "./IncrementSlice";
import "./increment.css";

// const { setIncrementValue } = reducers;
// export { setIncrementValue };

export const Increment = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(state);
  console.log("dispatch");

  const handleClick = () => {
    console.log("hiiiiii99999333333");
    dispatch(setIncrementValue());
    // dispatch(setDecrementValue(10));
  };

  return (
    <button className="btn" onClick={handleClick}>
      Increment
    </button>
  );
};
