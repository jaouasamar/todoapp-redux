import { ADD,EDIT,FILTER,COMPLETE} from "../Constants/actionsTypes";


  export const addTask = (newTask) => {
    return {
      type: ADD,
      payload: newTask,
    };
  };
  export const editTask = (editedTask) => {
    return {
      type: EDIT,
      payload: editedTask,
    };
  };
  export const filtertask=()=>{
    return {
      type:FILTER,
      
    };
  };
    export const handleComplete=(id) =>{
      return {
        type:COMPLETE,
        payload:id
      };
    };
   
