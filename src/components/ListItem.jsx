import { BsTrashFill } from "react-icons/bs";
import Check from "./items/Check";
import cn from 'classnames';

function ListItem({ item, onToggle, onDelete }) {
  return (
    <div 
      className="p-4 bg-zinc-800 border border-zinc-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
      onClick={() => onToggle(item.id)}
    >
      <div className="flex items-center gap-4">
        <Check isComplite={item.completed} />
        <span className={cn("text-lg transition-all duration-300", { 
          "line-through text-zinc-500": item.completed,
          "text-white": !item.completed 
        })}>
          {item.title}
        </span>
      </div>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(item.id);
        }}
        className="group-hover:opacity-100 p-2 hover:bg-zinc-700 rounded-xl transition-all duration-500"
      >
        <BsTrashFill
          size={20}
          className="text-zinc-500 hover:text-rose-400 transition-colors ease-in-out duration-500"
        />
      </button>
    </div>
  );
}

export default ListItem;

