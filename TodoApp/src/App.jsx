import './App.css'
import Head from './component/Head'
import Todo from './component/Todo'

function App() {

  return (
    <>
    <div className="flex flex-col bg-white text-center p-4 h-150 w-120 mt-4 rounded-xl">
     <Head/>
     <div className="border-1 bg-gray-500"></div>
       <Todo/>  
    </div>
    </>
  )
}

export default App
