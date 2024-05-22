function ChildComponent({item}) {
  return (
    <div>{item}</div>
  )
}
export default ChildComponent

const obj ={
  name: 'Kostya',
  car: 'opel'
}

console.log(obj.name)
const {name, car} = obj
console.log(name, car)