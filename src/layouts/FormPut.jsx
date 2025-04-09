import { useState } from "react";
import { Fragment } from "react";

const CrudPut = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [features, setFeature] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const API_PUT = async () => {
    const id_local_storage = localStorage.getItem("object_id");

    if (!id_local_storage) {
      setMessage("No hay un ID guardado en localStorage.");
      return;
    }

    const product_edit = {
      name,
      data: {
        features,
        price: parseFloat(price),
        year: parseFloat(year, 10),
      },
    };

    try {
      const response = await fetch(
        `https://api.restful-api.dev/objects/${id_local_storage}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product_edit),
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la actualización: ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem("object_id", data.id); // Guarda solo el ID
      localStorage.setItem("item_edit", JSON.stringify(product_edit)); // Guarda el objeto editado
      setMessage(`Objeto editado: ${JSON.stringify(product_edit.name)}`);
    } catch (e) {
      setMessage(`Ocurrió un error: ${e.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API_PUT();
  };

  return (
    <Fragment>
      <h1>Editar producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="year"
            placeholder="Año"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="features"
            placeholder="Características"
            value={features}
            onChange={(e) => setFeature(e.target.value)}
            required
          />
        </div>
        <button type="submit">Actualizar</button>
      </form>
      <p>{message}</p>
    </Fragment>
  );
};

export default CrudPut;
