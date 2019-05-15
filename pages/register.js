import styled from 'styled-components';
import Register from '../components/Register';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const RegisterPage = () => (
  <Columns>
    <Register />
  </Columns>
);

export default RegisterPage;
