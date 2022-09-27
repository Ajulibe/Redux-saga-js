import React, { useRef } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Container } from "./style";
import { CustomButton } from "components/Button";
import { useAppSelector } from "hooks/useAppSelector";
import { FullPageSpinner } from "components/Spinner";
import DeleteModal from "./modal/Warning";
import { useDisclosure, Button } from "@chakra-ui/react";
import { useToast, Box } from "@chakra-ui/react";
import EmptyState from "components/EmptyState";
import { useDispatch } from "react-redux";
import { deleteFn as deleteAction, sortUsers } from "redux/action";
import COLORS from "styles/colors";
import { orderBy } from "lodash";
import { BiSortAlt2 } from "react-icons/bi";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast({
    position: "top"
  });
  const state = useAppSelector((state) => state);
  const dispatch = useDispatch();
  const dataId = useRef();

  const deleteUser = () => {
    let dataIndex;
    const userData = state.user.find((item, index) => {
      dataIndex = index;
      return item?.id === dataId.current;
    });
    dispatch(deleteAction({ dataIndex, userData }));
    toast({
      duration: 1000,
      render: () => (
        <Box
          bgColor="green.300"
          color="white"
          p={3}
          style={{ fontSize: "16px", borderRadius: "4px", textAlign: "center" }}
        >
          User Has been Deleted
        </Box>
      )
    });
    onClose();
  };

  const openModal = (id) => {
    dataId.current = id;
    onOpen();
  };
  const sortUserName = (direction) => {
    const newState = orderBy(state.user, ["username"], [direction]);
    dispatch(sortUsers(newState));
  };

  return (
    <>
      <DeleteModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} deleteFn={deleteUser} />
      <Container>
        <header>Dashboard</header>
        <div className="table__wrapper">
          <div className="table__header">
            <span>User list</span>
            <CustomButton variant="primary" message="Add New" link to="new-user" />
          </div>

          {state?.status !== "loading" && state?.user?.length === 0 && <EmptyState />}
          {state?.status === "loading" ? (
            <div className="table__spinner-wrapper">
              <FullPageSpinner />
            </div>
          ) : (
            state?.user?.length > 0 && (
              <div className="table__overflow">
                <Table variant="simple">
                  <Thead>
                    <Tr
                      style={{
                        height: "6rem",
                        textTransform: "none",
                        background: COLORS.shadowGrey
                      }}
                    >
                      <Th isNumeric>Id</Th>
                      <Th>Name</Th>
                      <Th>
                        Username
                        <Menu>
                          <MenuButton as={Button} className="filter__btn">
                            <BiSortAlt2 className="sort__icon" />
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              onClick={() => sortUserName("asc")}
                              style={{ height: "3rem" }}
                            >
                              A - Z
                            </MenuItem>
                            <MenuItem
                              onClick={() => sortUserName("desc")}
                              style={{ height: "3rem" }}
                            >
                              Z - A
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Th>
                      <Th>Email</Th>
                      <Th>City</Th>
                      <Th>Edit</Th>
                      <Th>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {state?.user?.map((data, index) => {
                      return (
                        <Tr key={`${index}-${data?.phone}`}>
                          <Td isNumeric> {data?.id}</Td>
                          <Td>{data?.name}</Td>
                          <Td>{data?.username}</Td>
                          <Td>{data?.email}</Td>
                          <Td>{data?.address?.city}</Td>
                          <Td>
                            <CustomButton
                              variant="warning"
                              message="Edit"
                              link
                              to={`/edit-user/id=${data?.id}`}
                              state={data}
                            />
                          </Td>
                          <Td>
                            <CustomButton
                              variant="danger"
                              message="Delete"
                              onClick={() => {
                                openModal(data?.id);
                              }}
                            />
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </div>
            )
          )}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
