import './Task.css';

function Task({data, makeCheck, deleteTask}) {
    return (
        <div className={data.isDone ? "containerDone" : "container"}>
            <input type="checkbox" checked={data.isDone} onChange={() => makeCheck(data.id)}/>
            <p>{data.text}</p>
            <img className="trash-icon" src={require('../assets/icons/trash.png')} onClick={() => deleteTask(data.id)}/>
        </div>
    );
}

export default Task;
