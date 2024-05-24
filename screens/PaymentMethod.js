import React, { useState } from 'react'
import { Text, View, StyleSheet, styles, TouchableOpacity } from 'react-native'
import { Entypo, EvilIcons, Ionicons, FontAwesome } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const PaymentMethod = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 10 : 20 }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            paddingHorizontal: 13,
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
            Payment Method
          </Text>
          <View></View>
        </View>

        <View style={{ paddingTop: 172, alignItems: 'center' }}>
          <View>
            <Ionicons name='card' size={100} color='#FF8E09' />
          </View>

          <View style={{ alignItems: 'center', paddingTop: 32, gap: 10 }}>
            <Text style={{ color: '#010F07', fontSize: 28, fontWeight: 600 }}>
              Don’t have any card
            </Text>

            <View style={{ paddingHorizontal: 37.5 }}>
              <Text style={{ color: '#868686', fontSize: 18, fontWeight: 400 }}>
                It’s seems like you don’t add any credit or debit card. You may
                easily add card.
              </Text>
            </View>
          </View>

          <View style={{ paddingTop: 52 }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 85.5,
                paddingVertical: 16,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#F2994A',
              }}
              onPress={() => navigation.navigate('AddingPaymentMethod')}
            >
              <EvilIcons name='credit-card' size={24} color='#F2994A' />
              <Text style={{ color: '#F2994A' }}>Add your Cards</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PaymentMethod
