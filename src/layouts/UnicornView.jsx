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
    <div>
      <Button
        label="Add Unicorn"
        icon="pi pi-plus"
        onClick={() => openDialog()}
      />
      <DataTable value={unicorns}>
        <Column field="name" header="Name" />
        <Column field="age" header="Age" />
        <Column field="color" header="Color" />
        <Column field="power" header="Power" />
        <Column
          body={(rowData) => (
            <>
              <Button
                label="Edit"
                icon="pi pi-pencil"
                onClick={() => openDialog(rowData)}
              />
              <Button
                label="Delete"
                icon="pi pi-trash"
                onClick={() => handleDelete(rowData._id)}
              />
            </>
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
