import React from "react";
import { Drivecard } from "../components/Drivecard";
import Navbar from "../components/Navbar";
import Image from "next/image";
import raisha from "../public/raisha.jpeg";
import { Footer } from "../components/Footer";
import pov from "../public/pov.jpeg";
import pov2 from "../public/pov2.jpeg";
import pov3 from "../public/pov3.jpeg";
import pov4 from "../public/pov4.jpeg";
import pov5 from "../public/pov5.jpeg";
import pov6 from "../public/pov6.jpeg";

export default function Drives() {
	return (
		<div className="drives__main">
			<Navbar />
			<div className="drives__main-photo">
				<h1 className="drives__main-heading">Drives</h1>
			</div>
			<div className="drives__main-photos">
				<div className="drives__main-photos-heading">
					<h1>Gallery</h1>
				</div>
				<div className="images-drives">
					<span>
						{" "}
						<Image
							src={pov}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>{" "}
					<span>
						{" "}
						<Image
							src={pov2}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
					<span>
						{" "}
						<Image
							src={pov3}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
					<span>
						{" "}
						<Image
							src={pov4}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
					<span>
						{" "}
						<Image
							src={pov5}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
					<span>
						{" "}
						<Image
							src={pov6}
							alt="img"
							width="470px"
							height="400px"
							className="image__drive"
						/>
					</span>
				</div>
				{/* <div className="images-drives">
					<Image src={raisha} alt="img" width="470px" height="400px" />
					<Image src={raisha} alt="img" width="470px" height="400px" />
				</div> */}
				{/* <div className="images-drives">
					<Image src={raisha} alt="img" width="470px" height="400px" />
					<Image src={raisha} alt="img" width="470px" height="400px" />
				</div> */}
			</div>
			<div className="drives__main-funds">
				<div className="drives__main-funds-heading">
					<h1>Fund Raiser</h1>
				</div>
				<Drivecard />
				<Drivecard />
				<Drivecard />
			</div>
			<Footer />
		</div>
	);
}
