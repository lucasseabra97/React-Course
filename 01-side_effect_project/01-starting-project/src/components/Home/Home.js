import React ,{useContext} from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth.context';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const authCxt = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCxt.onLogOut}>Logout</Button>
    </Card>
  );
};

export default Home;
