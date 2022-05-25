import AwesomeSlider from "react-awesome-slider";
import team from "../public/team";
import Image from "next/image";
import raisha from "../public/raisha.jpeg";

export default function Slider() {
	const slider = (
		<AwesomeSlider>
			{team.map(({ name, position, desc, photo }, i) => {
				return (
					<div className="slider" key={i}>
						<div className="slider__image">
							<Image
								src={raisha}
								width="300px"
								height="270px"
								className="photo__team"
								alt="photo"></Image>
						</div>
						<div className="slider__name">
							<h2>{name}</h2>
						</div>
						<div className="slider__work">
							<h3>{position}</h3>
						</div>
						<div className="slider__p">
							<p>{desc}</p>
						</div>
					</div>
				);
			})}
		</AwesomeSlider>
	);
	return slider;
}
