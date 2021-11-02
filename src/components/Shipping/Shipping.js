import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import "./Shipping.css";
const Shipping = () => {
	const { user } = useAuth();
	const {
		register,
		// reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		const savedCart = getStoredCart();
		data.order = savedCart;

		fetch("http://localhost:5000/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert("Order processed Successfully");
					clearTheCart();
					// reset();
				}
			});
		// console.log(data);
	};
	return (
		<div className="shipping-size">
			<form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
				<input defaultValue={user.displayName} {...register("name")} />

				<input
					defaultValue={user.email}
					{...register("email", { required: true })}
				/>

				{errors.email && <span className="error">This field is required</span>}

				<input placeholder="Address" defaultValue="" {...register("Address")} />
				<input placeholder="City" defaultValue="" {...register("city")} />
				<input
					placeholder="Phone Number"
					defaultValue=""
					{...register("Phone")}
				/>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Shipping;
