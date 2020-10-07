import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const fullScreenWidth = Dimensions.get('window').width * 0.9;

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>사용자 정보</Text>
        </View>
        <View style={styles.checkInOutTimeContainer}>
          <View>
            <Text>출근시각</Text>
          </View>
          <View>
            <Text>퇴근시각</Text>
          </View>
        </View>
      </View>
      <View style={styles.locationInfoContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>현재 위치 정보</Text>
        </View>
        <View style={styles.locationInfoContentsContainer}>
          <View style={styles.locationInfo}>
            <Text style={{ padding: 5 }}>위도</Text>
            <Text style={{ padding: 5 }}>경도</Text>
            <Text style={{ padding: 5 }}>주소</Text>
          </View>
          <View style={styles.checkInOutIconsContainer}>
            <View>
              <MaterialCommunityIcons
                  size = {60}
                  name = {'login'}
                  color = 'black'/>
            </View>
            <View>
              <MaterialCommunityIcons
                  size = {60}
                  name = {'logout'}
                  color = 'black'/>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.checkInSpotContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>출근 기준점</Text>
        </View>
        <View style={styles.detailInfoContainer}>
          <Text style={{ padding: 2 }}>오차</Text>
          <Text style={{ padding: 2 }}>출근 포인트</Text>
        </View>
      </View>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*<EditScreenInfo path="/screens/MainScreen.js" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'blue'
  },
  titleTextContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%'
  },
  titleText: {
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },
  userInfoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: fullScreenWidth,
    margin: 10
  },
  checkInOutTimeContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    width: '100%',
    // alignSelf: 'stretch'
  },
  locationInfoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: fullScreenWidth,
    margin: 10
  },
  locationInfoContentsContainer: {
    flex: 8,
    width: '100%',
    padding: 15
  },
  locationInfo: {

  },
  checkInSpotContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: fullScreenWidth,
    margin: 10
  },
  checkInOutIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    width: '100%'
    // alignSelf: 'stretch'
  },
  detailInfoContainer: {
    flex: 2,
    width: '100%',
    padding: 15
  }
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
