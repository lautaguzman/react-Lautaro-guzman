// CONTENEDOR LIST PADRE
import { useState } from "react";
import { useEffect } from "react";
import gFetch from "../../helpers/gfetch";
import ItemList from "../../ItemList/ItemList";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        gFetch()
            .then(resp => setProductos(resp))
            .catch(error => (error))
            .finally(() => setCargando(false))
    }, [])

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