import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
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
