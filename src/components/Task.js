export default function Task(props) {
  const Task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleCompleted(Task);
  }

  return (
    <li className="song">
      <div className="song-details">
        <p>
          <span>
            {Task.completed === true ? <del>{Task.title}</del> : Task.title}
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={Task.completed}
            />
          </span>
        </p>
      </div>
      <div onClick={handleDelete}>
        <button>delete</button>
      </div>
    </li>
  );
}
