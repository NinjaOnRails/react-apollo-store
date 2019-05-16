import Link from 'next/link';
import { Mutation } from 'react-apollo';
import NavStyles from './styles/NavStyles';
import User from './User';
import Logout from './Logout';
import { TOGGLE_CART_MUTATION } from './Cart';

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
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {toggleCart => <button onClick={toggleCart}>My Cart</button>}
            </Mutation>
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
