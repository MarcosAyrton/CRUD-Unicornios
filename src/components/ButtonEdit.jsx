import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CrudPut from "../layouts/FormPut";

const ButtonPut = () => {
	return(
	<Router>
		<div>
			<Link to="/PUT">
				<button>
					Editar producto
				</button>
			</Link>
			<Routes>
				<Route path="/PUT" element={<CrudPut/>}/>
			</Routes>
		</div>
	</Router>
	);
};

export default ButtonPut;