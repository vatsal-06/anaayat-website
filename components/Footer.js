import React from "react";

export const Footer = () => {
	return (
		<>
			<div className="footer__main">
				<div className="footer__main-details">
					<div className="footer__main-details-heading">
						Query? Talk <br />
						to Us!
					</div>
					<div className="footer__main-details-other">
						<div className="footer__main-details-invol">
							<h1 className="involv">Get involved</h1>
							<p className="donate">Donate</p>
							<p className="work">Work with us</p>
						</div>
						<div className="connect">
							<h1 className="connect_head">Stay connected</h1>
							<p className="insta">Instagram</p>
							<p className="twit">Twitter</p>
							<p className="face">Facebook</p>
						</div>
					</div>
				</div>
				<div className="footer__main-contact">
					<form action="" className="form">
						<div className="nam">
							{" "}
							<label>Name</label>
							<input type="text" id="fname" name="fname" />
						</div>
						<div className="email">
							<label>Email</label>
							<input type="email" />
						</div>
						<div className="msg">
							<label>Message</label>
							<textarea rows="4" cols="30.5" />
						</div>
						<div className="submit">
							<button> Submit </button>
						</div>
					</form>
				</div>
			</div>
			<div className="diff-color">
				<h1 className="footer-end">© Anaayat 2022</h1>
			</div>
		</>
	);
};
