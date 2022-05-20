import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import {publicRoutes} from './components/PublicRoutes/publicRoutes'
function App() {
  return (
    <div className=" max-w-7xl mx-auto">
     <Navbar>
       <Routes>
         {
           publicRoutes.map(({Component,path})=><Route path={path} element={<Component/>}/>)
         }
       </Routes>
     </Navbar>
    </div>
  );
}

export default App;
