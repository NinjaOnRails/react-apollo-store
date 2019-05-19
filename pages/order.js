import LoginNotice from '../components/LoginNotice';
import Order from '../components/Order';

const OrderPage = props => (
  <div>
    <LoginNotice>
      <Order id={props.query.id} />
    </LoginNotice>
  </div>
);

export default OrderPage;
