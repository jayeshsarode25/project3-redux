import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { asynclogincurrentuser } from './store/action/userAction';
// import { asyncloadproduct } from './store/action/productAction';

const App = () => {

  const dispatch = useDispatch();

  const { users } = useSelector(state => state.userReducer);
  // const { products } = useSelector(state => state.productReducer);
   
    useEffect(() => {
      !users && dispatch(asynclogincurrentuser());
    },[users])

    //  useEffect(() => {
    //   products.length == 0 && dispatch(asyncloadproduct());
    // },[products])


  return (
    <div className='px-[10%] text-white font-thin w-screen h-screen bg-gray-800'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App