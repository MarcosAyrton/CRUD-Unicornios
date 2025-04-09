import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

function UnicornView({ unicorns, onCreate, onUpdate, onDelete }) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [currentUnicorn, setCurrentUnicorn] = useState({
    name: "",
    age: "",
    color: "",
    power: "",
  });

  const openDialog = (
    unicorn = { name: "", age: "", color: "", power: "" }
  ) => {
    setCurrentUnicorn(unicorn);
    setDialogVisible(true);
  };

  const handleSave = () => {
    if (currentUnicorn._id) {
      onUpdate(currentUnicorn._id, currentUnicorn);
    } else {
      onCreate(currentUnicorn);
    }
    setDialogVisible(false);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        🦄 Unicorn CRUD
      </h1>

      <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-lg">
        <Button
          className="w-full rainbow-bg text-white font-bold py-3 px-6 rounded-xl shadow-lg transition transform active:scale-95"
          label="Add Unicorn"
          icon="pi pi-plus"
          onClick={() => openDialog()}
        />
        <DataTable
          className="bg-gray-800 text-white rounded-lg overflow-hidden"
          value={unicorns}
        >
          <Column field="name" header="Name" className="p-4" />
          <Column field="age" header="Age" className="p-4" />
          <Column field="color" header="Color" className="p-4" />
          <Column field="power" header="Power" className="p-4" />
          <Column
            body={(rowData) => (
              <div className="flex space-x-2">
                <Button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                  label="Edit"
                  icon="pi pi-pencil"
                  onClick={() => openDialog(rowData)}
                />
                <Button
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                  label="Delete"
                  icon="pi pi-trash"
                  onClick={() => handleDelete(rowData._id)}
                />
              </div>
            )}
          />
        </DataTable>
      </div>

      <Dialog
        visible={dialogVisible}
        onHide={() => setDialogVisible(false)}
        header="Unicorn Details"
        className="bg-gray-800 text-white rounded-lg"
      >
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Name
            </label>
            <InputText
              id="name"
              placeholder="Name"
              value={currentUnicorn.name || ""}
              onChange={(e) =>
                setCurrentUnicorn({ ...currentUnicorn, name: e.target.value })
              }
              className="block w-full p-2 border-2 border-green-500 rounded-md focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-white mb-2"
            >
              Age
            </label>
            <InputText
              id="age"
              placeholder="Age"
              value={currentUnicorn.age || ""}
              onChange={(e) =>
                setCurrentUnicorn({ ...currentUnicorn, age: e.target.value })
              }
              className="block w-full p-2 border-2 border-green-500 rounded-md focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium text-white mb-2"
            >
              Color
            </label>
            <InputText
              id="color"
              placeholder="Color"
              value={currentUnicorn.color || ""}
              onChange={(e) =>
                setCurrentUnicorn({ ...currentUnicorn, color: e.target.value })
              }
              className="block w-full p-2 border-2 border-green-500 rounded-md focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="power"
              className="block text-sm font-medium text-white mb-2"
            >
              Power
            </label>
            <InputText
              id="power"
              placeholder="Power"
              value={currentUnicorn.power || ""}
              onChange={(e) =>
                setCurrentUnicorn({ ...currentUnicorn, power: e.target.value })
              }
              className="block w-full p-2 border-2 border-green-500 rounded-md focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <Button
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          label="Save"
          icon="pi pi-check"
          onClick={handleSave}
        />
      </Dialog>
    </div>
  );
}

export default UnicornView;
