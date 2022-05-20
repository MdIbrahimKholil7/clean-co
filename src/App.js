import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import { publicRoutes } from './components/PublicRoutes/publicRoutes'
import privateRoute from './components/PrivateRoute/privateRoute'
import RequireAuth from './components/RequireAuth/RequireAuth';
function App() {
  console.log(privateRoute)
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ Component, path }, index) => <Route
              key={index}
              path={path}
              element={<Component />}
            />)
          }
          <Route element={<RequireAuth />}>
            {
              privateRoute.map(({ Component, path }, index) => <Route
                key={index}
                path={path}
                element={<Component />}
              />)
            }
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
