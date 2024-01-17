import { View, useWindowDimensions } from 'react-native';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated';

import { styles } from './styles';
import { Tech } from '../Tech';
import { useEffect } from 'react';

export function Slider() {
  const dimensions = useWindowDimensions()
  const SLIDER_X = useSharedValue(0);

  const slideAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: SLIDER_X.value }],
  }));

  useEffect(() => {
    SLIDER_X.value = withRepeat(
      withTiming(-dimensions.width * 2, {
        duration: 10000,
        easing: Easing.linear
      }),
      -1
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slide, slideAnimatedStyle]}>
        <Tech source={require("../../assets/images/techs/react.png")} />
        <Tech source={require("../../assets/images/techs/js.png")} />
        <Tech source={require("../../assets/images/techs/expo.png")} />
        <Tech source={require("../../assets/images/techs/android.png")} />
        <Tech source={require("../../assets/images/techs/apple.png")} />
        <Tech source={require("../../assets/images/techs/ts.png")} />
      </Animated.View>

      <Animated.View style={[styles.slide, slideAnimatedStyle]}>
        <Tech source={require("../../assets/images/techs/react.png")} />
        <Tech source={require("../../assets/images/techs/js.png")} />
        <Tech source={require("../../assets/images/techs/expo.png")} />
        <Tech source={require("../../assets/images/techs/android.png")} />
        <Tech source={require("../../assets/images/techs/apple.png")} />
        <Tech source={require("../../assets/images/techs/ts.png")} />
      </Animated.View>
    </View>
  )
}