import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MainScreen from '../screens/MainScreen';
import CheckInHistoryScreen from '../screens/CheckInHistoryScreen';
import DeviceRegistrationScreen from '../screens/DeviceRegistrationScreen';
import ShowMapScreen from '../screens/ShowMapScreen';
import HelpScreen from '../screens/HelpScreen';
import { BottomTabParamList, MainParamList, CheckInHistoryParamList, DeviceRegistrationParamList, ShowMapParamList, HelpParamList } from '../types';

// const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const BottomTab = createBottomTabNavigator<any>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="메인"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Main"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="view-dashboard-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="체크인기록"
        component={CheckInHistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
        }}
      />
    <BottomTab.Screen
        name="기기등록"
        component={DeviceRegistrationNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="cellphone-iphone" color={color} />,
        }}
    />
    <BottomTab.Screen
        name="지도보기"
        component={ShowMapNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="map-marker" color={color} />,
        }}
    />
    <BottomTab.Screen
        name="도움말"
        component={HelpNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="help-circle-outline" color={color} />,
        }}
    />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <MaterialCommunityIcons size={25} style={{ marginBottom: 0 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MainStack = createStackNavigator<MainParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerTitle: '메인' }}
      />
    </MainStack.Navigator>
  );
}

const CheckInHistoryStack = createStackNavigator<CheckInHistoryParamList>();

function CheckInHistoryNavigator() {
  return (
    <CheckInHistoryStack.Navigator>
      <CheckInHistoryStack.Screen
        name="CheckInHistoryScreen"
        component={CheckInHistoryScreen}
        options={{ headerTitle: '체크인 기록' }}
      />
    </CheckInHistoryStack.Navigator>
  );
}

const DeviceRegistrationStack = createStackNavigator<DeviceRegistrationParamList>();

function DeviceRegistrationNavigator() {
    return (
        <DeviceRegistrationStack.Navigator>
            <DeviceRegistrationStack.Screen
                name="DeviceRegistrationScreen"
                component={DeviceRegistrationScreen}
                options={{ headerTitle: '기기 등록' }}
            />
        </DeviceRegistrationStack.Navigator>
    );
}

const ShowMapStack = createStackNavigator<ShowMapParamList>();

function ShowMapNavigator() {
    return (
        <ShowMapStack.Navigator>
            <ShowMapStack.Screen
                name="ShowMapScreen"
                component={ShowMapScreen}
                options={{ headerTitle: '지도 보기' }}
            />
        </ShowMapStack.Navigator>
    );
}

const HelpStack = createStackNavigator<HelpParamList>();

function HelpNavigator() {
    return (
        <HelpStack.Navigator>
            <HelpStack.Screen
                name="HelpScreen"
                component={HelpScreen}
                options={{ headerTitle: '도움말' }}
            />
        </HelpStack.Navigator>
    );
}
