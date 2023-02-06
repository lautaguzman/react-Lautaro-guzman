import { useCartContext } from "../../Context/CartContext";
const CantTotal = () => {
  const { precioTotal } = useCartContext();
  return (
    <div>
      <h4>el precio total es:{precioTotal()} </h4>
    </div>
  );
};

export default CantTotal;
