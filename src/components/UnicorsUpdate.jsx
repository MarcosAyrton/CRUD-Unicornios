import { Fragment, useState } from "react";

const Update = ({ id }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [power, setPower] = useState("");

  const API_PUT = async () => {
    const unicornio_edit = {
      name,
      color,
      age: parseFloat(age),
      power,
    };

    try {
      const response = await fetch(
        `https://crudcrud.com/api/72d93384040e4257bfcec3c65db0c369/unicorns/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(unicornio_edit),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la actualización");
      }

      console.log("Actualización exitosa");
    } catch (e) {
      console.error("Error", e);
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
            name="color"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="Año"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="power"
            placeholder="Poder"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            required
          />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </Fragment>
  );
};

export default Update;
