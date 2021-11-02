import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<div className="header">
			<img className="logo" src={logo} alt="" />
			<nav>
				<NavLink to="/shop">Shop</NavLink>
				<NavLink to="/review">Order Review </NavLink>
				<NavLink to="/inventory">Manage Inventory </NavLink>
				{user.email && <NavLink to="/orders">Orders</NavLink>}

				{user.email && (
					<strong style={{ color: "goldenrod" }}>
						{" "}
						Welcome {user.displayName} <br /> {user.email}
					</strong>
				)}
				{user.email ? (
					<strong>
						{" "}
						<button style={{ textTransform: "uppercase" }} onClick={logOut}>
							Log Out
						</button>{" "}
					</strong>
				) : (
					<NavLink to="/login">Login </NavLink>
				)}
			</nav>
		</div>
	);
};

export default Header;
