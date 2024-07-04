import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const init = () => {
    // Si da un error al inicio es porque JSON.parse es undefined el || no esta bien escrito lo salta y arroja un undefined en vez del [] vacio.
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer , [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
    
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = ( id ) => {
        console.log(id)
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }


  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
