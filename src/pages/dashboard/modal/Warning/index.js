import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader
} from "@chakra-ui/react";
import { CustomButton } from "components/Button";
import { TextWrapper, ApprovalButtonWrapper, ModalDivider } from "./styles";

const ModalWrapper = ({ onClose, isOpen, deleteFn }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader style={{ fontSize: "2rem" }}>Delete</ModalHeader>
        <ModalCloseButton />
        <ModalDivider />
        <ModalBody mb={5} mt={5} px={10} py={10}>
          <TextWrapper>
            Are you sure you want to Delete this User?
            <ApprovalButtonWrapper>
              <CustomButton
                onClick={onClose}
                variant="darkGrey"
                message="Cancel"
                className="left__btn"
              />

              <CustomButton onClick={deleteFn} variant="danger" message="Delete" />
            </ApprovalButtonWrapper>
          </TextWrapper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModalWrapper;
