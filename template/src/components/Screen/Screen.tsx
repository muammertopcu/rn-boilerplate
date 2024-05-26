import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './Screen.styles';

const Screen = ({children}: PropsWithChildren) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Screen;
