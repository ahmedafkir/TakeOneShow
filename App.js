//Import React
import React, { Component } from 'react';

//Import React Native Tools
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Text,
  I18nManager,
} from 'react-native';

//Import React Navigation Tools
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { RNRestart } from 'react-native-restart';

//Import SplashScreen Tool
import SplashScreen from 'react-native-splash-screen';

//Import Pages
import HomePage from './pages/HomePage';
import Post from './pages/Post';
import IdeaOfProgram from './pages/IdeaOfProgram';
import Judges from './pages/Judges';
import Judge from './pages/Judge';
import Coaches from './pages/Coaches';
import Coache from './pages/Coache';
import Participants from './pages/Participants';
import Participant from './pages/Participant';
import Team from './pages/Team';
import TeamProfil from './pages/TeamProfil';

//Drawer Top Button
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Drawer Button Image */}
          <Image
            source={require('./images/drawer.png')}
            style={{ width: 35, height: 35, marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Drawer Menu Item
class Menuitem extends Component {
  render() {
    return (
      <View style={{ marginBottom: 7, marginTop: 7 }}>
        <Text
          style={{
            fontFamily: 'Cairo-Bold',
            writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
            fontSize: 14,
            color: '#FFF',
          }}>
          {this.props.Arabic}
        </Text>
        <Text
          style={{
            fontSize: 14,
            writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
            color: '#FFF',
          }}>
          {this.props.Amazigh}
        </Text>
      </View>
    );
  }
}

//Drawer Menu Content
class CustomDrawerContentComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={require('./images/Logo.png')}
                  style={{
                    width: 130,
                    height: 130,
                    marginBottom: 10,
                    marginTop: 30,
                  }}
                />
              </View>
            </View>

            <DrawerItems {...this.props} />

            <View>
              <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

//App Screens
const HomePage_StackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      title: 'الرئيسية',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: '#3c0f50',
      },
    }),
  },
  PostPage: {
    screen: Post,
    navigationOptions: ({ navigation }) => ({
      title: 'مقالات',
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: 'transparent',
      },
      headerBackTitleVisible: null,
    }),
  },
});

const IdeaOfProgram_StackNavigator = createStackNavigator({
  IdeaOfProgram: {
    screen: IdeaOfProgram,
    navigationOptions: ({ navigation }) => ({
      title: 'فكرة البرنامج',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
});

const Judges_StackNavigator = createStackNavigator({
  //All the screen from the Judges will be indexed here
  Judges: {
    screen: Judges,
    navigationOptions: ({ navigation }) => ({
      title: 'لجنة التحكيم',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
  Judge: {
    screen: Judge,
    navigationOptions: ({ navigation }) => ({
      title: 'لجنة التحكيم',
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: 'transparent',
      },
      headerBackTitleVisible: null,
    }),
  },
});

const Coaches_StackNavigator = createStackNavigator({
  Coaches: {
    screen: Coaches,
    navigationOptions: ({ navigation }) => ({
      title: 'المدربين',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
  Coache: {
    screen: Coache,
    navigationOptions: ({ navigation }) => ({
      title: 'المدربين',
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: 'transparent',
      },
      headerBackTitleVisible: null,
    }),
  },
});

const Participants_StackNavigator = createStackNavigator({
  Participants: {
    screen: Participants,
    navigationOptions: ({ navigation }) => ({
      title: 'المشاركون',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
  Participant: {
    screen: Participant,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      cardStyle: {
        backgroundColor: 'transparent',
      },
      headerBackTitleVisible: null,
    }),
  },
});

const Team_StackNavigator = createStackNavigator({
  Team: {
    screen: Team,
    navigationOptions: ({ navigation }) => ({
      title: 'فريق العمل',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#bf903e',
      cardStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
  TeamProfil: {
    screen: TeamProfil,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#3c0f50',
      },
      headerTitleStyle: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      cardStyle: {
        backgroundColor: 'transparent',
      },
      headerBackTitleVisible: null,
    }),
  },
});

//Drawer Menu
const DrawerNavigator = createDrawerNavigator(
  {
    HomePage: {
      screen: HomePage_StackNavigator,
      navigationOptions: {
        drawerLabel: <Menuitem Arabic="الرئيسية" Amazigh="ⴷⴹⴹⴼⴼⴽⴽ ⵃⵄⵅⵇⵉ" />,
        drawerIcon: (
          <Image
            source={require('./images/icons/Home.png')}
            style={{ width: 32, height: 32 }}
          />
        ),
      },
    },
    IdeaOfProgram: {
      screen: IdeaOfProgram_StackNavigator,
      navigationOptions: {
        drawerLabel: (
          <Menuitem Arabic="فكرة البرنامج" Amazigh="ⴷⴹⴹⴼⴼⴽⴽ ⵃⵄⵅⵇⵉ" />
        ),
        drawerIcon: (
          <Image
            source={require('./images/icons/Idea.png')}
            style={{ width: 32, height: 32 }}
          />
        ),
      },
    },
    Judges: {
      screen: Judges_StackNavigator,
      navigationOptions: {
        drawerLabel: <Menuitem Arabic="لجنة التحكيم" Amazigh="ⴷⴹⴹⴼⴼⴽⴽ ⵃⵄⵅⵇⵉ" />,
        drawerIcon: (
          <Image
            source={require('./images/icons/Judges.png')}
            style={{ width: 32, height: 32 }}
          />
        ),
      },
    },
    Coaches: {
      screen: Coaches_StackNavigator,
      navigationOptions: {
        drawerLabel: <Menuitem Arabic="المدربين" Amazigh="ⴷⴹⴹⴼⴼⴽⴽ ⵃⵄⵅⵇⵉ" />,
        drawerIcon: (
          <Image
            source={require('./images/icons/Coaches.png')}
            style={{ width: 32, height: 32 }}
          />
        ),
      },
    },
    Participants: {
      screen: Participants_StackNavigator,
      navigationOptions: {
        drawerLabel: <Menuitem Arabic="المشاركون" Amazigh="ⴷⴹⴹⴼⴼⴽⴽ ⵃⵄⵅⵇⵉ" />,
        drawerIcon: (
          <Image
            source={require('./images/icons/Participants.png')}
            style={{ width: 32, height: 32 }}
          />
        ),
      },
    },
    Team: {
      //Title
      screen: Team_StackNavigator,
      navigationOptions: {
        drawerLabel: <Menuitem Arabic="فريق العمل" Amazigh="ⴷⴹⴹⴼⴼⴽⴽ ⵃⵄⵅⵇⵉ" />,
        drawerIcon: (
          <Image
            source={require('./images/icons/Presenter.png')}
            style={{ width: 32, height: 32 }}
          />
        ),
      },
    },
  },
  {
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: 'right',
    drawerBackgroundColor: '#3c0f50',
    contentOptions: {
      labelStyle: {
        fontFamily: 'Cairo-Bold',
      },
      itemsContainerStyle: {
        textAlign: 'right',
      },
      inactiveTintColor: '#FFFFFF',
      activeBackgroundColor: '#b68739',
      activeTintColor: '#FFFFFF',
    },
  },
);

const AppMenu = createAppContainer(DrawerNavigator);

//First Component
class App extends Component {
  constructor(props) {
    super(props);
    //Force RTL
    if (I18nManager.isRTL != true) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <AppMenu />;
  }
}

export default App;
