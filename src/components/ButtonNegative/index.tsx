import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IButtonProps {
  title: string;
  removeParticipant: () => void,
}

export function ButtonNegative({ title, removeParticipant }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={removeParticipant}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
