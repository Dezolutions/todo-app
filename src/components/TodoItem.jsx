import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/todoActions'
import classNames from 'classnames'

const  TodoItem = ({text,id,completed}) => {
  const dispatch = useDispatch()

  const onRemoveTodo = () => {
    dispatch(removeTodo(id))
    
  }

  const onToggleTodo = () => {
    dispatch(toggleTodo(id))
  }

//классы со стилями, которые задаются или удаляется при изменении значения completed
  let wrappedClasses = classNames("app__list-item",{"app__list-item-completed": completed})
  let wrappedClassesTrashBtn= classNames("app__btn-delete",{"app__btn-delete-completed": completed})
  let wrappedClassesCheckMark = classNames( "custom-checkbox", { "custom-checkbox-checked": completed})

  return (
    <li className={wrappedClasses} onClick={onToggleTodo}>
      <input className="app__list-checkbox"  type="checkbox" readOnly checked={completed} />
      <span className={wrappedClassesCheckMark}><i className="fas fa-check"></i></span>
      <p className="app__list-text">{text}</p>
      <button onClick={onRemoveTodo} className={wrappedClassesTrashBtn}><i className="fas fa-trash"></i></button>
    </li>
  )
}

export default TodoItem;
