

import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./routers/CustomerRouters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./state/Auth/Action";
import AdminPannel from "./admin/Adminpannel";

function App() {
  const auth = useSelector((state) => state.auth); // ✅ Correct


  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        {auth.user?.role==="ROLE_ADMIN" && <Route path="/admin/*" element={<AdminPannel />} />}
      </Routes>
    </div>
  );
}

export default App;
