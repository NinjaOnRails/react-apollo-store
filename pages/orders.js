import LoginNotice from '../components/LoginNotice';
import OrderList from '../components/OrderList';
import Login from '../components/Login';

const Orders = props => {
  return (
    <LoginNotice>
      <OrderList />
    </LoginNotice>
  );
};

export default Orders;
