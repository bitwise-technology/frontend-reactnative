import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ColorsApp } from 'shared/colors';

interface SocialLoginButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
  label?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ onPress, icon, label }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    marginLeft: 10,
    color: ColorsApp.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SocialLoginButton;
