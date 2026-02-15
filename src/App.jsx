import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [editIndex, setEditIndex] = useState(-1)
  const [showFinished, setShowFinished] = useState(false)
  const [view, setView] = useState('home')
  const pendingCount = todos.filter(todo => !todo.isCompleted).length

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    if (todo.trim() === '') return alert('Please enter a task')
    if (editIndex !== -1) {
      const updatedTodos = [...todos]
      updatedTodos[editIndex] = { ...updatedTodos[editIndex], todo: todo }
      setTodos(updatedTodos)
      setEditIndex(-1)
    } else {
      setTodos([...todos, { todo, isCompleted: false }])
    }
    setTodo('')
  }

  const handleEdit = (index) => {
    setTodo(todos[index].todo)
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTodos = todos.filter((_, i) => i !== index)
      setTodos(updatedTodos)
    }
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  const showAll = () => {
    setView('home')
    setShowFinished(false)
  }

  const showPending = () => {
    setView('pending')
  }

  return (
    <>
      <Navbar showAll={showAll} showPending={showPending} pendingCount={pendingCount} />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh] shadow-lg w-full md:w-3/4 lg:w-1/2">
      {view === 'home' ? <>
        <h1 className='text-2xl font-bold text-center'>My Todo List</h1>
          <div className="add-task my-5">
          <h2 className='text-lg font-bold'>Add a New Task</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder='Add a new task' className='w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-violet-500 transition-all duration-75 shadow-md my-3' />
          <button onClick={handleAdd} className='bg-violet-500 text-white px-4 py-2 my-3 rounded-lg hover:bg-violet-600 transition-all duration-75 shadow-md'>{editIndex === -1 ? 'Add Task' : 'Save Task'}</button>
        </div>
        <div className='flex items-center my-4'>
          <input className='my-4 w-4 h-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
          <label htmlFor="show" className='mx-2 font-semibold'>Show Finished</label>
        </div>
        <h2 className='text-xl font-bold'>Your Tasks</h2>
      </> : <h1 className='text-2xl font-bold text-center my-5'>Pending Tasks</h1>}
        <div className="todos">
          {todos.length === 0 && <div className='bg-white font-semibold text-violet-500 p-3 rounded-lg my-3 shadow-md'>No tasks added yet. Start by adding a new task above!</div>}
          {todos.map((todo, index) => {
            return ((view === 'home' && showFinished && !todo.isCompleted) || (view === 'pending' && todo.isCompleted)) ? null : <div key={index} className="todo flex justify-between items-center bg-white p-3 rounded-lg my-3 shadow-md">
              <div className="todo-info flex flex-1 items-center gap-4 min-w-0">
                <input type="checkbox" className='w-4 h-4' checked={todo.isCompleted} onChange={() => {
                  const updatedTodos = [...todos]
                  updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted
                  setTodos(updatedTodos)
                }} name="" id="" />
                <div className={`break-all ${todo.isCompleted ? 'line-through text-gray-500' : ''}`}>{todo.todo}</div>
              </div>
              <div className="actions flex gap-2">
                <button onClick={() => handleEdit(index)} className='bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition-all duration-75'><MdEditSquare /></button>
                <button onClick={() => handleDelete(index)} className='bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-all duration-75'><MdDelete /></button>
              </div>
            </div>
          })}

        </div>
      </div>

    </>
  )
}

export default App
