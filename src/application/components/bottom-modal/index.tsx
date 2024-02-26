import { Header, Label } from "./styles";
import React, { forwardRef } from "react";
import { Modalize, ModalizeProps } from "react-native-modalize";
import { Button } from "../button";
import { X } from "lucide-react-native";
import { useTheme } from "styled-components";

interface BottomModalProps extends ModalizeProps {
  title?: string;
  close?: () => void;
}

export const BottomModal = forwardRef<Modalize, BottomModalProps>(
  ({ title, children, close, ...rest }, ref) => {
    const theme = useTheme();

    return (
      <Modalize
        ref={ref}
        {...rest}
        adjustToContentHeight
        handlePosition="inside"
        closeOnOverlayTap={false}
        modalStyle={{
          overflow: "hidden",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: theme.colors.primary,
        }}
      >
        {title && (
          <Header>
            <Label>{title}</Label>

            <Button onPress={close}>
              <X size={20} color={theme.colors.text} />
            </Button>
          </Header>
        )}

        {children}
      </Modalize>
    );
  }
);
