import React, { useEffect, useState } from "react";

const DeleteObject = () => {
    const [response, setResponse] = useState(null);

    const handleDelete = async () => {
        const id = localStorage.getItem("objectid");
        if (!id) {
            alert("No hay ID en el localStorage");
            return;
        }

        try {
            const res = await fetch(`https://crudcrud.com/api/72d93384040e4257bfcec3c65db0c369/unicorns/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setResponse("Objeto Eliminado");
                localStorage.removeItem("objectid");
            } else {
                setResponse("Error al eliminar el objeto");
            }
        } catch (error) {
            setResponse("Error al eliminar el objeto: " + error.message);
        }
    };

    return (
        <div>
            <h1>Eliminar Objeto</h1>
            <button onClick={handleDelete}>Eliminar Objeto</button>
            {response && <p>{response}</p>}
        </div>
    );
};

export default DeleteObject;
