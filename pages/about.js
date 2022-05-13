import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Team } from "../components/Team";

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
						Greetings dear reader, Anaayat was started as a mission and a dream
						project of passion, our journey till here has been beautiful and
						full of amazing experiences in helping the poor, I hope to share
						this journey via this site with each and every one of you and
						motivate you to join us on our path to eradicate socio economic
						issues related to poverty
					</p>
				</div>
			</div>
			<div className="about__main-team">
				<Team />
			</div>
			<Footer />
		</div>
	);
}
