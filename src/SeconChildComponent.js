import { memo } from "react"

/* const areEqual = (prevProps, nextProps) => {
  return prevProps.object.name !== nextProps.object.name
} */
const SeconChildComponent = memo(() => {
  //рендер тільки буде відбуватися при першому завантаженні
  console.log('SeconChildComponent rendered')
  return (
    <div>SeconChildComponent</div>
  )
})
/* }, areEqual) */
export default SeconChildComponent