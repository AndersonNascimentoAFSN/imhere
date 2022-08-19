import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ButtonPositive } from "../../components/ButtonPositive";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  function handleParticipantsAdd() {
    console.log("Você clicou no botão de adicionar!");
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
        <ButtonPositive title="+" addParticipant={handleParticipantsAdd} />
      </View>

      <View style={styles.participants}>
        <Participant />
        <Participant />
      </View>
    </View>
  );
}
