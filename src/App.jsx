import React from "react"
import ImageCard from "./components/ImageCard"

const App = () => {
    function handleClick(e) {
        e.preventDefault()
        window.location.reload()
    }

    return (
        <article className="container">
            <ImageCard />
            <button onClick={handleClick}>RANDOM IMAGE</button>
        </article>
    )
}

export default App
