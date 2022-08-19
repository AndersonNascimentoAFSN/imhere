import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IButtonProps {
  title: string;
  onRemove: () => void;
}

export function ButtonNegative({ title, onRemove }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onRemove}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
