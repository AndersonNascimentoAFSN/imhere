import { Text, View } from "react-native";
import { ButtonNegative } from "../ButtonNegative";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <ButtonNegative title="-" onRemove={onRemove} />
    </View>
  );
}
