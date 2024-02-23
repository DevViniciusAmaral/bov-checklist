import { ImageBackground } from "./styles";
import { User } from "lucide-react-native";
import { useTheme } from "styled-components";
import React, { ReactNode, useState } from "react";
import { ActivityIndicator, ImageBackgroundProps } from "react-native";

export interface ImageProps extends Omit<ImageBackgroundProps, "source"> {
  uri?: string;
  size: number;
  icon?: ReactNode;
}

export const Image = ({ uri, icon, size, children, ...rest }: ImageProps) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ImageBackground
      size={size}
      source={{ uri }}
      onLoadEnd={() => setIsLoading(false)}
      onLoadStart={() => setIsLoading(true)}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={theme.colors.primary} />
      ) : (
        !uri && <>{icon ? <>{icon}</> : <User size={size / 2} color={theme.colors.placeholder} />}</>
      )}

      {children}
    </ImageBackground>
  );
};