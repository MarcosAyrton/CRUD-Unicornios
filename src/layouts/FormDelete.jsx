import { Fragment, useState } from "react";

const CrudDelete = () => {
  const [message, setMessage] = useState("");

  const API_DELETE = async () => {
    const id_local_storage = localStorage.getItem("object_id");

    if (!id_local_storage) {
      setMessage("No hay un ID guardado en localStorage.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.restful-api.dev/objects/${id_local_storage}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error al eliminar: ${response.status}`);
      }

      localStorage.removeItem("object_id");
      localStorage.removeItem("item_edit"); // Borra también el objeto editado si existía

      setMessage(`El objeto con ID ${id_local_storage} fue eliminado exitosamente.`);
    } catch (e) {
      setMessage(`Ocurrió un error: ${e.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API_DELETE();
  };

  return (
    <Fragment>
      <h1>Eliminar producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>¿Estás seguro de que deseas eliminar este producto?</p>
        </div>
        <div>
          <button type="submit">Eliminar</button>
        </div>
      </form>
      <p>{message}</p>
    </Fragment>
  );
};

export default CrudDelete;

