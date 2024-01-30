import { StatusBar } from "expo-status-bar"

import { Home } from "./src/screens/Home"

import "./src/libs/unistyles"

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </>
  )
}
