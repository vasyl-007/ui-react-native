import shortId from "shortid";
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";

const handlers = {
  [ADD_TODO]: (state, { title }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: shortId(),
        title,
      },
    ],
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter((item) => item.id !== id),
  }),
  [UPDATE_TODO]: (state, { title, id }) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    }),
  }),
  DEFAULT: (state) => state,
};
export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

// export const todoReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: shortId(),
//             title: action.title,
//           },
//         ],
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((item) => item.id !== action.id),
//       };
//     case UPDATE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id === action.id) {
//             todo.title = action.title;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }

//   return state;
// };
