// CONTENEDOR LIST PADRE
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import gFetch from "../../helpers/gfetch";
import ItemList from "../../ItemList/ItemList";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    // CAPTURA DE ID (CATEGORIAS)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            gFetch()
                .then(resp => setProductos(resp.filter(prod => prod.categoria === id)))
                .catch(error => (error))
                .finally(() => setCargando(false))
        } else {
            gFetch()
                .then(resp => setProductos(resp))
                .catch(error => (error))
                .finally(() => setCargando(false))
        }

    }, [id])

    return (
        <section>
            {cargando ?
                <h1>cargando...</h1>
                :
                <ItemList productos={productos} />
            }
        </section>
    )
}

export default ItemListContainer