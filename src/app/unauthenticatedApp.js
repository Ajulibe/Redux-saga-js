import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FullPageSpinner } from "components/Spinner";
import { getUser } from "redux/action";
import { useDispatch } from "react-redux";

const Dashboard = lazy(() => import("pages/dashboard"));
const NewUser = lazy(() => import("pages/NewUser"));
const EditUser = lazy(() => import("pages/EditUser"));

const UnauthenticatedApp = () => {
  const dispatch = useDispatch();
  //fetch user List
  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Suspense fallback={<FullPageSpinner />}>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<NewUser />} path="/new-user" />
          <Route element={<EditUser />} path="/edit-user/:id" />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default UnauthenticatedApp;
