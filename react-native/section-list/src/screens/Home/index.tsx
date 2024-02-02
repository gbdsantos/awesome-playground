import { useState } from 'react';
import {
  FlatList,
  SectionList,
  Text,
  View
} from 'react-native';

import { Category } from '../../components/Category';
import { Product } from '../../components/Product';

import { styles } from './styles';

import { CATEGORIES, PRODUCTS } from '../../utils/DATA';

export function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          gap: 12,
          paddingHorizontal: 32
        }}
        data={CATEGORIES}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Category
            title={item}
            isSelected={item === category}
            onPress={() => setCategory(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      />

      <SectionList
        contentContainerStyle={styles.sectionContainer}
        keyExtractor={(item) => item}
        sections={PRODUCTS}
        stickySectionHeadersEnabled={false}
        renderItem={() => <Product />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>
            {title}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
