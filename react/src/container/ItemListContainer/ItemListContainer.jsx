// CONTENEDOR LIST PADRE
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {collection,getDoc,getDocs,getFirestore, query,where,} from "firebase/firestore";
import ItemList from "../../ItemList/ItemList";
import Loading from "../../Loading/Loading";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // CAPTURA DE ID (CATEGORIAS)
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");

    if (id) {
      const queryFiltrada = query(
        queryCollection,
        where("categoria", "==", id)
      );
      getDocs(queryFiltrada)
        .then((res) =>
          setProductos(
            res.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          )
        )
        .catch((error) => error)
        .finally(() => setCargando(false));
    } else {
      getDocs(queryCollection)
        .then((res) =>
          setProductos(
            res.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          )
        )
        .catch((error) => error)
        .finally(() => setCargando(false));
    }
  }, [id]);

  return <>{cargando ? <Loading /> : <ItemList productos={productos} />}</>;
};

export default ItemListContainer;
