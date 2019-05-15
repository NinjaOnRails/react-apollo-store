import styled from 'styled-components';
import Register from '../components/Register';
import Login from '../components/Login';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const RegisterPage = () => (
  <Columns>
    <Register />
    <Login />
  </Columns>
);

export default RegisterPage;
