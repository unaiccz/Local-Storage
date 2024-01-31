import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const App = () => {
  // Creamos el estado para los productos y el input
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ name: "", price: "" });

  // Función para crear un nuevo producto
  const createData = (e) => {
    e.preventDefault();
    // comprobamos que el input no esté vacío
    if (input.name === "" || input.price === "") {
      // Usamos sweetalert2 para mostrar el error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes llenar todos los campos',
      })
      return;
    }
    const currentData = JSON.parse(localStorage.getItem('crudData')) || [];
    currentData.push(input);
    localStorage.setItem('crudData', JSON.stringify(currentData));
    setData(currentData);
    setInput({ name: "", price: "" });
  }

  // Función para borrar el producto
  const deleteData = (index) => {
    const currentData = JSON.parse(localStorage.getItem('crudData')) || [];
    currentData.splice(index, 1);
    localStorage.setItem('crudData', JSON.stringify(currentData));
    setData(currentData);
  }

  // Usamos useEffect para obtener los datos del localstorage cuando se carga la página
  useEffect(() => {
    const currentData = JSON.parse(localStorage.getItem('crudData')) || [];
    setData(currentData);
  }, []);

  return (
    <div className="container">
      <h4> by unaiccz</h4>
      <form className="form-group">
        <input className="form-control" value={input.name} onChange={e => setInput({ ...input, name: e.target.value })} placeholder="Nombre del producto" />
        <input className="form-control" value={input.price} onChange={e => setInput({ ...input, price: e.target.value })} placeholder="Precio del producto" />
        <button className="btn btn-primary" onClick={(e)=> createData(e)}>Crear</button>
      </form>
      <div>
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="card"
          style={{
            margin: '20px',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            backgroundColor: '#f8f9fa'
          }}
        >
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#343a40', fontWeight: 'bold' }}>Nombre: {item.name}</h5>
            <p className="card-text" style={{ color: '#6c757d' }}>Precio: {item.price}</p>
            <button className="btn btn-danger" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => deleteData(index)}>Borrar</button>
          </div>
        </motion.div>
      ))}
      </div>
    </div>
  )
}

export default App;