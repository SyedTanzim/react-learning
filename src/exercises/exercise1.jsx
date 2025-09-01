import reactLogo from '../assets/react.svg'

const Exercise1 = () =>{
    return(
        <div>
            <h1>Syed Tanzim Wajih</h1>

            <img src={reactLogo} className="logo react" alt="react image" />

            <ul>
                <li>Invent new traffic lights</li>
                <li>Practice a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>

            <button onClick={()=> alert("click me")} > Click Me </button>
        </div>
    )
}

export default Exercise1