function Resume({title, bgcolor}){
    return (
        <>
        <div className="resume" style={{backgroundColor:bgcolor}}>{title} </div>
        <h2>Emily</h2>
        <p>Interest</p>
        <ul>
            <li>Drawing </li>
            <li>painting</li>
            <li>sketching</li>
        </ul>
        <p>Skill</p>
        <ul>
            <li>Web development</li>
        </ul>
        <p>Education</p>
        <ul>
            <li>Arts</li>
        </ul>
        <p>Experience</p>
        <ul>
            <li>with webdevelopment and react js</li>
        </ul>

        </>

    )
}
export default Resume;