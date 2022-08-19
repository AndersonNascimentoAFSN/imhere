import { Text, View } from "react-native";
import { ButtonNegative } from "../ButtonNegative";
import { styles } from "./styles";

export function Participant() {
  function handleParticipantsRemove() {
    console.log("Participante removido!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Anderson Nascimento</Text>

      <ButtonNegative title="-" removeParticipant={handleParticipantsRemove} />
    </View>
  );
}
