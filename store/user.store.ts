import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHadOnboarding: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHadOnboarding: () =>
        set((state) => ({
          hasFinishedOnboarding: !state.hasFinishedOnboarding,
        })),
    }),
    {
      name: 'plantly-user-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
