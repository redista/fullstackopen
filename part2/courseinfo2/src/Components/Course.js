import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) => (
	<div>
		<h2> {name} </h2>
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


export {Header, Content, Part, Total, Course}
