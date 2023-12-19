import { StyleSheet, Text, TextInput, View, KeyboardTypeOptions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HStack } from 'react-native-flex-layout';
import { useState } from 'react';

type InputType = {
  onChangeText(text: any): void;
  value: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  disabled?: boolean;
};

const Input: React.FC<InputType> = (props) => {
  const [sec, setSec] = useState(props.secureTextEntry);
  return (
    <View>
      {props.label && (
        <Text style={styles.label}>
          {props.label} {props.required && <Text style={styles.asteristic}>*</Text>}
        </Text>
      )}

      <HStack style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize={props.autoCapitalize ?? 'none'}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          value={props.value}
          editable={!props.disabled}
          keyboardType={props.keyboardType ?? 'default'}
          secureTextEntry={sec}
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.eyeButton}
            onPress={() => {
              setSec(!sec);
            }}
          >
            <Ionicons name={sec ? 'eye' : 'eye-off'} size={24} color='#4d4d4d' />
          </TouchableOpacity>
        )}
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#212529',
    fontSize: 14,
    marginBottom: 6,
    lineHeight: 21,
  },
  asteristic: {
    fontSize: 14,
    color: '#E03131',
  },
  inputContainer: {
    borderColor: '#CED4DA',
    borderWidth: 1,
    height: 52,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  input: {
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  eyeButton: {
    width: 48,
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Input };
