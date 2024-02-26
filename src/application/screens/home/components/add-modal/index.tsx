import React, { forwardRef } from "react";
import { Modalize } from "react-native-modalize";
import { images } from "@/application/assets/images";
import { Container, Image, ImageButton } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BottomModal } from "@/application/components/bottom-modal";

interface AddModalProps {
  close: () => void;
}

export const AddModal = forwardRef<Modalize, AddModalProps>(
  ({ close }, ref) => {
    const { navigate } = useNavigation();

    return (
      <BottomModal ref={ref} title="Adicionar" close={close}>
        <Container>
          <ImageButton
            onPress={() => {
              navigate("HandleFarm");
              close();
            }}
          >
            <Image source={images.farm} />
          </ImageButton>

          <ImageButton
            onPress={() => {
              navigate("HandleChecklist");
              close();
            }}
          >
            <Image source={images.checklist} />
          </ImageButton>
        </Container>
      </BottomModal>
    );
  }
);
