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
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])

  const params = useLocalSearchParams<{ ingredientsIds: string }>()

  const ingredientsIds = params.ingredientsIds.split(',')

  useEffect(() => {
    services.ingredients.findByIds(ingredientsIds).then(setIngredients)
  }, [])

  useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" onPress={() => router.back()} size={32} />
        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <Ingredients ingredients={ingredients} />

      <FlatList
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={styles.recipesContent}
        data={recipes}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>
            Nenhuma receita encontrada. Escolha outros ingredientes
          </Text>
        )}
        numColumns={2}
        renderItem={({ item }) => <Recipe recipe={item} onPress={() => router.navigate("/recipe/" + item.id)} />}
        showsVerticalScrollIndicator={false}
        style={styles.recipes}
      />
    </View>
  );
}
