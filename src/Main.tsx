import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './navigations/StackNavigation'
import BottomNavigation from './navigations/BottomNavigation'
export default function Main() {
  return (
    <NavigationContainer>
      {/* <StackNavigation/> */}
      <BottomNavigation/>
    </NavigationContainer>
  )
}