import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CrudDelete from "../layouts/FormDelete";

const ButtonDelete = () => {
	return(
	<Router>
		<div>
			<Link to="/DELETE">
				<button>
					Eliminar producto
				</button>
			</Link>
			<Routes>
				<Route path="/DELETE" element={<CrudDelete/>}/>
			</Routes>
		</div>
	</Router>
	);
};

export default ButtonDelete;