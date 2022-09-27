import React from "react";
import { Container } from "./style";
import { EditUserForm } from "./components/form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks/useAppSelector";

const NewUser = React.memo(() => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.user);

  return (
    <Container>
      <header>Dashboard</header>
      <div className="table__wrapper">
        <div className="table__header">
          <span>Edit User</span>
        </div>
        <EditUserForm state={state} dispatch={dispatch} navigate={navigate} data={data} />
      </div>
    </Container>
  );
});

export default NewUser;
