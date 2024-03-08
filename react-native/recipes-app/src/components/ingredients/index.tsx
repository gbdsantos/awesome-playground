import { useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { router } from 'expo-router'

import { Ingredient } from '../ingredient'
import { BottomSheet } from '../bottom-sheet'

import { styles } from './styles'

export function Ingredients() {
  const [isSelected, setIsSelected] = useState<number[]>([])

  function handleToggleSelected(value: number) {

    if (isSelected.includes(value)) {
      return setIsSelected((state) => state.filter((item) => item !== value))
    }

    setIsSelected((state) => [...state, value])
    console.log(isSelected)
  }

  function handleClearSelected() {
    Alert.alert(
      'Limpar',
      'Deseja limpar tudo',
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => setIsSelected([]) }
      ]
    )
  }

  function handleSearch() {
    router.navigate("/recipes/")
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {
        Array.from({ length: 100 }).map((item, index) => (
          <Ingredient
            key={index}
            image=""
            name="Tomate"
            onPress={() => handleToggleSelected(index)}
            selected={isSelected.includes(index)}
          />
        ))
      }

      {
        isSelected.length > 0 && (
          <BottomSheet
            quantity={isSelected.length}
            onClear={handleClearSelected}
            onSearch={handleSearch}
          />
        )
      }
    </ScrollView>
  );
}
