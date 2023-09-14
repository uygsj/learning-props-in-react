/*title="Food Order Website" 
    channel="food channel" 
    views="10k" 
    time="1 yr ago"
    isko hm ek object ki trah use kr skte hai spread operator ki madat se {...obj} 
    bs keys mathch honi chahiy jaise title in obj should match with title in vedio.js`s title */
    //boolean wali value hamesha {} me likho



import './App.css'
import Vedio from "./components/Vedio"

function App (){

  let obj={
    verified:'true',
    title:"Food Order Website" ,
    channel:"food channel" ,
    views:"10k" ,
    time:"1 yr ago",
  }
  return(
    <div>
    <div>Vedio</div>
    <Vedio {...obj}></Vedio>
    <Vedio
    verified={true} 
    title="Food Order Website" 
    channel="food channel" 
    views="10k" 
    time="1 yr ago" 
    >
    </Vedio> 
    <Vedio 
    verified={false} 
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
