import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import MissionCard from '../components/MissionCard';
import Navbar from '../components/Navbar';
import pov7 from '../public/pov7.jpeg';
import pov8 from '../public/pov8.jpeg';
import pov9 from '../public/pov9.jpeg';
import pov10 from '../public/pov10.jpeg';

export default function Home() {
  return (
    <div className="home__container">
      <Navbar />
      <Head>
        <title>Anaayat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home__main">
        <div className="home__landing">
          <div className="home__left-side">
            <div className="home__heading">
              Lets become the light of the obscured
            </div>
            <p className="home__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
            </p>
            <button className="home__button">Know More</button>
            <div className="home__socials">
              <Link href="/">Instagram</Link>
              <span className="socials__dot">·</span>
              <Link href="/about">YouTube</Link>
              <span className="socials__dot">·</span>
              <Link href="/contact">Twitter</Link>
            </div>
          </div>
          <div className="home__image-container">
            <Image
              className="home__image"
              src={pov7}
              alt="image"
              height="990px"
              width="900px"
            />
          </div>
        </div>
        <hr className="home__hr" />
        <div className="home__about">
          <div className="home__about-image-container">
            <Image className="home__about-image" src={pov8} alt="image" 	/>
          </div>
          <div className="home__about-info">
            <div className="home__about-title">About Us</div>
            <p className="home__about-description">
              Anaayat organisation is a student-led organisation that works
              towards social service, and the benefit of the poor and
              economically weaker sections of the society. Anaayat consists of
              over 50+ members and is working towards sustainable development
              and a conscious lifestyle. We firmly believe that once we
              acknowledge our privilege, we can make this world a better place.
              We want to be the platform and the voice, of those, who lack the
              resources to speak for themselves and sustain themselves.
            </p>
            <button className="home__about-btn">Know More</button>
          </div>
        </div>
        <hr className="home__hr" />
        <div className="home__mission">
          <div className="home__mission-title">Our Mission</div>
          <div className="home__mission-cards">
            <MissionCard image={pov8} />
            <MissionCard image={pov9} />
            <MissionCard image={pov10} />
            <MissionCard image={pov9} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
