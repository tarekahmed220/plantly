import { PlantlyButton } from '@/components/PlantlyButton';
import { PlantlyImage } from '@/components/PlantlyImage';
import { useUserStore } from '@/store/user.store';
import { theme } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="let me in" onPress={handleFinishOnboarding} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.colorWhite,
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 24,
    color: theme.colorWhite,
    textAlign: 'center',
    maxWidth: 320,
  },
});
