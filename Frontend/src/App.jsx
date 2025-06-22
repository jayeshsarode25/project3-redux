import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { asynclogincurrentuser } from './store/action/userAction';
import { asyncloadproduct } from './store/action/productAction';

const App = () => {

  const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(asynclogincurrentuser());
      dispatch(asyncloadproduct());
    },[])

  return (
    <div className='overflow-auto px-[10%] text-white font-thin w-screen h-screen bg-gray-800'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App