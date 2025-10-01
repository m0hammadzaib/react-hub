import Reactl, {useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("Color changed to something else ")
  }, [color])


  // example of cleanup function
  
   useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")
      return()=>{
        alert("Component was unmounted")
      }
  }, [])
  
  return (
    <div>
      I am navbar of {color} color haha...
    </div>
  )
}

export default Navbar
