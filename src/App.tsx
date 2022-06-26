import { gql, useQuery } from '@apollo/client';


const GET_LESSONS_QUERY = gql `
query {
  lessons {
    id,
    title
  }
}
`
interface lessons {
  id: String;
  title:String;
}

function App() {
  const  {data } = useQuery<{lessons: lessons[]}>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
