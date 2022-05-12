import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function About() {
	return (
		<div className="about__main">
			<Navbar />
			<div className="about__main-photo">
				<h1 className="about__main-heading">About us</h1>
			</div>
			<div className="about__main-note">
				<div className="about__main-note-box">
					<h1 className="about__main-note-heading">Presidents note</h1>
					<p className="about__main-note-p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad
						expedita nesciunt eligendi, dignissimos voluptatibus deleniti amet
						cumque omnis nihil illum eum voluptatum aperiam, vero excepturi et
						optio, ratione accusamus itaque harum delectus vel necessitatibus
						consequatur? Odit enim neque praesentium? Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Dicta ad expedita nesciunt eligendi,
						dignissimos voluptatibus deleniti amet cumque omnis nihil illum eum
						voluptatum aperiam, vero excepturi et optio, ratione accusamus itaqu
					</p>
				</div>
			</div>
			<div className="about__main-team">
			
			</div>
			<Footer />
		</div>
	);
}
