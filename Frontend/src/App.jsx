import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { asynclogincurrentuser } from './store/action/userAction';

const App = () => {

  const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(asynclogincurrentuser());
    },[])

  return (
    <div>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App