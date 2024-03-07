
const List = (props) => {
    let { todos, title } = props
    return (
        <div className='list-content'>
            <h5>{props.title}</h5>
            {todos.map((item, index) => {
                return (
                    <div className='todo-child' key={item.id}>
                        {index + 1} - {item.title}
                    </div>
                )
            })}
        </div>
    )
}

export default List;