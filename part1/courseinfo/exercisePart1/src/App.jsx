const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Part = ({part}) => {
//  console.log(part);

  const {name, exercises} = part;

//  console.log(name, exercises);
  
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Total = ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <p>Number of exercises {part1.exercises + part2.exercises  + part3.exercises}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App