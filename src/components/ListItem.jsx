function ListItem({ item }) {
  return (
    <div className="p-4 bg-zinc-800 rounded shadow mb-2 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="font-semibold text-lg">{item.title}</span>
        <span className={`text-sm ${item.completed ? "text-green-400" : "text-yellow-400"}`}>
          {item.completed ? "Completed" : "Pending"}
        </span>
      </div>
    </div>
  );
}

export default ListItem;
