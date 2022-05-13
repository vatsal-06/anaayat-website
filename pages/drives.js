import React from "react";
import Navbar from "../components/Navbar";

export default function Drives() {
	return (
		<div className="drives__main">
			<Navbar />
			<div className="drives__main-photo">
				<h1 className="drives__main-heading">Drives</h1>
			</div>
			<div className="drives__main-funds">
				<div className="drives__main-funds-heading">
					<h1>Fund Raiser</h1>
				</div>
				<div className="drives__main-funds-container">
					<div className="drives__main-funds-container-heading">
						<h2>Lorem</h2>
					</div>
					<div className="drives__main-funds-container-desc">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
							minima accusamus dolore corrupti officia, aliquam doloribus
							nostrum similique eius reiciendis?
						</p>
					</div>
					<div className="end-part">
						<div className="date">Started On:</div>
						<div className="donate">Donate</div>
					</div>
				</div>
			</div>
		</div>
	);
}
