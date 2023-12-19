import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { Flex } from 'react-native-flex-layout';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'contained' | 'outlined';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'contained',
  buttonStyle,
  textStyle,
  disabled = false,
}) => {
  const getButtonStyles = (): ViewStyle => {
    switch (variant) {
      case 'outlined':
        return {
          borderWidth: 1,
          borderColor: disabled ? '#ccc' : '#d84343',
          borderRadius: 8,
        };
      case 'contained':
        return {
          backgroundColor: disabled ? '#ccc' : '#d84343',
          borderRadius: 8,
        };

      default:
        return {
          backgroundColor: disabled ? '#ccc' : '#502a2a',
          borderRadius: 8,
        };
    }
  };

  const getTextStyles = (): TextStyle => {
    switch (variant) {
      case 'outlined':
        return {
          color: disabled ? '#000' : '#770606',
          borderRadius: 8,
        };
      case 'contained':
        return {
          color: disabled ? '#000' : '#ffffff',
          borderRadius: 8,
        };
      default:
        return {
          color: disabled ? '#000' : '#fff',
          borderRadius: 8,
        };
    }
  };

  return (
    <Flex>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[getButtonStyles(), buttonStyle]}
        disabled={disabled}
      >
        <Flex h={52} w={'100%'} bg={variant} radius={8}>
          <Flex fill center>
            <Text style={[getTextStyles(), textStyle]}>{title}</Text>
          </Flex>
        </Flex>
      </TouchableOpacity>
    </Flex>
  );
};

export default Button;
