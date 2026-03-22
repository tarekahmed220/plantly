import { PlantlyButton } from '@/components/PlantlyButton';
import { useUserStore } from '@/store/user.store';
import { theme } from '@/theme';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function ProfileScreen() {
  const { toggleHadOnboarding } = useUserStore();
  const router = useRouter();
  const handleBackOnboarding = () => {
    toggleHadOnboarding();
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <PlantlyButton title="Finish Onboarding" onPress={handleBackOnboarding} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorWhite,
  },
});
