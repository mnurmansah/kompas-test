import React, { Suspense } from "react";
import "./App.scss";
import { Route, Routes, Outlet } from "react-router-dom";
// import Loading from './views/pages/Loading/Loading.jsx';

// User Page
  // const Home = React.lazy(() => import("./../Dashboard/Dashboard"));
  const Home = React.lazy(() => import("./../Dashboard/Dashboard"));
  
  export default function App() {
  return (
    <Suspense>
      {/* <Suspense fallback={<Loading />}></Suspense> */}
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

function Homepage() {
  return (
    <div style={{ width: "100%", overflow: 'hidden' }}>
            <Outlet />
    </div>
  );
}
