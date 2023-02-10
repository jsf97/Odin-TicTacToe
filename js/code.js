const Person = (name) => {
  const sayHi = () => { return (`Hi, my name is ${name}`) }
  return {sayHi}
}


const doSomething = (getPerson) => {
  const {sayHi} = Person(getPerson);
  return {sayHi}
}

const juan = doSomething('Juan')
console.log(juan.sayHi())
