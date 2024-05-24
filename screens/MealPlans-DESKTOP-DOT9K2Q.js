import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import { Entypo, AntDesign } from '@expo/vector-icons'

const MealPlans = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 30 : 20 }}>
      <View
        style={{
          paddingHorizontal: 22,
        }}
      >
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
          <Text style={styles.headerText}>Available Plans</Text>
          <View></View>
        </View>

        <View style={styles.plan}>
          <View style={styles.rightPlan}>
            <Text style={styles.normalPlan}>Choose the right</Text>
            <Text style={styles.boldPlan}> Plzan</Text>
          </View>
          <Text style={styles.planText}>
            Choose a plan and set your meal accordingly
          </Text>
        </View>

        {/* ***************  weekly plan  ************** */}

        <View style={{ paddingTop: 32, gap: 52 }}>
          <View style={{ gap: 32 }}>
            <View style={styles.weeklyPlan}>
              <View style={styles.weeklyFlexRow}>
                <Text style={styles.weeklyMonthly}>Weekly Plan</Text>
                <Image source={require('../imgs/Vector.png')} />
              </View>

              <Text style={styles.weeklyFlexCol}>21-27 January (05 meals)</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  alignItems: 'flex-end',
                }}
              >
                <TouchableOpacity
                  style={styles.weeklyBtn}
                  onPress={() => navigation.navigate('SetMealPlan')}
                >
                  <Text style={{ color: '#fff', fontSize: 12, marginRight: 6 }}>
                    Meal Plan
                  </Text>
                  <AntDesign name='arrowright' size={10} color='#fff' />
                </TouchableOpacity>

                <View style={styles.weeklyPrice}>
                  <Text style={styles.perWeek}>per week</Text>
                  <Text style={styles.perWeekPrice}>600 Rs</Text>
                </View>
              </View>
            </View>

            {/* ******************monthly plan********** */}
            <View style={styles.monthlyPlan}>
              <View style={styles.monthlyFlexRow}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 3,
                  }}
                >
                  <Text style={styles.weeklyMonthly}>Monthly Plan</Text>
                  <Text
                    style={{
                      color: '#FF8E09',
                      fontSize: 18,
                      fontWeight: '600',
                    }}
                  >
                    (Save 15%)
                  </Text>
                </View>

                <Image source={require('../imgs/Vector2.png')} />
              </View>

              <Text style={styles.monthlyFlexCol}>
                01-31 January (21 meals)
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  paddingBottom: 15,
                }}
              >
                <TouchableOpacity style={styles.monthlyBtn}>
                  <Text style={{ color: '#fff', fontSize: 12, marginRight: 6 }}>
                    Meal Plan
                  </Text>
                  <AntDesign name='arrowright' size={10} color='#fff' />
                </TouchableOpacity>

                <View style={styles.monthlyPrice}>
                  <Text style={styles.perMonth}>per month</Text>
                  <Text style={styles.perMonthPrice}>1950 Rs</Text>
                  <Text style={styles.linedText}>2300BDT</Text>
                </View>
              </View>
            </View>
          </View>

          {/* *********subscription */}

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FF8E09',
              paddingVertical: 18,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 600 }}>
              Set your meal plan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // *****************header********************************
  header: {
    flexDirection: 'row',
    gap: 60,
    paddingTop: 10,
  },

  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },

  plan: {
    paddingTop: 20,
  },

  rightPlan: {
    flexDirection: 'row',
  },

  boldPlan: {
    fontWeight: '700',
    fontSize: 25,
  },
  normalPlan: {
    fontSize: 25,
  },
  planText: {
    marginTop: 5,
    fontSize: 17.5,
    color: '#141414',
  },

  // ********weekly plan

  weeklyPlan: {
    height: 'auto',
    width: 318,
    borderWidth: 1,
    borderColor: '#FF8E09',
    backgroundColor: '#F2F8F3',
    borderRadius: 10,
  },

  weeklyFlexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15.86,
    paddingTop: 15,
  },

  weeklyFlexCol: {
    marginHorizontal: 15.86,
    marginTop: 5,
  },

  weeklyBtn: {
    flexDirection: 'row',
    marginTop: 45,
    marginHorizontal: 15.86,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    maxWidth: 100,
  },

  weeklyPrice: {
    paddingTop: 45,
  },

  perWeek: {
    fontSize: 12,
    marginHorizontal: 15.86,
    textAlign: 'right',
  },

  perWeekPrice: {
    fontSize: 20,
    color: '#FF8E09',
    fontWeight: '800',
    marginHorizontal: 15.86,
    marginTop: 3,
  },

  weeklyMonthly: {
    fontSize: 20,
    fontWeight: '700',
  },

  // *********Monthly plan **********

  monthlyPlan: {
    height: 'auto',
    width: 318,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F2F8F3',
    borderColor: '#A7A7A7',
  },

  monthlyFlexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15.86,
    paddingTop: 15,
  },

  monthlyFlexCol: {
    marginHorizontal: 15.86,
    marginTop: 5,
  },

  monthlyBtn: {
    flexDirection: 'row',
    marginHorizontal: 15.86,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 13,
    maxWidth: 100,
  },

  linedText: {
    marginHorizontal: 15.86,
    textAlign: 'right',
    textDecorationLine: 'line-through',
    color: '#A7A7A7',
  },

  monthlyPrice: {
    paddingTop: 45,
  },

  perMonth: {
    fontSize: 12,
    marginHorizontal: 15.86,
    textAlign: 'right',
  },

  perMonthPrice: {
    fontSize: 20,
    color: '#FF8E09',
    fontWeight: '800',
    marginHorizontal: 15.86,
  },
})

export default MealPlans
