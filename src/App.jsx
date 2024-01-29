import React, { useState, useEffect } from 'react';

const App = () => {
  // Creamos el estado para los productos y el input
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ name: "", price: "" });

  // Función para crear un nuevo producto
  const createData = () => {
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
      <div className="form-group">
        <input className="form-control" value={input.name} onChange={e => setInput({ ...input, name: e.target.value })} placeholder="Nombre del producto" />
        <input className="form-control" value={input.price} onChange={e => setInput({ ...input, price: e.target.value })} placeholder="Precio del producto" />
        <button className="btn btn-primary" onClick={createData}>Crear</button>
      </div>
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
            <button className="btn btn-danger" onClick={() => deleteData(index)}>Borrar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;