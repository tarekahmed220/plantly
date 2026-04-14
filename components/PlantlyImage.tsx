import React from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';

export const PlantlyImage = ({
  uri,
  size,
}: {
  uri?: string;
  size?: number;
}) => {
  const { width } = useWindowDimensions();
  const imageSize = size ?? Math.min(width / 1.5, 400);
  return (
    <Image
      source={uri ? { uri } : require('@/assets/plantly.png')}
      style={[
        styles.imageContainer,
        {
          width: imageSize,
          height: imageSize,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 6,
  },
});
