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
    <div className="flex flex-col items-center py-10">
      <Button
        className="rainbow-bg text-white font-bold py-3 px-6 rounded-xl shadow-lg transition transform active:scale-95"
        label="Add Unicorn"
        icon="pi pi-plus"
        onClick={() => openDialog()}
      />
      <DataTable className="bg-red-300" value={unicorns}>
        <Column className="p-5" field="name" header="Name" />
        <Column className="p-5" field="age" header="Age" />
        <Column className="p-5" field="color" header="Color" />
        <Column className="p-5" field="power" header="Power" />
        <Column
          body={(rowData) => (
            <div className="flex m-5">
              <Button
                className=" rainbow-bg text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 hover:!bg-yellow-400 hover:!bg-none hover:!animate-none"
                label="Edit"
                icon="pi pi-pencil"
                onClick={() => openDialog(rowData)}
              />
              <Button
                className=" ml- rainbow-bg text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 hover:!bg-red-700 hover:!bg-none hover:!animate-none"
                label="Delete"
                icon="pi pi-trash"
                onClick={() => handleDelete(rowData._id)}
              />
            </div>
          )}
        />
      </DataTable>

      <Dialog
        visible={dialogVisible}
        onHide={() => setDialogVisible(false)}
        header="Unicorn Details"
      >
        <div>
          <InputText
            placeholder="Name"
            value={currentUnicorn.name || ""}
            onChange={(e) =>
              setCurrentUnicorn({ ...currentUnicorn, name: e.target.value })
            }
          />
          <InputText
            placeholder="Age"
            value={currentUnicorn.age || ""}
            onChange={(e) =>
              setCurrentUnicorn({ ...currentUnicorn, age: e.target.value })
            }
          />
          <InputText
            placeholder="Color"
            value={currentUnicorn.color || ""}
            onChange={(e) =>
              setCurrentUnicorn({ ...currentUnicorn, color: e.target.value })
            }
          />
          <InputText
            placeholder="Power"
            value={currentUnicorn.power || ""}
            onChange={(e) =>
              setCurrentUnicorn({ ...currentUnicorn, power: e.target.value })
            }
          />
        </div>
        <Button label="Save" icon="pi pi-check" onClick={handleSave} />
      </Dialog>
    </div>
  );
}

export default UnicornView;
