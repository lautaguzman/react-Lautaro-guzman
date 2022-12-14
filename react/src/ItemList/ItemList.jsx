// 1 LISTADO DE LOS PRODUCTOS
// 2 COMPONENTE HIJO DE LIST
import { Button, Card } from "react-bootstrap";
const ItemList = ({ productos }) => {
    return (

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

    )
}
export default ItemList