export const CartWidget = () => {
  return (
    <nav className="flex flex-row w-auto p-2 bg-sky-500 justify-between">
      <ul className=" text-cyan-50 flex space-x-4">
        <li>Home </li>
        <li>Productos </li>
        <li>Contacto </li>
      </ul>
      <div className="flex space-x-1">
        <img className="w-7" src="/public/img/carrito-de-compras.png" alt="" />
        <p className="text-cyan-50 text-">0</p>
      </div>
    </nav>
  );
};
