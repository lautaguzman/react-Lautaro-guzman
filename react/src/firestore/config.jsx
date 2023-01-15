// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3U4NeO1QXf1mY3Xk-Y_bGDnoMnnTFNnY",
    authDomain: "proyecto-ecommerce-mq-2022.firebaseapp.com",
    projectId: "proyecto-ecommerce-mq-2022",
    storageBucket: "proyecto-ecommerce-mq-2022.appspot.com",
    messagingSenderId: "372762969663",
    appId: "1:372762969663:web:f0b155b0cc7da590c59a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}



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