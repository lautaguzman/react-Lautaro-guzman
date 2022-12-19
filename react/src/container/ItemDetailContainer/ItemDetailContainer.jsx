import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import gFetch from "../../helpers/gfetch"
import ItemDetail from "../../ItemDetail/ItemDetail"

// CONTENEDOR PADRE DE DETALLES 
const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})

    const { productoId } = useParams()

    useEffect(() => {
        gFetch()
            .then(resp => setProductos(resp.find(prod => prod.id == productoId)))
            .catch(error => console.log(error))
    })
    return (
        <ItemDetail productos={productos} />
    )
}

export default ItemDetailContainer