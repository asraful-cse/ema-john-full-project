import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipping from "./components/Shipping/Shipping";
import Orders from "./components/Orders/Orders";

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Shop></Shop>
						</Route>
						<Route exact path="/shop">
							<Shop></Shop>
						</Route>
						<Route exact path="/review">
							<OrderReview></OrderReview>
						</Route>
						<PrivateRoute exact path="/inventory">
							<Inventory></Inventory>
						</PrivateRoute>
						<PrivateRoute exact path="/shipping">
							<Shipping></Shipping>
						</PrivateRoute>
						<PrivateRoute path="/placeorder">
							<PlaceOrder></PlaceOrder>
						</PrivateRoute>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						<Route path="/orders">
							<Orders></Orders>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
