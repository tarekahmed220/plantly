import { useUserStore } from '@/store/user.store';
import { theme } from '@/theme';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Redirect, Tabs } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

export default function Layout() {
  const { hasFinishedOnboarding } = useUserStore();
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="leaf" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href={'/new'} style={styles.headerButton} asChild>
              <Pressable hitSlop={20}>
                <AntDesign
                  name="plus-circle"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 18,
  },
});
