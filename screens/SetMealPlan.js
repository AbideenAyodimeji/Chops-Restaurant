import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native'
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons'

const SetMealPlan = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [secondModalVisible, setSecondModalVisible] = useState(false)

  const handlePress = () => {
    setSecondModalVisible(!secondModalVisible)
    setModalVisible(!modalVisible)
  }

  const closeModal = () => {
    setSecondModalVisible(false)
  }

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 20 : 20 }}>
      <View></View>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 0,
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
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{ fontSize: 16, fontWeight: 400, color: '#3A3A3A' }}
                >
                  Choose Location
                </Text>
              </Pressable>
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

          <View>
            <View style={{ gap: 5 }}>
              <View style={{ flexDirection: 'row', paddingTop: 40, gap: 5 }}>
                <Text style={{ fontSize: 28, fontWeight: 400 }}>
                  Set Your Monthly
                </Text>
                <Text style={{ fontSize: 28, fontWeight: 700 }}>Meal Plan</Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  color: '#141414',
                }}
              >
                21-27 January (05 meals)
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
                borderBlockColor: '#FF8E09',
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

          <View style={{ paddingTop: 32 }}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: '#141414' }}>
              Choose between two different meal sets
            </Text>

            <View style={{ paddingTop: 24 }}>
              <View style={{ gap: 12 }}>
                <Image
                  style={{ width: 320, borderRadius: 10 }}
                  source={require('../imgs/Food-Image.png')}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: '#141414',
                  }}
                >
                  Fried Rice With Chicken Curry
                </Text>
              </View>

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

              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                  paddingTop: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 5,
                    backgroundColor: '#FF8E09',
                    paddingHorizontal: 50,
                    paddingVertical: 8,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#fff' }}>Selected</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#FF8E09',
                    borderRadius: 5,
                    paddingHorizontal: 46,
                    paddingVertical: 8,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#FF8E09' }}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View style={{ paddingTop: 32, marginleft: 30 }}>
              <View style={{ gap: 12 }}>
                <Image
                  style={{ width: 320, borderRadius: 10 }}
                  source={require('../imgs/Food-Image-2.png')}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: '#141414',
                  }}
                >
                  Bhuna Khichuri & Thai Chicken Salad
                </Text>
              </View>

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

              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                  paddingTop: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#FF8E09',
                    paddingHorizontal: 50,
                    paddingVertical: 8,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#FF8E09' }}>Selected</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#FF8E09',
                    borderRadius: 5,
                    paddingHorizontal: 46,
                    paddingVertical: 8,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#FF8E09' }}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* ************** Next Date ********** */}

          <View style={{ paddingTop: 52 }}>
            <View
              style={{
                paddingHorizontal: 50,
                paddingBottom: 24,
                alignItems: 'center',
                gap: 8,
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#D18123',
                  paddingVertical: 13,
                  paddingHorizontal: 30,
                  borderRadius: 50,
                  flexDirection: 'row',
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  Go to Next Date
                </Text>
                <Entypo
                  name='chevron-right'
                  size={20}
                  color='#fff'
                  style={{ marginTop: 3 }}
                />
              </TouchableOpacity>
              <Text style={{ color: '#3A3A3A' }}>I’ll Set Later</Text>
            </View>
          </View>

          {/* ***********************IST MODAL*********************************** */}

          <View>
            <Modal
              animationType='fade'
              transparent={true}
              visible={modalVisible}
            >
              <View
                style={{
                  position: 'relative',
                  top: 120,
                  backgroundColor: '#fff',
                  paddingTop: 16,
                  paddingHorizontal: 20,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  flex: 1,
                }}
              >
                <View
                  style={{
                    backgroundColor: '#F2F2F2',
                    height: 5,
                    width: 72,
                    position: 'relative',
                    left: '38%',
                    borderRadius: 50,
                  }}
                ></View>

                <View
                  style={{
                    paddingTop: 26,
                    backgroundColor: '#fff',
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
                    Review Address
                  </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                  <Pressable
                    style={{
                      borderColor: '#FF8E09',
                      backgroundColor: '#FFF8F1',
                      borderRadius: 50,
                      paddingHorizontal: 16,
                      paddingVertical: 12,
                      borderColor: '#FF8E09',
                      borderWidth: 1,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 16,
                      }}
                    >
                      <Ionicons name='ios-location' size={23} color='#FF8E09' />
                      <Text
                        style={{
                          color: '#1E1E1E',
                          fontWeight: 300,
                          fontSize: 15,
                        }}
                      >
                        Search new address
                      </Text>
                    </View>
                  </Pressable>
                </View>

                <View style={{ margintop: 20 }}>
                  <Image
                    style={{ width: 320, borderRadius: 20, marginTop: 20 }}
                    source={require('../imgs/img11.png')}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#eee',
                    paddingBottom: 16,
                    paddingTop: 24,
                    gap: 16,
                  }}
                >
                  <FontAwesome5
                    name='location-arrow'
                    size={20}
                    color='#FF8E09'
                  />
                  <Text>Plot no 18, Ghandi road, veli - 600023 Chennai.</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#eee',
                    paddingBottom: 16,
                    paddingTop: 24,
                    gap: 16,
                  }}
                >
                  <MaterialCommunityIcons
                    name='truck-delivery-outline'
                    size={20}
                    color='#FF8E09'
                  />
                  <Text>12:00 PM- 1:00 PM (Weekdays Only)</Text>
                </View>

                <View
                  style={{
                    paddingHorizontal: 50,
                    paddingBottom: 32,
                    alignItems: 'center',
                    paddingTop: 90,
                    gap: 8,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#D18123',
                      paddingVertical: 13,
                      paddingHorizontal: 30,
                      borderRadius: 50,
                      flexDirection: 'row',
                      gap: 4,
                    }}
                    onPress={handlePress}
                    // onPress={() => setSecondModalVisible(true)}
                    // onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Payment
                    </Text>
                    <Entypo
                      name='chevron-right'
                      size={20}
                      color='#fff'
                      style={{ marginTop: 3 }}
                    />
                  </TouchableOpacity>
                </View>

                <View>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}
                    >
                      Back to set meal plan
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          {/* ***********************2nd Modal************************ */}

          <View>
            <Modal
              animationType='slide'
              transparent={true}
              visible={secondModalVisible}
            >
              <View
                style={{
                  position: 'relative',
                  top: 160,
                  backgroundColor: '#fff',
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  flex: 1,
                }}
              >
                <View style={{}}>
                  <Image
                    style={{
                      width: 380,
                      height: 300,
                      borderTopRightRadius: 50,
                      borderTopLeftRadius: 30,
                    }}
                    source={require('../imgs/img12.png')}
                  />

                  <View
                    style={{
                      paddingHorizontal: 70,
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                      <Text
                        style={{
                          color: '#FF8E09',
                          fontSize: 35,
                          fontWeight: 800,
                        }}
                      >
                        Login
                      </Text>
                      <Text
                        style={{
                          color: '#3A3A3A',
                          fontSize: 35,
                          fontWeight: 800,
                        }}
                      >
                        to Continue
                      </Text>
                    </View>

                    <Text
                      style={{
                        textAlign: 'center',
                        lineHeight: 20,
                        color: '#3A3A3A',
                        fontSize: 18,
                        fontWeight: 400,
                      }}
                    >
                      Get your food delivered timely, on your desk!
                    </Text>
                  </View>

                  <View
                    style={{
                      paddingHorizontal: 24,
                      paddingBottom: 32,
                      paddingTop: 52,
                      gap: 16,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        backgroundColor: '#2F80ED',
                        paddingVertical: 13,
                        paddingHorizontal: 30,
                        borderRadius: 50,
                        flexDirection: 'row',
                        gap: 4,
                      }}
                      onPress={() => navigation.navigate('MainHome')}
                    >
                      <View
                        style={{
                          gap: 12,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <AntDesign name='google' size={20} color='black' />

                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: 500,
                          }}
                        >
                          Continue with Google
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        backgroundColor: '#141414',
                        paddingVertical: 13,
                        paddingHorizontal: 30,
                        borderRadius: 50,
                        flexDirection: 'row',
                        gap: 4,
                      }}
                    >
                      <View
                        style={{
                          gap: 12,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <AntDesign name='apple1' size={20} color='#fff' />

                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: 500,
                          }}
                        >
                          Continue with apple
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Pressable
                    style={{}}
                    onPress={() => setSecondModalVisible(!secondModalVisible)}
                  >
                    <Text style={{}}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default SetMealPlan
