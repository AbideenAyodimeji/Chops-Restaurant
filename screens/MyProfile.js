import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from 'react-native'
import {
  Entypo,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Ionicons,
  Foundation,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

const MyProfile = ({ navigation }) => {
  const [pushNotification, setPushNotification] = useState(false)
  const [smsNotification, setSmsNotification] = useState(false)
  const [Promotion, setPromotion] = useState(false)

  const togglePushNotification = () => {
    setPushNotification(!pushNotification)
  }

  const toggleSmsNotification = () => {
    setSmsNotification(!smsNotification)
  }

  const togglePromotion = () => {
    setPromotion(!Promotion)
  }

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 30 : 20 }}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Entypo
                name='chevron-left'
                size={25}
                color='#141414'
                onPress={() => {
                  navigation.navigate('Home')
                }}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>My Profile</Text>
            <View></View>
          </View>

          {/* ******************Profile information************ */}

          <View style={styles.profileInfo}>
            {/* <TouchableOpacity></TouchableOpacity> */}
            <View style={styles.profileLeft}>
              <TouchableOpacity>
                <MaterialIcons
                  name='account-circle'
                  size={22}
                  color='#FF8E09'
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.profileUpText}>Profile Information</Text>
                <Text style={styles.profileDnText}>
                  Change your account information
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={22}
                  color='#FF8E09'
                  onPress={() => {
                    navigation.navigate('ProfileSettings')
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* ******************Change Password************ */}

          <View style={styles.profileInfo}>
            <View style={styles.profileLeft}>
              <TouchableOpacity>
                <Entypo name='lock' size={20} color='#FF8E09' />
              </TouchableOpacity>

              <View>
                <Text style={styles.profileUpText}>Change Password</Text>
                <Text style={styles.profileDnText}>Change your password</Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={22}
                  color='#FF8E09'
                  onPress={() => {
                    navigation.navigate('Home')
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* ******************Payment methods************ */}

          <View style={styles.profileInfo}>
            <View style={styles.profileLeft}>
              <TouchableOpacity>
                <MaterialIcons name='payment' size={22} color='#FF8E09' />
              </TouchableOpacity>

              <View>
                <Text style={styles.profileUpText}>Payment Methods</Text>
                <Text style={styles.profileDnText}>
                  Add your credit and debit cards
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={22}
                  color='#FF8E09'
                  onPress={() => {
                    navigation.navigate('PaymentMethod')
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* ******************Locations************ */}

          <View style={styles.profileInfo}>
            <View style={styles.profileLeft}>
              <TouchableOpacity>
                <Ionicons name='ios-location' size={23} color='#FF8E09' />
              </TouchableOpacity>

              <View>
                <Text style={styles.profileUpText}>Locations</Text>
                <Text style={styles.profileDnText}>
                  Add or remove your delivery location
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={22}
                  color='#FF8E09'
                  onPress={() => {
                    navigation.navigate('Home')
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* ******************Refer to friends************ */}

          <View style={styles.profileInfo}>
            <View style={styles.profileLeft}>
              <TouchableOpacity>
                <FontAwesome5 name='share-square' size={20} color='#FF8E09' />
              </TouchableOpacity>

              <View>
                <Text style={styles.profileUpText}>Refer to Friends</Text>
                <Text style={styles.profileDnText}>
                  Get $10 for referring friends
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={22}
                  color='#FF8E09'
                  onPress={() => {
                    navigation.navigate('Home')
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.allNotifications}>
            <Text style={styles.notification}>Notifications</Text>

            {/* ***************PUSH NOTIFICATIONS***************************** */}

            <View style={styles.profileInfo}>
              <View style={styles.profileLeft}>
                <TouchableOpacity>
                  <Ionicons name='notifications' size={22} color='#FF8E09' />
                </TouchableOpacity>

                <View>
                  <Text style={styles.profileUpText}>Push Notifications</Text>
                  <Text style={styles.profileDnText}>
                    Daily updates will be available
                  </Text>
                </View>
              </View>

              <View>
                <Switch
                  trackColor={{ false: '#767577', true: '#FF8E09' }}
                  thumbColor={pushNotification ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={togglePushNotification}
                  value={pushNotification}
                />
              </View>
            </View>

            {/* ***************SMS NOTIFICATIONS***************************** */}

            <View style={styles.profileInfo}>
              <View style={styles.profileLeft}>
                <TouchableOpacity>
                  <Ionicons name='notifications' size={22} color='#FF8E09' />
                </TouchableOpacity>

                <View>
                  <Text style={styles.profileUpText}>SMS Notifications</Text>
                  <Text style={styles.profileDnText}>
                    Activate for getting update by sms
                  </Text>
                </View>
              </View>

              <View>
                <Switch
                  trackColor={{ false: '#767577', true: '#FF8E09' }}
                  thumbColor={smsNotification ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleSmsNotification}
                  value={smsNotification}
                />
              </View>
            </View>

            {/* ***************PROMOTIONAL NOTIFICATIONS***************************** */}

            <View style={styles.profileInfo}>
              <View style={styles.profileLeft}>
                <TouchableOpacity>
                  <Ionicons name='notifications' size={22} color='#FF8E09' />
                </TouchableOpacity>

                <View>
                  <Text style={styles.profileUpText}>
                    Promotional Notifications
                  </Text>
                  <Text style={styles.profileDnText}>
                    You will get offer updates
                  </Text>
                </View>
              </View>

              <View>
                <Switch
                  trackColor={{ false: '#767577', true: '#FF8E09' }}
                  thumbColor={Promotion ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={togglePromotion}
                  value={Promotion}
                />
              </View>
            </View>
          </View>

          <View style={styles.allMore}>
            <Text style={styles.more}>MORE</Text>

            {/* ***************  Rate Us  ***************************** */}
            <View style={styles.profileInfo}>
              <View style={styles.profileLeft}>
                <TouchableOpacity>
                  <AntDesign name='star' size={22} color='#FF8E09' />
                </TouchableOpacity>

                <View>
                  <Text style={styles.profileUpText}>Rate Us</Text>
                  <Text style={styles.profileDnText}>
                    Rate us playstore, appstore
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity>
                  <Entypo
                    name='chevron-right'
                    size={22}
                    color='#FF8E09'
                    onPress={() => {
                      navigation.navigate('Home')
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* *************** FAQ ***************************** */}

            <View style={styles.profileInfo}>
              <View style={styles.profileLeft}>
                <TouchableOpacity>
                  <Foundation name='book' size={22} color='#FF8E09' />
                </TouchableOpacity>

                <View>
                  <Text style={styles.profileUpText}>FAQs</Text>
                  <Text style={styles.profileDnText}>
                    Frequently asked questions
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity>
                  <Entypo
                    name='chevron-right'
                    size={22}
                    color='#FF8E09'
                    onPress={() => {
                      navigation.navigate('Home')
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* ***************  LOGOUT  ***************************** */}

            <View style={{ marginBottom: 72 }}>
              <View style={styles.profileInfo}>
                <View style={styles.profileLeft}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name='logout'
                      size={22}
                      color='#FF8E09'
                    />
                  </TouchableOpacity>

                  <View>
                    <Text style={styles.profileUpText}>Logout</Text>
                  </View>
                </View>

                <View>
                  <TouchableOpacity>
                    <Entypo
                      name='chevron-right'
                      size={22}
                      color='#FF8E09'
                      onPress={() => {
                        navigation.navigate('Home')
                      }}
                    />
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

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },

  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },

  profileLeft: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },

  profileUpText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#141414',
  },

  profileDnText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#A7A7A7',
  },

  allNotifications: {
    marginTop: 30,
  },

  notification: {
    fontSize: 18,
    fontWeight: '500',
    color: '#A7A7A7',
    textTransform: 'uppercase',
  },

  more: {
    fontSize: 18,
    fontWeight: '600',
    color: '#A7A7A7',
  },

  allMore: {
    marginTop: 30,
  },
})

export default MyProfile
