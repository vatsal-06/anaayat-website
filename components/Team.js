import React, { useState } from "react";
import Image from "next/image";
import raisha from "../public/raisha.jpeg";
import team from "../public/team";
import left from "../public/left.svg";
import right from "../public/right.svg";

export const Team = () => {
	const [index, setIndex] = useState(1);
	return (
		<>
			<div className="team__main-heading">
				<h1>Meet the Team</h1>
			</div>
			<div className="team__main">
				<div
					className="left"
					onClick={() => {
						if (index != 1) {
							setIndex(index - 1);
						}
						if (index === 1) {
							setIndex(5);
						}
					}}>
					<Image src={left} alt="hello" />
				</div>
				{team[index].map((value) => {
					const { name, position, desc, photo } = value;
					return (
						<>
							<div className="team__main-container">
								<div className="team__main-container-photo">
									<Image
										src={raisha}
										width="200px"
										height="170px"
										className="photo__team"
										alt="photo"></Image>
								</div>
								<div className="team__main-container-name">
									<h1>{name}</h1>
								</div>
								<div className="team__main-container-pos">
									<h2>{position}</h2>
								</div>
								<div className="team__main-container-desc">
									<p>{desc}</p>
								</div>
							</div>
						</>
					);
				})}
				<div
					className="right"
					onClick={() => {
						if (index < 5) {
							setIndex(index + 1);
						}
						if (index === 5) {
							setIndex(1);
						}
					}}>
					<Image src={right} alt="hello" />
				</div>
			</div>
		</>
	);
};
// return (
// 	<>
// 		<div className="team__main-container">
// 			<div className="team__main-container-photo">
// 				<Image
// 					src={photo}
// 					width="200px"
// 					height="170px"
// 					className="photo__team"
// 					alt="photo"></Image>
// 			</div>
// 			<div className="team__main-container-name">
// 				<h1>{name}</h1>
// 			</div>
// 			<div className="team__main-container-pos">
// 				<h2>{position}</h2>
// 			</div>
// 			<div className="team__main-container-desc">
// 				<p>{desc}</p>
// 			</div>
// 		</div>
// 	</>
// );
