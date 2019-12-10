import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({ name }) => (
	<div>
		<h1> {name} </h1>
	</div>
  )

const Content = ({ parts }) => (
  parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
   )

const Part = (part) => (
		<p>{part.name} {part.exercises}</p>
  )
  
const Total = ({ parts }) =>  (
    <p> Total of {parts.reduce((acc, curr) => acc + curr.exercises, 0)} exercises</p>
  )
    
const Course = ({ course }) => (
	<div>
   <Header name={ course.name } />
   <Content parts={course.parts} />
   <Total parts={course.parts} />
	</div>
  )

  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
        <Course course={course} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))