import { query, where } from "firebase/firestore"
import { useEffect } from "react"
import "./Loading.css"

const Loading = () => {
    useEffect(() => { return () => { console.log('dismounting') } })
    return (
        <div className="loader">
            <div className="loader-container">
                <div className="circulo"></div>
                <div className="circulo"></div>
                <div className="circulo"></div>
                <p>Cargando...</p>
            </div>
        </div>
    )
}

export default Loading


