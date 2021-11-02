import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useAuth();
	useEffect(() => {
		fetch(`http://localhost:5000/orders?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, []);
	return (
		<div>
			<ul>
				{" "}
				<h1>This order length : {orders.length} </h1>
				{orders.map((order) => (
					<li key={order._id}>{order.email}</li>
				))}
			</ul>
		</div>
	);
};

export default Orders;
