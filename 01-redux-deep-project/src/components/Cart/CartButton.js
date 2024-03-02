import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
 
  const toggleCartHeader = () => {
    dispatch(uiActions.toggle())
  };

  return (
    <button className={classes.button} onClick={toggleCartHeader}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
