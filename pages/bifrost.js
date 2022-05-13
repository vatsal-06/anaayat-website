import Navbar from '../components/Navbar';

export default function Bifrost() {
  return (
    <div className="bifrost__main">
      <Navbar />
      <div className="bifrost__main-photo">
        <h1 className="bifrost__main-heading">About Bifröst</h1>
      </div>
      <div className="bifrost__main-note">
        <div className="bifrost__main-note-box">
          <h1 className="bifrost__main-note-heading">Presidents note</h1>
          <p className="bifrost__main-note-p">
            “My name is Arjun Chopra ,a young entrepreneur, philanthropist,
            Artist and most preeminently, a leader. I am the president and
            founder of THE HELPING HAND as well as the newly launched largest
            student organisation, BIFRÖST. We aim to sustain and build a better
            community for our future generations through various project, both
            stream specific and talent promoting, by bringing together students
            all accross the globe with the sole aim to eradicate social stigmas,
            help out those in need, and most importantly build up each and every
            students portfolio. bifröst, is a spectrum of colours,each more
            beautiful than the previous. Help us in helping the world, view the
            world through BIFRÖST.”
          </p>
        </div>
      </div>
      <div className="bifrost__main-note">
        <div className="bifrost__main-note-box">
          <h1 className="bifrost__main-note-heading">About Bifröst</h1>
          <p className="bifrost__main-note-p">
            Bifröst is a rainbow bridge that offers a spectrum of hope and
            opportunities , connecting you to your dream college . Bifröst
            consists of all the major student run organisations across India .
            It is simply like a parent organisation for all the other
            organisations which work together under Bifröst. <br></br>Bifröst as
            an organisation aims to curate a working space that provides
            students with endless opportunities to enhance their talents , build
            upon their portfolio according to their streams. It brings along
            certificates from ngo’s and a lot of exposure and projects as well.
          </p>
        </div>
      </div>
    </div>
  );
}
