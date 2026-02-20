import { BsCheck } from "react-icons/bs";
import Check from "./Check";
import cn from 'classnames';
import { BsTrashFill } from "react-icons/bs";

function TodoItem(props) {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
      onClick={() => props.changeTodo(props.todo.id)}
    >
      <button className="flex items-center">
        <Check isComplite={props.todo.isComplite} />
        <span className={cn({ "line-through": props.todo.isComplite })}>
          {props.todo.title}
        </span>
      </button>
      <button onClick={props.removeTodo(todo.id)}>
        <BsTrashFill
          size={22}
          className="text-zinc-600 hover:text-rose-400 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
}

export default TodoItem;
