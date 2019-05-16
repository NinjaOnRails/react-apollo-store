import styled from 'styled-components';
import Register from '../components/Register';
import Login from '../components/Login';
import RequestReset from '../components/RequestReset';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const RegisterPage = () => (
  <Columns>
    <Register />
    <Login />
    <RequestReset />
  </Columns>
);

export default RegisterPage;
