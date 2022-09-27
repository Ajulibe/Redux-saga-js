import React from "react";
import { EmptyContainer } from "./style";
import { VscEmptyWindow } from "react-icons/vsc";

const index = () => {
  return (
    <EmptyContainer>
      <div className="desc">
        <VscEmptyWindow className="icon" />
        <p className="header">No Users Found</p>
        <p className="body">There are no Users Found. Please Add new Users</p>
      </div>
    </EmptyContainer>
  );
};

export default index;
