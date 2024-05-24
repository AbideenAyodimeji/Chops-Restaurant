import React, { useState } from 'react'
import { Text, View, StyleSheet, styles, TouchableOpacity } from 'react-native'
import {
  Entypo,
  MaterialCommunityIcons,
  EvilIcons,
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddingPaymentMethod = ({ navigation }) => {
  return (
    <SafeAreaView>
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
                navigation.navigate('PaymentMethod')
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingTop: 24,
            paddingHorizontal: 38,
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Text style={{ color: '#010F07', fontSize: 28, fontWeight: 600 }}>
            Add payment methods
          </Text>

          <Text
            style={{
              textAlign: 'center',
              color: '#868686',
              fontSize: 18,
              fontWeight: 400,
              paddingHorizontal: 20,
            }}
          >
            This card will only be charged when you place an order.
          </Text>
        </View>

        <View style={{ paddingTop: 52, paddingHorizontal: 24 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#8686861A',
              gap: 16,
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
          >
            <MaterialCommunityIcons name='id-card' size={24} color='#CFCFCF' />
            <Text style={{ color: '#CFCFCF' }}>4343 4343 4343 4343</Text>
          </View>

          <View style={{ paddingTop: 16, flexDirection: 'row', gap: 16 }}>
            <View
              style={{
                gap: 16,
                backgroundColor: '#8686861A',
                paddingLeft: 16,
                paddingRight: 100,
                paddingVertical: 15,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: '#CFCFCF' }}>MM/YY</Text>
            </View>

            <View
              style={{
                gap: 16,
                backgroundColor: '#8686861A',
                paddingLeft: 16,
                paddingRight: 100,
                paddingHorizontal: 24,
                paddingVertical: 15,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: '#CFCFCF' }}>CVV</Text>
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 147, paddingHorizontal: 25, gap: 16 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2994A',
              borderRadius: 10,
              paddingBottom: 16,
              paddingTop: 16,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>
              Add Card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingBottom: 16,
              paddingTop: 16,
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#CFCFCF',
            }}
          >
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              <EvilIcons name='credit-card' size={24} color='black' />
              <Text
                style={{
                  paddingTop: 3,
                  fontSize: 16,
                  color: '#3A3A3A',
                  fontWeight: 500,
                }}
              >
                Scan Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AddingPaymentMethod
