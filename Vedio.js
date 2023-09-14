//conditional rendering

import './Vedio.css';

function Vedio({title,channel,views,time,verified}){
  
    return(
    <>
        <img className="img" src="https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="this is Food"/>
        <div className="title">{title}</div>
        { verified ? <div className="channel">{channel} ✅</div> : <div className="channel">{channel}</div>}
        <div className="views">{views} views <span>.</span> {time} </div>
    </>
 )

}
export default Vedio