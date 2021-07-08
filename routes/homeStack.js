import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

import TaskDetail from '../screens/taskDetail';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Todo App'
     
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Todo App',
      headerStyle: { backgroundColor: 'green' }
    }
  },

  TaskDetail: {
    screen: TaskDetail
  }

};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: 'green' }
  }
});
export default createAppContainer(HomeStack);
