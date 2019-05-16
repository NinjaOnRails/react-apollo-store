import LoginNotice from '../components/LoginNotice';
import Permissions from '../components/Permissions';

const PermissionsPage = props => (
  <div>
    <LoginNotice>
      <Permissions />
    </LoginNotice>
  </div>
);

export default PermissionsPage;
