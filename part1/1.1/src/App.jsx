import { Fragment } from "react"
//app
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Head course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}
//part
const Part = ({ name, count }) => {
  return (
    <>
      <p>{name} {count}</p>
    </>
  )

}
const Content = ({ parts }) => {
  return (
    <>
      <Part name={parts[0].name} count={parts[0].exercises} />

      <Part name={parts[1].name} count={parts[1].exercises} />

      <Part name={parts[2].name} count={parts[2].exercises} />

    </>
  )

}
const Head = (props) => {
  return (<Fragment>
    <h1>{props.course}</h1>
  </Fragment>)

}

const Total = (props) => {
  return (<>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </>)
}



export default App