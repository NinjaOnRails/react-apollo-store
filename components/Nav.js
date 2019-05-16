import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Logout from './Logout';

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/buy">
          <a>Buy</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>My Orders</a>
            </Link>
            <Link href="/me">
              <a>My Account</a>
            </Link>
            <Logout />
          </>
        )}
        {!me && (
          <Link href="/register">
            <a>Log In/Register</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
