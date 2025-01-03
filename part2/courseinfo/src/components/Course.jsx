const Header = ({ courseName }) => <h1>{courseName}</h1>

const Total = ({total}) => <p>Number of exercises: {total}</p>

const Part = ({ part }) => {
    const {name, exercises} = part;
    return <p>{name} {exercises}</p>
}

const Content = ({ course }) => {
    console.log(course);

    return (
        <>
            {course.parts.map(part => <Part key={part.id} part={part} />)}
        </>
    )
}

const Course = ({ course }) => {

    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
//    console.log(total);
    
  return (
    <div>
      <Header courseName={course.name} />
      <Content course={course} />
      <Total total={total} />
    </div>
  )
}

export default Course;