import { PlantCard } from '@/components/PlantCard';
import { PlantlyButton } from '@/components/PlantlyButton';
import { usePlantStore } from '@/store/plantsStore';
import { theme } from '@/theme';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);
  return (
    <FlatList
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      keyExtractor={(item) => item.id}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <PlantlyButton
          title="Add yur first plant"
          onPress={() => router.navigate('/new')}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    flex: 1,
  },
  contentContainer: {
    padding: 12,
  },
});
