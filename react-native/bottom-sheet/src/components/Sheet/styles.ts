import { Dimensions, StyleSheet } from 'react-native';

const DIMENSIONS = Dimensions.get("window")
export const SHEET_HEIGHT = 220
export const SHEET_OVER_DRAG = 20

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1F23",
    height: SHEET_HEIGHT,
    width: DIMENSIONS.width,
    // width: "100%"

    position: "absolute",
    bottom: -SHEET_OVER_DRAG * 1.3
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    margin: 24
  },
  dragIcon: {
    alignSelf: "center",
    marginTop: 16
  }
});
