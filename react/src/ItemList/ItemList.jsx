// 1 LISTADO DE LOS PRODUCTOS
// 2 COMPONENTE HIJO DE LISTcontainer

import Item from "../components/Item/Item";
const ItemList = ({ productos }) => {
    return (

        productos.map(producto => <Item key={producto.id} producto={producto} />


        )

    )
}
export default ItemList














