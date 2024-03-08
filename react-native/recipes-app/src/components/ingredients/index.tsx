import { useState } from 'react'
import { ScrollView } from 'react-native'

import { Ingredient } from '../ingredient'

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
    </ScrollView>
  );
}
