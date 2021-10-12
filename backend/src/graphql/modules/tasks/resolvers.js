import Task from '../../../models/Task'

export default {
  Query: {
    tasks: async() => { return await Task.find() }
  },
  Mutation: {
    createTask: async(_, { data }) => { return await Task.create(data)},
    updateTask: async(_, {id, data}) => {
      let resultado = await Task.findOneAndUpdate({_id:id}, {title: data.title, selected: data.selected}, {new: true})
      return resultado
    },
    newDay: async(_, { id }) => { return !!await Task.updateMany({}, {"$set":{selected: false}}) },    
    deleteTask: async(_, { id }) => {return !!await Task.findOneAndDelete({_id:id})}
  }
}