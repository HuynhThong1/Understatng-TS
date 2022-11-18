import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
  msgStatus: Boolean;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    // console.log(enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
          <label htmlFor="todo-next">Todo text</label>
          <input
            className={props.msgStatus ? "error-field" : ""}
            type="text"
            id="todo-text"
            ref={textInputRef}
          />
          {props.msgStatus && (
            <h3 className="error-msg center">Todo text cannot be blank!!!</h3>
          )}
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    </>
  );
};

export default NewTodo;
