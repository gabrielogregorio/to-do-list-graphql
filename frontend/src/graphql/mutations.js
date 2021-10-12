import { gql } from 'graphql-request'

const mutations = {
  addTask: (taskItem) => {
    return gql`
      mutation {
        createTask(data: {
          title: "${taskItem}",
          selected: false
        }) {_id}
    }`
  },

  updateTask:(id, title, selected) => {
    return gql`
      mutation {
        updateTask(id: "${id}", data: {
          title: "${title}",
          selected: ${!selected}
        }) {title}
    }`
  },

  newDay: () => {
    return gql`
      mutation {
        newDay(id: "123")
    }`
  },

  deleteTask: (id) => {
    return gql`
      mutation {
        deleteTask(id: "${id}")
      }`
  }
}

export default mutations
