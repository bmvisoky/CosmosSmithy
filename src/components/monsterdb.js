import { items } from "../stitch";

export function useTodoItems(userId) {
  const [state, dispatch] = React.useReducer(todoReducer, { todos: [] });
  const addTodo = async task => {
    const todo = { task, owner_id: userId };
    const result = await items.insertOne(todo);
    dispatch({ type: "addTodo", payload: { ...todo, _id: result.insertedId } });
  };
  const removeTodo = async todoId => {
    await items.deleteOne({ _id: todoId });
    dispatch({ type: "removeTodo", payload: { id: todoId } });
  };
  const completeAllTodos = async () => {
    await items.updateMany({ owner_id: userId }, { $set: { checked: true } });
    dispatch({ type: "completeAllTodos" });
  };

}
