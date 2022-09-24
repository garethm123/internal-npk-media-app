import { useState } from "react";
import { Image, View } from "react-native";
import { AppText } from "../components/appText";
import Button from "../components/button";
import FlexGapGroup from "../components/flexGapGroup";
import LoginModal from "../components/modals/login";
import ModalWrapper from "../components/modals/modalWrapper";
import RegisterAccountModal from "../components/modals/register";
import { GlobalStyles } from "../styles/globalStyles";

type IPopoverType = "login" | "register";

export default function LoggedOutScreen() {
  const [modalToShow, setModalToShow] = useState<null | IPopoverType>(null);

  return (
    <View style={GlobalStyles.ceteredContent}>
      <View>
        <Image source={require("../assets/npkLogo.png")} />
        <AppText text='NPK Media Calendar & Events' level='h1' />
      </View>

      <FlexGapGroup
        components={[
          {
            component: (
              <Button
                btnLabel='Login'
                variant='dark'
                onClick={() => setModalToShow("login")}
              />
            ),
            id: "loginButton",
          },
          {
            component: (
              <Button
                btnLabel='Register'
                variant='dark'
                onClick={() => setModalToShow("register")}
              />
            ),
            id: "registerButton",
          },
        ]}
      />

      <ModalWrapper
        showModal={modalToShow !== null}
        closeModal={() => setModalToShow(null)}
      >
        {modalToShow === "login" ? <LoginModal /> : <RegisterAccountModal />}
      </ModalWrapper>
    </View>
  );
}
