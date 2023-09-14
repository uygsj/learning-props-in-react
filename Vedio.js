//LEARNING PROPS
//ekto vedio ke andar props likhke props lelo ya fir props ka name likho  usko desctructuring way me props dena bolte hai
//props se hm title le rhe hai 
import './Vedio.css';
/*function Vedio(props){
  
    return(
    <>
        <img className="img" src="https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=12&h=75&dpr=1" alt="this is Food"/>
        <div className="Food">{props.title}</div>
    </>
 )

}
export default Vedio*/

//props object ke tarah pass hoga
//niche title and bgColor props dvara liye hai function Vedio({title,bgColor})
//style jo property hai vah hamesha object ke form me dena hai style={{backgroundColor:bgColor}}

function Vedio({title,channel,views,time}){
  
    return(
    <>
        <img className="img" src="https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="this is Food"/>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">{views} views <span>.</span> {time} </div>
    </>
 )

}
export default Vedio