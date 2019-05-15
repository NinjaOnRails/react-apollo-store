import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';

const Nav = () => (
  <NavStyles>
    <User>
      {({ data: { me } }) => {
        if (me) return <p>{me.name}</p>;
        return null;
      }}
    </User>
    <Link href="/buy">
      <a>Buy</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/register">
      <a>Register</a>
    </Link>
    <Link href="/orders">
      <a>My Orders</a>
    </Link>
    <Link href="/me">
      <a>My Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
