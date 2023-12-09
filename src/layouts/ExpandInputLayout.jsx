import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

export function ExpandInputLayout({ children }) {
  return (
    <KeyboardAvoidingView behavior="position" style={{ width: "100%" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
