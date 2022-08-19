import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IButtonProps {
  title: string;
  addParticipant: () => void
}

export function ButtonPositive({ title, addParticipant }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={addParticipant}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
