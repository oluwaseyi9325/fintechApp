import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './navigations/StackNavigation'
export default function Main() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}