import Link from 'next/link';

export default function MissionCard() {
  return (
    <div className="mission-card">
      <div className="mission-card-img"></div>
      <div className="mission-card-info">
        <h2 className="mission-card-title">Heading</h2>
        <p className="mission-card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link href="/">
          <span className="mission-card-more">Read More</span>
        </Link>
      </div>
    </div>
  );
}
