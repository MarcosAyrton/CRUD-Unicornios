import { useState, useEffect } from "react";
import UnicornView from "./UnicornView";

const API_URL = "/api/unicorns";

function UnicornContainer() {
  const [unicorns, setUnicorns] = useState([]);

  useEffect(() => {
    fetchUnicorns();
  }, []);

  const fetchUnicorns = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUnicorns(data);
    } catch (error) {
      console.error("Error fetching unicorns:", error);
    }
  };

  const createUnicorn = async (unicorn) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(unicorn),
      });
      if (!response.ok) {
        throw new Error(`Error creating unicorn: ${response.statusText}`);
      }
      fetchUnicorns();
    } catch (error) {
      console.error("Error creating unicorn:", error);
    }
  };

  const updateUnicorn = async (id, updatedUnicorn) => {
    try {
      const { _id, ...unicornData } = updatedUnicorn;

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(unicornData),
      });

      if (!response.ok) {
        throw new Error(`Error updating unicorn: ${response.statusText}`);
      }

      fetchUnicorns();
    } catch (error) {
      console.error("Error updating unicorn:", error);
    }
  };

  const deleteUnicorn = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) fetchUnicorns();
    } catch (error) {
      console.error("Error deleting unicorn:", error);
    }
  };

  return (
    <UnicornView
      unicorns={unicorns}
      onCreate={createUnicorn}
      onUpdate={updateUnicorn}
      onDelete={deleteUnicorn}
    />
  );
}

export default UnicornContainer;
