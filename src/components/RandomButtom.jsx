import React from "react"

const RandomButton = () => {
    function handleClick(e) {
        e.preventDefault()
        window.location.reload(false)
    }

    return (
        <div className="button">
            <button onClick={handleClick}>RANDOM IMAGE</button>
        </div>
    )
}

export default RandomButton
