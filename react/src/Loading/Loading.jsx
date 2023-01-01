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


// PARA TRAER TODOS
// const db = getFirestore()
// const queryCollection = collection(db, 'productos')
// const queryFiltrada = query(queryCollection, where('categoria', '==', id))
// getDocs(queryFiltrada)
//     .then(data => setProductos(data.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
//     .catch(error => (error))
//     .finally(() => setCargando(false))



/*--------- PRODUcTOS TRAIDOS DESDE BASE DE DATOS de a 1 uno--------*/
    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryDoc = doc(db, 'productos', 'productoId')
    //     getDoc(queryDoc)
    //         .then(resp => setProductos({ id: resp.id, ...resp.data() }))
    // }, [id])