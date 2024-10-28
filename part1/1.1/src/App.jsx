import { Fragment } from "react"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
    { name: "Fundamentals of React", count: "10" },
    { name: "Using props to pass data", count: "7" },
    { name: "State of a component", count: "14" }
  ]

  return (
    <div>
      <Head course={course} />
      <Content parts={parts} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}
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
      <Part name={parts[0].name} count={parts[0].count} />

      <Part name={parts[1].name} count={parts[1].count} />

      <Part name={parts[2].name} count={parts[2].count} />

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