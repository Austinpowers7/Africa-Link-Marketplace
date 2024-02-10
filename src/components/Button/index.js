import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../Colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor: COLORS.primary}}>
        <Text style={{...style.title, color: COLORS.white}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SubscribeButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer2, backgroundColor: COLORS.white}}>
        <Text style={{...style.title, color: COLORS.primary, }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer2: {
    height: 60,
    borderRadius: 30,
    borderWidth: 1, 
    borderLeftColor: 'red', 
    borderRightColor: 'red', 
    borderTopColor: 'red', 
    borderBottomColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton, SubscribeButton};