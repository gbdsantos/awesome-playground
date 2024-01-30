import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    width: "100%",
    height: 184,
    alignItems: "center",
    backgroundColor: "#4453B2",
  },
  img: {
    height: 232,
    width: 140,
  },
  content: {
    flex: 1,
    marginTop: 72,
    padding: 32,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  product: {
    color: "#685ED9",
    fontWeight: "700",
  },
  rating: {
    marginTop: 42,
    flex: 1,
  },
})