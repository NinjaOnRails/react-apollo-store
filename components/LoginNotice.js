import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Register from './Register';
import Login from './Login';
import RequestReset from './RequestReset';
import { Columns } from '../pages/register';

const LoginNotice = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <p>You must Log in first</p>
            <Columns>
              <Register />
              <Login />
              <RequestReset />
            </Columns>
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default LoginNotice;
