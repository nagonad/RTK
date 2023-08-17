import {useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { iceCreamActions } from './iceCreamSlice'


const IcecreamView = () => {
  const [value, setvalue] = useState(1)
    const numOfIceCreams = useSelector((state)=>state.icecream.numOfIceCreams)
    const dispatch = useDispatch()

  return (
    <div><h2>Number of ice creams - {numOfIceCreams}</h2>
    <button onClick={()=>dispatch(iceCreamActions.ordered())}>Order ice cream</button>
    <input type="number" value={value} onChange={(e)=>setvalue(parseInt(e.target.value))} />
    <button onClick={()=>dispatch(iceCreamActions.restocked(value))}>Restock ice cream</button>
    </div>
  )
}

export default IcecreamView