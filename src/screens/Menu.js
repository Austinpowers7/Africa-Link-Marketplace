import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {

} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/Colors';
import categories from '../components/Categories';
import ShelfItems from '../components/ShelfItems';
import {Ionicons} from'@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

//Creating Width Dimension for the Menu Screen
/*
Note a standalone button component was created 
located in the component folder since it was going to be a reusable component

*/

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Menu = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  //const navigation = useNavigation
  //Extra feature added for categories above the item card
  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>
              <Text 
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  maxWidth: 60,
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }} numberOfLines={1}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({ShelfItems}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailsScreen", ShelfItems)}>
        <View style={style.card}>
        <Ionicons name="heart-outline" style={{marginTop: 10, marginRight: 10, alignSelf: 'flex-end'}} size={20} color={COLORS.dark} />
          <View style={{alignItems: 'center', top: 5}}>
            <Image source={ShelfItems.image} style={{height: 80, width: 80}} />
          </View>
          <View style={{marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', gap: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 2, maxWidth: 110,}} numberOfLines={1}>{ShelfItems.name}</Text>
            <Text style={{fontSize: 18, color: COLORS.primary}}>
              ${ShelfItems.price}
            </Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {ShelfItems.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={style.addToCartBtn}>
              <Ionicons name="cart-outline" size={20} color={COLORS.white} />
              <Text style={{fontSize: 12, color: COLORS.white}}>Add to cart</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  //Safearea view added to prevent app from displaying over the status bar
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search"
          />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={ShelfItems}
        renderItem={({item}) => <Card ShelfItems={item} />}
      />
    </SafeAreaView>
  );
};

//Styles for components on the Menu Screen

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    //height: 30,
    //width: 30,
    //borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
});

export default Menu;