import { PlantlyButton } from '@/components/PlantlyButton';
import { useUserStore } from '@/store/user.store';
import { theme } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function OnboardingScreen() {
  const { toggleHadOnboarding } = useUserStore();
  const router = useRouter();
  const handleFinishOnboarding = () => {
    toggleHadOnboarding();
    router.replace('/');
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
    >
      <PlantlyButton title="let me in" onPress={handleFinishOnboarding} />
    </LinearGradient>
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
