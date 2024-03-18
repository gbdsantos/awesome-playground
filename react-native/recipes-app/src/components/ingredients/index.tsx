import { useEffect, useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { router } from 'expo-router'

import { Ingredient } from '../ingredient'
import { BottomSheet } from '../bottom-sheet'

import { services } from '@/services'

import { styles } from './styles'

export function Ingredients() {
  const [isSelected, setIsSelected] = useState<string[]>([])
  const [ingredients, setIngredients] = useState<IngredientResponse[] >([])

  function handleToggleSelected(value: string) {

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
    router.navigate("/recipes/" + isSelected)
  }

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients)
  }, [])

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {
        ingredients.map((item) => (
          <Ingredient
            key={item.id}
            image={`${services.storage.imagePath}/${item.image}`}
            name={item.name}
            onPress={() => handleToggleSelected(item.id)}
            selected={isSelected.includes(item.id)}
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
