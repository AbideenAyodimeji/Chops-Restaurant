import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  SafeAreaView,
  Modal,
  Pressable,
  Alert,
} from 'react-native'
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { StatusBarStyle } from 'react-native'

const MainMealDetails = ({ navigation }) => {
  const [isBreakfastliked, setIsBreakfastLiked] = useState(false)
  const [isLunchliked, setIsLunchLiked] = useState(false)
  const [isDinnerliked, setIsDinnerLiked] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 20 : 20 }}>
      <StatusBar barStyle={StatusBarStyle} />
      <ScrollView>
        <ImageBackground
          source={require('../imgs/img7.png')}
          style={{ height: 300, width: 380 }}
        >
          <TouchableOpacity style={{ position: 'relative', top: 45, left: 20 }}>
            <Entypo
              name='chevron-left'
              size={30}
              color='#fff'
              onPress={() => {
                navigation.navigate('Home')
              }}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View
          style={{
            paddingHorizontal: 24,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#FFFFFF',
            paddingBottom: 32,
            paddingTop: 24,
          }}
        >
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontSize: 27.2,
                color: '#141414',
                fontWeight: 500,
              }}
            >
              The Healthy Virundhu Chef’s
            </Text>
            <Text
              style={{
                fontSize: 27.2,
                color: '#141414',
                fontWeight: 500,
              }}
            >
              Special Platter Meal.
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 12 }}>
            <Text style={{ fontSize: 18 }}>Top Rated Chef’s Special .</Text>
            <Text style={{ color: '#FF8E09', fontSize: 18 }}>
              {' '}
              Most Ordered
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 5, marginTop: 12 }}>
            <Text style={{ color: '#00C5FF', fontSize: 18, fontWeight: 400 }}>
              12:00 PM - 1:00 PM
            </Text>

            <Text style={{ color: '#141414', fontSize: 18, fontWeight: 400 }}>
              (Weekdays Only)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              paddingTop: 12,
              borderBottomColor: '#ddd',
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
                marginBottom: 24,
              }}
            >
              <FontAwesome name='star' size={21} color='#EAE302' />
              <FontAwesome name='star' size={21} color='#EAE302' />
              <FontAwesome name='star' size={21} color='#EAE302' />
              <FontAwesome name='star' size={21} color='#EAE302' />
              <FontAwesome name='star' size={21} color='#EAE302' />
            </View>
            <Text style={{ fontSize: 18, fontWeight: 400 }}>4.7 (104)</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 32 }}>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  backgroundColor: '#FFC47F',
                  paddingHorizontal: 17,
                  paddingVertical: 9,
                  borderRadius: 20,
                }}
              >
                Vegetarian
              </Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Text
                style={{
                  backgroundColor: '#FFC47F',
                  paddingHorizontal: 17,
                  paddingVertical: 9,
                  borderRadius: 20,
                }}
              >
                Well Packed
              </Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Text
                style={{
                  backgroundColor: '#FFC47F',
                  paddingHorizontal: 15,
                  paddingVertical: 9,
                  borderRadius: 20,
                }}
              >
                Fast & Reliable
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={{ backgroundColor: '#FFF8F1' }}>
          <View style={{ paddingHorizontal: 24 }}>
            <Text
              style={{
                color: '#FF8E09',
                fontSize: 18,
                fontWeight: 500,
                paddingTop: 24,
              }}
            >
              What Includes
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 16,
                paddingBottom: 6,
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                gap: 90,
              }}
            >
              <View
                style={{
                  paddingBottom: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image source={require('../imgs/img8.png')} />
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <View style={{ gap: 6 }}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            backgroundColor: '#FFC47F',
                            paddingHorizontal: 20,
                            paddingVertical: 3,
                            borderRadius: 20,
                          }}
                        >
                          Breakfast
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: '#3A3A3A',
                          fontWeight: 600,
                          fontSize: 16,
                        }}
                      >
                        Chappathi & Dal
                      </Text>
                      <Text
                        style={{
                          color: '#FF8E09',
                          fontWeight: 500,
                          fontSize: 15,
                        }}
                      >
                        486 Calories
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsBreakfastLiked(!isBreakfastliked)
                }}
              >
                {isBreakfastliked ? (
                  <AntDesign
                    name='heart'
                    size={24}
                    color='#FF0A38'
                    style={{ position: 'relative', bottom: 4 }}
                  />
                ) : (
                  <AntDesign
                    name='hearto'
                    size={24}
                    color='#FF0A38'
                    style={{ position: 'relative', bottom: 4 }}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 16,
                paddingBottom: 6,
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                gap: 15,
              }}
            >
              <View
                style={{
                  paddingBottom: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image source={require('../imgs/img8.png')} />
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <View style={{ gap: 6 }}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            backgroundColor: '#FFC47F',
                            paddingHorizontal: 20,
                            paddingVertical: 3,
                            textAlign: 'center',
                            borderRadius: 20,
                            width: 75,
                          }}
                        >
                          Lunch
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: '#3A3A3A',
                          fontWeight: 600,
                          fontSize: 16,
                        }}
                      >
                        Fried Rice and Chicken Brest
                      </Text>
                      <Text
                        style={{
                          color: '#FF8E09',
                          fontWeight: 500,
                          fontSize: 15,
                        }}
                      >
                        486 Calories
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsLunchLiked(!isLunchliked)
                }}
              >
                {isLunchliked ? (
                  <AntDesign
                    name='heart'
                    size={24}
                    color='#FF0A38'
                    style={{ position: 'relative', bottom: 4 }}
                  />
                ) : (
                  <AntDesign
                    name='hearto'
                    size={24}
                    color='#FF0A38'
                    style={{ position: 'relative', bottom: 4 }}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 16,
                paddingBottom: 6,
                gap: 68,
              }}
            >
              <View
                style={{
                  paddingBottom: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image source={require('../imgs/img8.png')} />
                <View>
                  <View style={{ paddingHorizontal: 15 }}>
                    <View style={{ gap: 6 }}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            backgroundColor: '#FFC47F',
                            paddingHorizontal: 20,
                            paddingVertical: 4,
                            borderRadius: 20,
                            width: 75,
                            textAlign: 'center',
                          }}
                        >
                          Dinner
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: '#3A3A3A',
                          fontWeight: 600,
                          fontSize: 16,
                        }}
                      >
                        Nava dhaniya Dosai
                      </Text>
                      <Text
                        style={{
                          color: '#FF8E09',
                          fontWeight: 500,
                          fontSize: 15,
                        }}
                      >
                        327 Calories
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsDinnerLiked(!isDinnerliked)
                }}
              >
                {isDinnerliked ? (
                  <AntDesign
                    name='heart'
                    size={24}
                    color='#FF0A38'
                    style={{ position: 'relative', bottom: 4 }}
                  />
                ) : (
                  <AntDesign
                    name='hearto'
                    size={24}
                    color='#FF0A38'
                    style={{ position: 'relative', bottom: 4 }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Subscription Option */}
          <View
            style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              paddingTop: 32,
              paddingBottom: 43,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FF8E09',
                paddingVertical: 15,
                paddingHorizontal: 30,
                borderRadius: 50,
              }}
              onPress={() => setModalVisible(true)}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  Select This Meal
                </Text>
                <Entypo
                  name='chevron-right'
                  size={20}
                  color='#fff'
                  style={{ marginTop: 3 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* *****************Modal ****************/}

          <View style={{}}>
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
            >
              <View
                style={{
                  position: 'relative',
                  top: 50,
                  backgroundColor: '#fff',
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  flex: 1,
                  paddingTop: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: '#F2F2F2',
                    height: 5,
                    width: 72,
                    position: 'relative',
                    left: '40%',
                    borderRadius: 50,
                  }}
                ></View>

                <View
                  style={{
                    paddingTop: 26,
                    // backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderBottomColor: '#F2F2F2',
                    paddingBottom: 14.5,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#141414',
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    Add Payment
                  </Text>
                </View>

                <View style={{ paddingVertical: 20 }}>
                  <View style={{ paddingHorizontal: 20 }}>
                    <View
                      style={{
                        backgroundColor: '#FFF8F1',
                        borderRadius: 10,
                        paddingVertical: 16,
                        paddingLeft: 16,
                        paddingRight: 14,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: 500,
                            fontSize: 18,
                            color: '#141414',
                          }}
                        >
                          MONTHLY
                        </Text>
                        <Image source={require('../imgs/Vector.png')} />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingTop: 5,
                        }}
                      >
                        <Text
                          style={{
                            color: '#3A3A3A',
                            fontWeight: 700,
                            fontSize: 25,
                          }}
                        >
                          Rs 1950.00/
                        </Text>
                        <Text style={{ color: '#3A3A3A', fontSize: 18 }}>
                          month
                        </Text>
                      </View>

                      <View style={{ paddingTop: 5, gap: 17 }}>
                        <Text
                          style={{
                            color: '#3A3A3A',
                            fontSize: 15,
                            fontWeight: 500,
                          }}
                        >
                          You’re saving 20%
                        </Text>

                        <Text
                          style={{
                            color: '#FF8E09',
                            fontWeight: 600,
                            fontSize: 20,
                          }}
                        >
                          View Meal Plans
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingTop: 24,
                      justifyContent: 'space-between',
                      paddingHorizontal: 20,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: '#141414',
                          fontWeight: 600,
                          fontSize: 24,
                        }}
                      >
                        Payment Method
                      </Text>

                      <Text style={{ color: '#A7A7A7', fontWeight: 400 }}>
                        These items won't be added unless you ask
                      </Text>
                    </View>

                    <AntDesign name='pluscircle' size={30} color='#FF8E09' />
                  </View>

                  <View style={{ gap: 16, paddingTop: 24 }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        borderBlockColor: '#A7A7A7',
                        paddingBottom: 20,
                        paddingHorizontal: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 16,
                        }}
                      >
                        <Image source={require('../imgs/img13.png')} />
                        <Text>UPI</Text>
                      </View>
                      <Entypo name='circle' size={24} color='#A7A7A7' />
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        borderBlockColor: '#707070',
                        alignItems: 'center',
                        paddingBottom: 20,
                        paddingHorizontal: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 16,
                        }}
                      >
                        <Image source={require('../imgs/img15.png')} />
                        <Text>Visa</Text>
                      </View>
                      <Entypo name='circle' size={24} color='#A7A7A7' />
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        borderBlockColor: '#707070',
                        alignItems: 'center',
                        paddingBottom: 20,
                        paddingHorizontal: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 16,
                        }}
                      >
                        <Image source={require('../imgs/img14.png')} />
                        <Text>Master Card</Text>
                      </View>
                      <Entypo name='circle' size={24} color='#A7A7A7' />
                    </View>
                  </View>
                </View>

                {/* <View style={{}}>
                  <Pressable
                    style={{}}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={{}}>Hide Modal</Text>
                  </Pressable>
                </View> */}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: 500, color: '#141414' }}
                >
                  Total
                </Text>
                <Text
                  style={{ fontSize: 28, fontWeight: 700, color: '#141414' }}
                >
                  Rs 1950.00
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: '#fff',
                  paddingTop: 32,
                  paddingBottom: 43,
                  paddingHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FF8E09',
                    paddingVertical: 15,
                    paddingHorizontal: 30,
                    borderRadius: 50,
                  }}
                  onPress={() => navigation.navigate('MyProfile')}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 600,
                      }}
                    >
                      Make Payment
                    </Text>
                    <Entypo
                      name='chevron-right'
                      size={20}
                      color='#fff'
                      style={{ marginTop: 3 }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default MainMealDetails
