import { useEffect } from "react"

const UnmountComponent = () => {
  useEffect(() => {
    console.log('Component will unmount')
  }, [])
  return (
    <div>UnmountComponent</div>
  )
}
export default UnmountComponent