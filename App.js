//LEARNING PROPS
//agar hmne app.js me first and second vedio ka title set kr diya to
//dusre component me ya child component me ye props object ki tarah jayenge
import './App.css'
import Vedio from "./components/Vedio"
function App (){
  return(
    <div>
    <div>hellow</div>
    <Vedio  
    title="Food Order Website" 
    channel="food channel" 
    views="10k" 
    time="1 yr ago" 
    >
    </Vedio> 
    <Vedio  
    title="Food Order Website2"  
    channel="food channel" 
    views="1M" 
    time="1 yr ago" 
    >
    </Vedio>
    </div>
  )

}
   
export default App