import {
  Text,
  TextInput,
  View,
  /* ScrollView */ FlatList,
  Alert,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { ButtonPositive } from "../../components/ButtonPositive";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    { id: uuidv4(), name: "Anderson Nascimento" },
    { id: uuidv4(), name: "Yanni Teixeira" },
    { id: uuidv4(), name: "Thyago Teixeira" },
    { id: uuidv4(), name: "Bruno Teixeira" },
    { id: uuidv4(), name: "Gabriela Souza" },
    { id: uuidv4(), name: "Maria Luiza" },
    { id: uuidv4(), name: "Celma Nascimento" },
    { id: uuidv4(), name: "Rubens Nascimento" },
  ];

  function handleParticipantAdd() {
    if (
      participants.find(
        (participant) => participant.name === "Anderson Nascimento"
      )
    ) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome!"
      );
    }
  }

  function handleParticipantRemove(id: string) {
    // const participantIndex = participants.map((participant) => participant.id).indexOf(id);
    const participantIndex = participants.findIndex(
      (participant) => participant.id === id
    );

    if (participantIndex !== -1) {
      Alert.alert(
        "Remover",
        `Deseja remover o participante ${participants[participantIndex].name}`,
        [
          {
            text: "Sim",
            onPress: () => Alert.alert("Deletado!"),
          },
          {
            text: "Não",
            style: "cancel",
          },
        ]
      );
    }
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

      {/* Não renderiza todos os items, apenas os que cabem na tela, apenas ao rolar que os demais items serão renderizados. Quando a lista for grande ou não souber exatamente a quantidade. */}
      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.participantWrapper}>
            <Participant
              key={item.id}
              name={item.name}
              onRemove={() => handleParticipantRemove(item.id)}
            />
          </View>
        )}
      />

      {/* Renderiza todos os componentes na tela. A pesar deles não estarem visíveis. Quando a lista for pequena*/}

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <View style={styles.participantWrapper}>
            <Participant
              key={participant.id}
              name={participant.name}
              onRemove={() => handleParticipantRemove(participant.id)}
            />
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}
