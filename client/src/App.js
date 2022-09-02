import { Routes, Route } from 'react-router-dom'
import { Home, Login, Profile, Homepage } from './containers'
import path from './ultis/path'

function App() {
  return (
    <div className="bg-main">
      <Routes>
        <Route path={path.HOME} element={<Home />} >
          <Route path={path.THIS} element={<Homepage />} />
          <Route path={path.PROFILE} element={<Profile />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
