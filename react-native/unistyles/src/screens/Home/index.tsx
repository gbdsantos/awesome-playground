import { Text, View, Image } from "react-native"

import { stylesheet } from "./styles"

import { Button } from "../../components/Button"
import { Rating } from "../../components/Rating"
import { useStyles } from "react-native-unistyles"

export function Home() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/clock.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Avalie o produto</Text>

        <Text style={styles.description}>
          O que você achou do produto{"\n"}
          <Text style={styles.product}>Smartwatch Amazfit Bip U Pro</Text>?
        </Text>

        <View style={styles.rating}>
          <Rating max={5} value={3} />
        </View>

        <Button title="Confirmar" />
        {/* <Button title="Confirmar" variant="outline" /> */}
      </View>
    </View>
  )
}
