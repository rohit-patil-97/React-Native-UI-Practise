import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontFamily } from './src/util/CommonStyle/CustomFont';
import { View, Image, Text, Button } from 'react-native';
import Screen1 from './src/page/Screen1';
import SigninScreen from './src/page/Screen1/signin';
import SignupScreen from './src/page/Screen1/signup';
import Signup2Screen from './src/page/Screen1/signup2';
import Signup3Screen from './src/page/Screen1/signup3';
import Signup4Screen from './src/page/Screen1/signup4';
import FeedScreen from './src/page/Screen1/feed';
import PostScreen from './src/page/Screen1/post';
import Post1Screen from './src/page/Screen1/post1';
import Post2Screen from './src/page/Screen1/post2';
import Post3Screen from './src/page/Screen1/post3';
import ShopScreen from './src/page/Screen1/shop';
import ShoppingScreen from './src/page/Screen1/shopping';
import FileScreen from './src/page/Screen1/file';
import FileInfoScreen from './src/page/Screen1/fileinfo';
import ProfileInfoScreen from './src/page/Screen1/profile';
import SettingScreen from './src/page/Screen1/setting';
import EditProfileScreen from './src/page/Screen1/editprofile';
import { Colors } from './src/util/CommonStyle/CustomColor';
import DirectChatScreen from './src/page/Screen1/directchat';
// import ChatScreen from './src/page/Screen1/chat';
import UserDetsilScreen from './src/page/Screen1/userdetail';
import NoConnectionScreen from './src/page/Screen1/noconn';
import ArticleScreen from './src/page/Screen1/article';
import SubscribeScreen from './src/page/Screen1/subscribe';
import MusicScreen from './src/page/Screen1/music';
import MusicPlayScreen from './src/page/Screen1/musicplay';
import LyricsScreen from './src/page/Screen1/lyrics';
import ElearningScreen from './src/page/Screen1/elearning';
import ElearningDetailScreen from './src/page/Screen1/elearningdetail';
import WorkGroupChatScreen from './src/page/Screen1/workgroupchat';
import WorkGroupFileScreen from './src/page/Screen1/workgroupfile';
import WorkGroupMemberScreen from './src/page/Screen1/workgroupmember';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigation from './src/page/Screen1/bottomtab';
import TopTabNavigation from './src/page/Screen1/toptab';

const Stack = createNativeStackNavigator();
const test = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}>

        <Stack.Screen
          name="Screen1"
          component={Screen1} options={{ headerShown: false }}
        />

        <Stack.Screen name="signin" component={SigninScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup3" component={Signup3Screen} options={{ headerShown: false }} />
        <Stack.Screen name="sign up" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup2" component={Signup2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="signup4" component={Signup4Screen} options={{ headerShown: false }} />
        {/* Bottom-Tab Navigation in 5 files */}
        <Stack.Screen name="feed" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="file" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="profile" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="setting" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="chat" component={TabNavigation} options={{ headerShown: false }} />

        {/* Top-Tab Navigation in 3 file */}
        <Stack.Screen name="workgroupchat" component={TopTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="workgroupfile" component={TopTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="workgroupmember" component={TopTabNavigation} options={{ headerShown: false }} />



        <Stack.Screen name="shop" component={ShopScreen} options={{ headerShown: false }} />
        <Stack.Screen name="post" component={PostScreen} options={{ headerShown: false }} />
        <Stack.Screen name="post1" component={Post1Screen} options={{ headerShown: false }} />
        <Stack.Screen name="post2" component={Post2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="post3" component={Post3Screen} options={{ headerShown: false }} />
        <Stack.Screen name="shopping" component={ShoppingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="fileinfo" component={FileInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="editprofile" component={EditProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="directchat" component={DirectChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="userdetail" component={UserDetsilScreen} options={{ headerShown: false }} />
        <Stack.Screen name="noconnection" component={NoConnectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="subscribe" component={SubscribeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="music" component={MusicScreen} options={{ headerShown: false }} />
        <Stack.Screen name="article" component={ArticleScreen} options={{ headerShown: false }} />
        <Stack.Screen name="musiclyrics" component={LyricsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="musicplay" component={MusicPlayScreen} options={{ headerShown: false }} />
        <Stack.Screen name="elearning" component={ElearningScreen} options={{ headerShown: false }} />
        <Stack.Screen name="elearningdetail" component={ElearningDetailScreen} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default test;












