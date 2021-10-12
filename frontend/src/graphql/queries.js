import { gql } from 'graphql-request'

const queries = {
  QueryTasks:  gql`
    {
      tasks {
        title
        selected
        _id
      }
  }`
}

export default queries
