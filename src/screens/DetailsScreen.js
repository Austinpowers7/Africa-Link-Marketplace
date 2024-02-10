import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/Colors';
import { SecondaryButton, SubscribeButton } from '../components/Button';
import Collapsible from 'react-native-collapsible'

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleExpand=()=>{
    setCollapsed(!collapsed)
  }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: 'black', maxWidth: 300, }} numberOfLines={1}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}numberOfLines={4}>
            Rare eat Puff Puff Mix can be made into a deep-fried dough.
            They are made from yeast dough, shaped into balls and deep-fried 
            until golden brown. It has a doughnut-like texture but slightly 
            opaque.
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              borderBottomWidth: 0.3,
              borderTopWidth: 0.3,
            }}
            onPress={toggleExpand}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 5, marginBottom: 5,}}>Ingredients</Text>

            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View
                style={{
                  marginTop: 30,
                }}>
                  <Text stylez={{fontSize: 12, color: 'black'}}>They are made from yeast dough</Text>

              </View>
            </Collapsible>
            <TouchableOpacity
            style={{
              marginTop: 5,
              borderBottomWidth: 0.3,
            }}
            onPress={toggleExpand}>
              <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', marginTop: 5, marginBottom: 5,}}>Nutritional Information</Text>

            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View
                style={{
                  marginTop: 30,
                }}>
                  <Text stylez={{fontSize: 12, color: 'black'}}>They are made from yeast dough</Text>

              </View>
            </Collapsible>
            <TouchableOpacity
            style={{
              marginTop: 5,
              borderBottomWidth: 0.3,
            }}
            onPress={toggleExpand}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 5, marginBottom: 5,}}>How to Prepare</Text>

            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View
                style={{
                  marginTop: 30,
                }}>
                  <Text stylez={{fontSize: 12, color: 'black'}}>They are made from yeast dough</Text>

              </View>
            </Collapsible>
            <TouchableOpacity
            style={{
              marginTop: 5,
              borderBottomWidth: 0.3,
            }}
            onPress={toggleExpand}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 5, marginBottom: 5,}}>Dietary Information</Text>

            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View
                style={{
                  marginTop: 30,
                }}>
                  <Text stylez={{fontSize: 12, color: 'black'}}>They are made from yeast dough</Text>

              </View>
            </Collapsible>
            <TouchableOpacity
            style={{
              marginTop: 5,
              borderBottomWidth: 0.3,
            }}
            onPress={toggleExpand}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 5, marginBottom: 5,}}>Storage Information</Text>

            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View
                style={{
                  marginTop: 30,
                }}>
                  <Text stylez={{fontSize: 12, color: 'black'}}>They are made from yeast dough</Text>

              </View>
            </Collapsible>

            <TouchableOpacity
            style={{
              marginTop: 5,
              borderBottomWidth: 0.3,
            }}
            onPress={toggleExpand}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 5, marginBottom: 5,}}>Extra</Text>

            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View
                style={{
                  marginTop: 30,
                }}>
                  <Text stylez={{fontSize: 12, color: COLORS.grey}}>They are made from yeast dough</Text>

              </View>
            </Collapsible>
          <View style={{marginTop: 40, marginBottom: 15}}>
            <SecondaryButton title="Add To Cart" />
          </View>
          <View style={{marginTop: 5, marginBottom: 40}}>
            <SubscribeButton title="Subscribe to a Plan" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 15,
    color: 'black',
  },
});

export default DetailsScreen;