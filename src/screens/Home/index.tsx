import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ButtonPositive } from "../../components/ButtonPositive";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Participante adicionado!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Participante ${name} removido!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          // keyboardType="email-address"
        />
        <ButtonPositive title="+" addParticipant={handleParticipantAdd} />
      </View>

      <View style={styles.participants}>
        <Participant
          name="Anderson Nascimento"
          onRemove={() => handleParticipantRemove("Anderson Nascimento")}
        />
        <Participant
          name="Yanni Teixeira"
          onRemove={() => handleParticipantRemove("Yanni Teixeira")}
        />
      </View>
    </View>
  );
}
