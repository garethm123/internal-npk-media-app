import { ReactNode } from "react";
import { Modal, SafeAreaView } from "react-native";
import Button from "../button";
import { GlobalStyles } from "../../styles/globalStyles";

type IModalWrapper = {
  children: ReactNode;
  showModal: boolean;
  closeModal: () => void;
};

export default function ModalWrapper({
  children,
  showModal,
  closeModal,
}: IModalWrapper) {
  return (
    <Modal
      animationType='slide'
      transparent={false}
      style={GlobalStyles.modalWrapper}
      visible={showModal}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#96c6d9" }}>
        <Button
          btnLabel='X'
          variant='dark'
          onClick={() => closeModal()}
          extraStyles={{ alignSelf: "flex-end", marginRight: 24 }}
        />
        {children}
      </SafeAreaView>
    </Modal>
  );
}
