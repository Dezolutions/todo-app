import React from 'react'
import  TodoList  from './components/TodoList'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo} from './redux/todoActions'



function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state)
  const [todoTask,setTodoTask] = React.useState('')

  //При каждом изменении массива todos, сохрянаем его в localStorage
  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  
  const onChangeTodoTask = event => {
    setTodoTask(event.target.value)
  }


//Добавляем задачу в список, путем нажатия на определенную кнопку
  const onAddTodo = () => {
    dispatch(addTodo(todoTask))
    setTodoTask('')
  }
//Добавляем задачу в список, путем нажатия кнопки Enter
  const onAddTodoEnter = event => {
    if(event.key === 'Enter') {
      dispatch(addTodo(todoTask))
      setTodoTask('')
    }
  }
  return (
    <div className="app">
      <div className="app__block">
        <div className="app__block-header">
          <h1 className="app__block-title">Список задач</h1>
        </div>
        <div className="app__main">
          <div className="app__main-input">
            <input onChange={onChangeTodoTask} onKeyPress={onAddTodoEnter} value={todoTask} type="text" placeholder="Введите текст задачи" />
            <button onClick={onAddTodo} className="app__btn-add">+</button>
          </div>
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
