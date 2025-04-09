import { Fragment } from "react";

import ButtonAdd from "./components/ButtonAdd";
import ButtonPut from "./components/ButtonEdit";
import ButtonDelete from "./components/ButtonDelete";

function App() {

  return (
    <Fragment>
      <ButtonAdd/>
      <ButtonPut/>
      <ButtonDelete/>
    </Fragment>
  )
}

export default App
