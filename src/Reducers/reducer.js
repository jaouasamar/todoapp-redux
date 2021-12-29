import { ADD, EDIT,FILTER,COMPLETE } from "../Constants/actionsTypes"

const initialState = {
  todos: [
      {
          id: Math.random(),
          task: "Learn mongoDB",
          isDone: false,
      },
      {
          id: Math.random(),
          task: "Learn RESET API ",
          isDone: false,
      },

      {
          id: Math.random(),
          task: "Learn JSX",
          isDone: true,
      },
      {
          id: Math.random(),
          task: "Learn HTML",
          isDone: true,
      },
      {
          id: Math.random(),
          task: "Learn React",
          isDone: true,
      },
      {
          id: Math.random(),
          task: "Learn ES6",
          isDone: true,
      },

  ],
};
      const todoReducer=(state=initialState,{ type, payload })=>
      {
          switch (type){
            
            case ADD:
              return {
              
                ...state, todos: [...state.todos, payload]
               };
           
            case EDIT:
              return {
                ...state,
                todos: state.todos.map((el) =>
                    el.id === payload.id ? { ...el, ...payload } : el
                ),
            };
            case FILTER:
              return {
                ...state,
                todos: state.todos.filter((el) => (el.isDone === payload || payload === "")),
            };
            case COMPLETE:
              return {
                ...state,
                todos:state.todos.map(elt=>elt.id===payload?{...elt,isDone:!elt.isDone}:elt),
               
              }
            default:
              return state
          }
      }
      export default todoReducer
