
const List = (props) => {
    let { todos } = props
    return (
        <div className='list-content'>
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