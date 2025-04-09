import { useState } from "react";
import { Fragment } from "react";

const CrudPost = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [features, setFeature] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  const API_POST = async () => {
    const new_object = {
      name,
      data: {
        features,
        price: parseFloat(price),
        year: parseFloat(year, 10)
      }
    };

    try {
      const response = await fetch(`https://api.restful-api.dev/objects`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(new_object)
      });
      const data = await response.json();
      localStorage.setItem('object_id', data.id);
      setMessage(`Objeto creado: ${JSON.stringify(name)}`);
    } catch (error) {
      setMessage(`Ocurrió un error: ${error}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el recargo de la página
    API_POST();
  };

  return (
    <Fragment>
      <h1>Ingresar producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="year"
            placeholder="Año"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="features"
            placeholder="Características"
            value={features}
            onChange={(e) => setFeature(e.target.value)}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
      <p>{message}</p>
    </Fragment>
  );
};

export default CrudPost;
