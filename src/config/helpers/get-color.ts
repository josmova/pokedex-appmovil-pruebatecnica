import ImageColors from 'react-native-image-colors';

export const getColorFromImage = async (url: string): Promise<string> => {
  const fallbackColor = 'grey';

  try {
    if (!ImageColors) {
      throw new Error('ImageColors is not available');
    }

    console.log('Image URL:', url);

    const result = await ImageColors.getColors(url, {
      fallback: fallbackColor,
    });

    if (!result) {
      throw new Error('ImageColors.getColors returned null');
    }

    console.log('Colors from image:', result);

    if (result.platform === 'android') {
      return result.dominant || fallbackColor;
    } else if (result.platform === 'ios') {
      return result.background || fallbackColor;
    } else {
      // Manejo para web y cualquier otro caso
      return (result as any).background || fallbackColor;
    }
  } catch (error) {
    console.error('Error getting colors from image:', error);
    return fallbackColor; 
  }
};
