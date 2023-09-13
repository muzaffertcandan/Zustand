import {create} from "zustand";

export const useTodosStore = create ((set)=> ({
    todos: [
        {
            title: 'Todo 1',
            completed: false
        }
    ],
    addTodo: item => set(state => ({
        todos: [...state.todos, item]
    })),
    removeTodo: id => set(state => ({
        todos: state.todos.filter((_,key) => id != key)
    }))

}))