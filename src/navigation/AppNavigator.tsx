import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import type { MainTabParamList, RootStackParamList } from './types';
import { HomeScreen } from '../screens/HomeScreen';
import { CoursesScreen } from '../screens/CoursesScreen';
import { DownloadsScreen } from '../screens/DownloadsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { CourseDetailsScreen } from '../screens/CourseDetailsScreen';
import { LecturePlayerScreen } from '../screens/LecturePlayerScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '700', marginBottom: 3 },
        tabBarStyle: { height: 68, paddingTop: 8, borderTopColor: colors.border, backgroundColor: colors.white },
        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>{route.name === 'Home' ? '⌂' : route.name === 'Courses' ? '▣' : route.name === 'Downloads' ? '↓' : '●'}</Text>,
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Courses" component={CoursesScreen} />
      <Tabs.Screen name="Downloads" component={DownloadsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitle: '', headerTintColor: colors.text, headerTitleStyle: { fontWeight: '800' } }}>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} options={{ title: 'Course' }} />
        <Stack.Screen name="LecturePlayer" component={LecturePlayerScreen} options={{ title: 'Lecture', headerBackTitle: 'Back' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
