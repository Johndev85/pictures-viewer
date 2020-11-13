import React from "react"
import useImages from "../hooks/useImages"
import Rating from "react-rating"

const ImageCard = () => {
    const [items, isLoaded, error] = useImages()

    if (error) {
        console.log(error.message)
        return (
            <div>
                Error: <span>!!Upss there is no image to show</span>
            </div>
        )
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <section className="card">
                <div className="card__id">
                    <span># {items.id}</span>
                </div>
                <img src={items.download_url} alt="items" />
                <h1> Author: {items.author}</h1>
                <div className="card__rating">
                    <Rating
                        start={0}
                        stop={5}
                        onChange={(rate) => alert(`Rating: ${rate}`)}
                    />
                </div>
            </section>
        )
    }
}

export default ImageCard
