import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons'

const MainHomeSelectedMeal = ({ navigation }) => {
  return (
    // ========================header=======================
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 25 : 20 }}>
      <ScrollView>
        <View
          style={{ paddingHorizontal: 20, paddingRight: 20, paddingBottom: 72 }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 15,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                name='menuunfold'
                size={24}
                color='#3A3A3A'
                backgroundColor='#ddd'
                style={{
                  borderRadius: 13,
                  padding: 6,
                }}
              />
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3,
                  }}
                >
                  <Text style={{ color: '#8C9099', fontSize: 16 }}>
                    Deliver to
                  </Text>
                  <Entypo name='chevron-down' size={15} color='#8C9099' />
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 16, fontWeight: 400, color: '#3A3A3A' }}>
                Choose Location
              </Text>
            </View>

            <TouchableOpacity>
              <Ionicons
                name='notifications-outline'
                size={26}
                color='#A7A7A7'
                style={{
                  borderColor: '#A7A7A7',
                  borderWidth: 1,
                  borderRadius: 13,
                  padding: 3,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* // ===============body=================== */}

          <View style={{ paddingTop: 30 }}>
            <View style={{ gap: 3 }}>
              <View style={{ flexDirection: 'row', gap: 6 }}>
                <Text
                  style={{
                    fontSize: 35,
                    color: '#3A3A3A',
                    fontWeight: 700,
                  }}
                >
                  Good Morning
                </Text>
                <Text
                  style={{ fontSize: 35, color: '#FF8E09', fontWeight: 900 }}
                >
                  Abideen!
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 23,
                  color: '#3A3A3A',
                  fontWeight: 400,
                }}
              >
                Here is your today’s meal.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 11, paddingTop: 35.33 }}>
            <View
              style={{
                backgroundColor: '#35B369',
                height: 5,
                width: 100,
                borderRadius: 5,
              }}
            ></View>

            <View
              style={{
                backgroundColor: '#35B369',
                height: 5,
                width: 100,
                borderRadius: 5,
              }}
            ></View>

            <View
              style={{
                backgroundColor: '#CFCFCF',
                height: 5,
                width: 100,
                borderRadius: 5,
              }}
            ></View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingTop: 35,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              paddingBottom: 25.73,
            }}
          >
            <View
              style={{
                gap: 3,
              }}
            >
              <Text style={{ color: '#FF8E09', fontWeight: 600, fontSize: 18 }}>
                Preparing...
              </Text>

              <Text style={{ color: '#141414', fontWeight: 500, fontSize: 18 }}>
                Your meal for delivery
              </Text>

              <Text style={{ color: '#141414', fontWeight: 400, fontSize: 15 }}>
                you are unable to change today's meal.
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                gap: 3,
                borderColor: '#FF8E09',
                borderWidth: 1,
                borderRadius: 5,
                padding: 8,
              }}
            >
              <Text style={{ color: '#3A3A3A', fontWeight: 600, fontSize: 15 }}>
                MON
              </Text>
              <Text style={{ color: '#3A3A3A', fontWeight: 600, fontSize: 20 }}>
                23
              </Text>
            </View>
          </View>

          <View style={{ paddingTop: 24 }}>
            <Image
              style={{ width: 320, borderRadius: 10 }}
              source={require('../imgs/Food-Image.png')}
            />

            <View style={{ paddingTop: 12 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: '#141414',
                }}
              >
                Fried Rice With Chicken Curry (Meal A)
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  fontSize: 12,
                  fontWeight: 600,
                  paddingTop: 8,
                }}
              >
                <Text style={{ color: '#FF8E09' }}>Includes:</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#141414' }}> Starter .</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ color: '#141414' }}> Main Course .</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ color: '#141414' }}> Dessert</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  paddingTop: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 5,
                    paddingHorizontal: 17,
                    paddingVertical: 8,
                    alignItems: 'center',
                  }}
                >
                  <Text>Top Rated</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 5,
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    alignItems: 'center',
                  }}
                >
                  <Text> Chef's Special</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 5,
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    alignItems: 'center',
                  }}
                >
                  <Text> Most Ordered</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View style={{ gap: 5 }}>
              <View style={{ flexDirection: 'row', paddingTop: 40, gap: 5 }}>
                <Text style={{ fontSize: 28, fontWeight: 400 }}>See Your</Text>
                <Text style={{ fontSize: 28, fontWeight: 700 }}>
                  Next Meals
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#141414',
                }}
              >
                21-27 january (05 meals)
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: 30,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <View style={{ gap: 3 }}>
                  <Text style={{ color: '#141414', fontWeight: 600 }}>SUN</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#141414',
                      fontWeight: 600,
                    }}
                  >
                    23
                  </Text>
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <View style={{ gap: 3 }}>
                  <Text style={{ color: '#141414', fontWeight: 600 }}>MON</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#141414',
                      fontWeight: 600,
                    }}
                  >
                    24
                  </Text>
                </View>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FF8E09',
                  borderRadius: 5,
                  paddingVertical: 14,
                  paddingHorizontal: 12,
                }}
              >
                <View style={{ gap: 3 }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 600,
                    }}
                  >
                    TUE
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#fff',
                      fontWeight: 600,
                    }}
                  >
                    25
                  </Text>
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <View style={{ gap: 3 }}>
                  <Text style={{ color: '#141414', fontWeight: 600 }}>WED</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#141414',
                      fontWeight: 600,
                    }}
                  >
                    26
                  </Text>
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <View style={{ gap: 3 }}>
                  <Text style={{ color: '#141414', fontWeight: 600 }}>THU</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#141414',
                      fontWeight: 600,
                    }}
                  >
                    27
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* ========== 2 different meals==============  */}

          <View style={{ paddingTop: 32 }}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: '#141414' }}>
              Choose between two different meal sets
            </Text>

            <View style={{ paddingTop: 24 }}>
              <Image
                style={{ width: 320, borderRadius: 10 }}
                source={require('../imgs/Food-Image.png')}
              />

              <View style={{ paddingTop: 12 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: '#141414',
                  }}
                >
                  Fried Rice With Chicken Curry
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    fontSize: 12,
                    fontWeight: 600,
                    paddingTop: 8,
                  }}
                >
                  <Text style={{ color: '#FF8E09' }}>Includes:</Text>
                  <TouchableOpacity>
                    <Text style={{ color: '#141414' }}> Starter .</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{ color: '#141414' }}> Main Course .</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{ color: '#141414' }}> Dessert</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, paddingTop: 10 }}>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: '#FF8E09',
                      borderRadius: 10,
                      paddingHorizontal: 12,
                      paddingVertical: 11,
                      width: 155,
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: '#FF8E09' }}>Select</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: '#FF8E09',
                      borderRadius: 10,
                      paddingHorizontal: 12,
                      paddingVertical: 11,
                      width: 155,
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: '#FF8E09' }}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={{ paddingTop: 32 }}>
              <Image
                style={{ width: 320, borderRadius: 10 }}
                source={require('../imgs/Food-Image-2.png')}
              />

              <View style={{ paddingTop: 12 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: '#141414',
                  }}
                >
                  Fried Rice With tofu & Prawn (Meal B)
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 8,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  <Text style={{ color: '#FF8E09' }}>Includes:</Text>
                  <TouchableOpacity>
                    <Text style={{ color: '#141414' }}> Starter .</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{ color: '#141414' }}> Main Course .</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{ color: '#141414' }}> Dessert</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', gap: 10, paddingTop: 10 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FF8E09',
                      borderWidth: 1,
                      borderColor: '#FF8E09',
                      borderRadius: 10,
                      paddingHorizontal: 12,
                      paddingVertical: 11,
                      width: 155,
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: '#fff' }}>Selected</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: '#FF8E09',
                      borderRadius: 10,
                      paddingHorizontal: 12,
                      paddingVertical: 11,
                      width: 155,
                      alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('MainMealDetails')}
                  >
                    <Text>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MainHomeSelectedMeal

const styles = StyleSheet.create({})
