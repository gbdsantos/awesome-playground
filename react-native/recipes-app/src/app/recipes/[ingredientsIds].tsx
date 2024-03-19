import { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { Ingredients } from '@/components/ingredients';
import { Recipe } from '@/components/recipe';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

import { services } from '@/services';

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const params = useLocalSearchParams<{ ingredientsIds: string }>()

  const ingredientsIds = params.ingredientsIds.split(',')

  useEffect(() => {
    services.ingredients.findByIds(ingredientsIds).then(setIngredients)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" onPress={() => router.back()} size={32} />
        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <Ingredients ingredients={ingredients} />

      <FlatList
        data={["1"]}
        keyExtractor={item => item}
        renderItem={() => <Recipe recipe={{ name: "Omelete", image: "https://static.itdg.com.br/images/360-240/b7fbdbc168198caec6673ff663bcef66/322150-original.jpg", minutes: 10 }} />}
      />
    </View>
  );
}
