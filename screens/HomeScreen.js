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
const HomeScreen = ({ navigation }) => {
  return (
    // ========================header=======================
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 25 : 20 }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
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
                  Welcome to
                </Text>
                <Text
                  style={{ fontSize: 35, color: '#FF8E09', fontWeight: 900 }}
                >
                  Cravings
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 23,
                  color: '#3A3A3A',
                  fontWeight: 400,
                }}
              >
                Choose the right plan for you!
              </Text>
            </View>
          </View>

          {/* ============subscription=============== */}
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 72,
              gap: 16,
            }}
          >
            <View
              style={{
                height: 230,
                width: 152,
                backgroundColor: '#FFE7CB',
                borderRadius: 7,
              }}
            >
              <Image
                style={{ position: 'relative', bottom: 50, right: 7 }}
                source={require('../imgs/image-4.png')}
              />

              <View
                style={{
                  position: 'relative',
                  top: -30,
                  paddingHorizontal: 15,
                }}
              >
                <View style={{ gap: 5 }}>
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    Weekly Plan
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                    }}
                  >
                    Get your food at desk!
                  </Text>
                </View>

                <View style={{ paddingTop: 16, gap: 16 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      color: '#141414',
                      gap: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: '#FF8E09',
                      }}
                    >
                      150 RS
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 300 }}>
                      per meal
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#000',
                      borderRadius: 25,
                      paddingHorizontal: 20,
                      paddingVertical: 12,
                    }}
                    onPress={() => navigation.navigate('MealDetails')}
                  >
                    <Text style={{ color: '#fff', fontSize: 15 }}>
                      See details
                    </Text>

                    <AntDesign name='arrowright' size={12} color='#fff' />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 230,
                width: 152,
                backgroundColor: '#FFF8F1',
                borderRadius: 7,
              }}
            >
              <Image
                style={{ position: 'relative', bottom: 32, right: 25 }}
                source={require('../imgs/image-6.png')}
              />
              <Image
                style={{ position: 'relative', top: -138, left: 80 }}
                source={require('../imgs/image-5.png')}
              />

              <View
                style={{
                  position: 'relative',
                  top: -130,
                  paddingHorizontal: 15,
                }}
              >
                <View style={{ gap: 5 }}>
                  <Text style={{ fontSize: 20, fontWeight: 700 }}>
                    Monthly Plan
                  </Text>

                  <Text style={{ fontSize: 15, fontWeight: 400 }}>
                    Get your food at desk!
                  </Text>
                </View>

                <View style={{ paddingTop: 16, gap: 16 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      color: '#141414',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: '#FF8E09',
                      }}
                    >
                      120 RS
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 300 }}>
                      {' '}
                      per meal
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#000',
                      borderRadius: 25,
                      paddingHorizontal: 20,
                      paddingVertical: 12,
                    }}
                  >
                    <Text style={{ color: '#fff', fontSize: 15 }}>
                      See details
                    </Text>
                    <AntDesign name='arrowright' size={12} color='#fff' />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* ===================Monthly service=================== */}
          <View>
            <View style={{ gap: 5 }}>
              <View style={{ flexDirection: 'row', paddingTop: 40, gap: 5 }}>
                <Text style={{ fontSize: 28, fontWeight: 400 }}>Serving</Text>
                <Text style={{ fontSize: 28, fontWeight: 700 }}>
                  This Month
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#141414',
                }}
              >
                01-31 january (21 meals)
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: 25,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingBottom: 24,
                borderBottomWidth: 1,
                borderBlockColor: '#A7A7A7',
              }}
            >
              <Text style={{ color: '#3A3A3A', fontWeight: 400 }}>Week 01</Text>
              <Text style={{ color: '#3A3A3A', fontWeight: 400 }}>Week 02</Text>
              <Text
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: 5,
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  alignItems: 'center',
                }}
              >
                Week 03
              </Text>
              <Text style={{ color: '#3A3A3A' }}> Week 04</Text>
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

                <View style={{ flexDirection: 'row', gap: 10, paddingTop: 10 }}>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: '#A7A7A7',
                      borderRadius: 5,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      width: 100,
                      alignItems: 'center',
                    }}
                  >
                    <Text>Top Rated</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: '#A7A7A7',
                      borderRadius: 5,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      width: 105,
                      alignItems: 'center',
                    }}
                  >
                    <Text> Chef's Special</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: '#A7A7A7',
                      borderRadius: 5,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      width: 100,
                      alignItems: 'center',
                    }}
                  >
                    <Text> Most Ordered</Text>
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
                      borderWidth: 1,
                      borderColor: '#A7A7A7',
                      borderRadius: 5,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      width: 100,
                      alignItems: 'center',
                    }}
                  >
                    <Text>Top Rated</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: '#A7A7A7',
                      borderRadius: 5,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      width: 105,
                      alignItems: 'center',
                    }}
                  >
                    <Text> Chef's Special</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: '#A7A7A7',
                      borderRadius: 5,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      width: 100,
                      alignItems: 'center',
                    }}
                  >
                    <Text> Most Ordered</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* ************** Subscirbe********** */}

          <View style={{ paddingTop: 52, paddingBottom: 72 }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FF8E09',
                paddingVertical: 18,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                Subscribe Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
