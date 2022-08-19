import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 48
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 16,
    flex: 1
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    marginTop: 36,
    marginBottom: 42
  },
  participantWrapper: {
    marginBottom: 10
  },
  listEmptyText: {
    color: "#FFFF",
    fontSize: 14,
    textAlign: "center"
  }
});
