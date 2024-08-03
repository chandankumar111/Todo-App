import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [Todo, setTodo] = useState([
    { task: "Sample todo", id: uuidv4(), done: false },
  ]);
  let [NewTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodo([...Todo, { task: NewTodo, id: uuidv4(), done: false }]);
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodo((previousTodo) =>
      Todo.filter((previousTodo) => previousTodo.id != id)
    );
  };

  let UpperCaseAll = () => {
    let newArry = Todo.map((todo) => {
      return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
    });
    setTodo(newArry);
    // setTodo([...Todo, {task: newArry, id: uuidv4()}]);
  };

  let MarkasDoneAll = () => {
    let newArry = Todo.map((todo) => {
      return {
        ...todo,
        done:true,
      };
    });
    setTodo(newArry);
    // setTodo([...Todo, {task: newArry, id: uuidv4()}]);
  };

  let UpperCaseOne = (id) => {
    setTodo((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return {
            ...todo,
          };
        }
      })
    );
  };

  let MarkAsDone = (id) => {
    setTodo((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            done:true,
          };
        } else {
          return {
            ...todo,
          };
        }
      })
    );
  };

  return (
    <>
      <div>
        <h4><u>Todo List</u></h4>
        <input
          type="text"
          placeholder="add a text"
          onChange={updateTodoValue}
          value={NewTodo}
        />
        <br />
        <br />
        <button onClick={addNewTask}>Add Todo</button>
        <br />
        <br />
        <h4><u>Sample Listing</u></h4>
        <ul>
          {Todo.map((todo) => (
            <li key={todo.id}>
              <span style={todo.done ? {textDecorationLine:"line-through"}: {}}>
              {todo.task}
              </span>
              &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              &nbsp; &nbsp;
              <button onClick={() => UpperCaseOne(todo.id)}>
                UpperCaseOne
              </button>
              &nbsp; &nbsp;
              <button onClick={() => MarkAsDone(todo.id)}>MarkAsDone</button>
            </li>
          ))}
        </ul>
        <button onClick={UpperCaseAll}>UpperCase All</button>
        <br /><br />
        <button onClick={MarkasDoneAll}>MarkAsDone All</button>
      </div>
    </>
  );
}
