import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singers'

function App() {

  const actor = ["sakib", "shoriful Raj", "jasim", "Robel", "salman Shah"];

  const singer = [
    {id: 1,name:"Mahfujur Rahman", age:68},
    {id: 2,name:"Eva Rahman", age:38},
    {id: 3,name:"Shuvro Dev", age:58},
    {id: 4,name:"Pritom", age:28},
  ]
  return (
    <>
      <h1>Vite + React</h1>

      {singer.map(singer => <Singer singer={singer}></Singer>)}






      <Actor name="Bappa Raj"></Actor>
      {
        actor.map(actor => <Actor name={actor}></Actor>)
      }
      
      {/* <Todo task = "learn React" isDone = {true}></Todo>
      <Todo task = "Explore core concepts" isDone = {false}></Todo>
      <Todo task = "Try JSX" isDone = {true}></Todo> */}
      {/* <Device name = "laptop" price = "30"></Device>
      <Device name = "mobile" price = "20"></Device>
      <Device name = "watch" price = "10"></Device>
      <Person></Person>
      <Person></Person>
      <Student grade = "7" score = "99"></Student>
      <Student grade = {12} score = "89"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}
function Person() {
  const age = 20;
  const money = 30;
  const person = {
    name: "Akash",
    age: 20
  }
  return (
    <>
      <p>I am a person of {age}</p>
      <p>I am a person of {age + money}</p>
      <p>I am a person of {person.age + money}</p>
    </>
  )
}
const {grade , score} = {grade : "7", score : "99"}
function Student({grade=1 , score=0}){
  return(
    <div className='student'>
      <h3>This is a student</h3>
      <h3>Grade: {grade}</h3>
      <h3>Score: {score}</h3>
    </div>
  )
}
function Developer(){
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid green",
    borderRadius: "10px"
  }
  return(
    <div style={developerStyle}>
      <h3>Dev</h3>
      <p>Coding:</p>
    </div>
  )
}
function Device(props){
  console.log(props);
  return <h2>This Device: {props.name}  price: {props.price}</h2>
}
export default App
