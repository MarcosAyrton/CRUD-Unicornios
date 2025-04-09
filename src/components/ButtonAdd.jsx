import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CrudPost from "../layouts/FormPost";

const ButtonAdd = () => {
	return(
	<Router>
		<div>
			<Link to="/POST">
				<button>
					Agregar producto
				</button>
			</Link>
			<Routes>
				<Route path="/POST" element={<CrudPost/>}/>
			</Routes>
		</div>
	</Router>
	);
};

export default ButtonAdd;