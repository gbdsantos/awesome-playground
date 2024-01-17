import { Image, ImageProps } from 'react-native';

import { styles } from './styles';

type Props = ImageProps;

export function Tech({ ...rest }: Props) {
  return <Image style={styles.container} resizeMode="contain" {...rest} />
}