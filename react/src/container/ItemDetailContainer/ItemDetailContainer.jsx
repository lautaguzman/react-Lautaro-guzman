import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import gFetch from "../../helpers/gfetch"
import ItemDetail from "../../ItemDetail/ItemDetail"
import Loading from "../../Loading/Loading"

// CONTENEDOR PADRE DE DETALLES 
const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { productoId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productoId)
        getDoc(queryDoc)
            .then(resp => setProductos({ id: resp.id, ...resp.data() }))
            .catch(error => console.log(error))
            .finally(() => setCargando(false))
    }, [productoId])


    return (
        <>
            {cargando ? <Loading /> : <ItemDetail productos={productos} />
            }
        </>

    )
}

export default ItemDetailContainer