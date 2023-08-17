// import { useSelector,useDispatch } from 'react-redux'
import { cakeActions } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of ice cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered())}>
        Order cake
      </button>
      <button onClick={() => dispatch(cakeActions.restocked(5))}>
        Restock cake
      </button>
    </div>
  );
};

export default CakeView;
