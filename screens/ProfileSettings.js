import { Text, View, StyleSheet, styles, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
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

const ProfileSettings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 10 : 20 }}>
      <View style={{ paddingHorizontal: 24 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <TouchableOpacity>
            <Entypo
              name='chevron-left'
              size={25}
              color='#141414'
              onPress={() => {
                navigation.navigate('MyProfile')
              }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>
            Profile Settings
          </Text>
          <View></View>
        </View>

        <View
          style={{
            paddingTop: 24,
            borderBottomWidth: 1,
            borderBottomColor: '#CFCFCF',
            paddingBottom: 12,
            gap: 8,
          }}
        >
          <Text style={{ color: '#A7A7A7', fontSize: 15, fontWeight: 400 }}>
            Full name
          </Text>

          <Text style={{ color: '#141414', fontSize: 18, fontWeight: 400 }}>
            Aakash Chella
          </Text>
        </View>

        <View
          style={{
            paddingTop: 24,
            borderBottomWidth: 1,
            borderBottomColor: '#CFCFCF',
            paddingBottom: 12,
            gap: 8,
          }}
        >
          <Text style={{ color: '#A7A7A7', fontSize: 15, fontWeight: 400 }}>
            Email address
          </Text>

          <Text style={{ color: '#141414', fontSize: 18, fontWeight: 400 }}>
            aakashganesan896@gmail.com
          </Text>
        </View>

        <View
          style={{
            paddingTop: 24,
            borderBottomWidth: 1,
            borderBottomColor: '#CFCFCF',
            paddingBottom: 12,
            gap: 8,
          }}
        >
          <Text style={{ color: '#A7A7A7', fontSize: 15, fontWeight: 400 }}>
            Phone number
          </Text>

          <Text style={{ color: '#141414', fontSize: 18, fontWeight: 400 }}>
            +91 8056146976
          </Text>
        </View>

        <View style={{ paddingTop: 232 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2994A',
              borderRadius: 10,
              paddingHorizontal: 95,
              paddingTop: 16,
              paddingBottom: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>
              Change Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({})

export default ProfileSettings
