
const List = (props) => {
    let { todos, title, DeleteATodo } = props

    const handleOnClickDelete = (id) => {
        DeleteATodo(id);
    }
    return (
        <div className='list-content'>
            <h5>{title}</h5>
            {todos.map((item, index) => {
                return (
                    <div className='todo-child' key={item.id}>
                        <button type="button" onClick={() => handleOnClickDelete(item.id)}>Delete</button>
                        {index + 1} - {item.title}
                    </div>
                )
            })}
            <hr></hr>
        </div>
    )
}

export default List;