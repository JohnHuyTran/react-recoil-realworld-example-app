import { Link } from 'react-router-dom';

export default function StartUpForm() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row',
        marginTop: '30px',
        marginLeft: '20px',
        marginRight: '20px',
      }}
    >
      {/* react router link */}
      <Link to="vertical3Frame">
        <img
          src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
          alt="Vertical"
        />
      </Link>

      <Link to="horizontal4Frame">
        <img
          src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
          alt="Horizontal"
        />
      </Link>
    </div>
  );
}
