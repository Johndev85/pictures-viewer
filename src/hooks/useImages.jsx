import { useState, useEffect } from "react"

function useImages() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState({})

    useEffect(() => {
        fetch("https://picsum.photos/id/984/info")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    return [items, isLoaded, error]
}

export default useImages
