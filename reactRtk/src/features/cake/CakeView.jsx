import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { cakeActions } from './cakeSlice'

const CakeView = () => {
    const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
    const dispatch = useDispatch()



  return (
    <div><h2>Number of ice cakes - {numOfCakes}</h2>
    <button onClick={()=> dispatch(cakeActions.ordered())}>Order cake</button>
    <button onClick={()=> dispatch(cakeActions.restocked(5))}>Restock cake</button>
    </div>
  )
}

export default CakeView