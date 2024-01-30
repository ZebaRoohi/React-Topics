
import withCounter from "./withCounter";
const HoverButton = (props) => {
   const{count,incrementCount}=props;
  return (
    <div>
      <button onMouseOver={incrementCount}>Hover</button>
      <h3>Counter:{count}</h3>
    </div>
  )
}

export default withCounter(HoverButton,5)
