import { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import gFetch from "../helpers/gfetch";


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
                productos.map(producto => <Card key={producto.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Body>
                        <Card.Title>{producto.name}</Card.Title>
                        <Card.Text>
                            {producto.descripcion}
                        </Card.Text>
                        <Button variant="primary">Detalle</Button>
                    </Card.Body>
                </Card>)
            }
        </section>
    )
}

export default ItemListContainer