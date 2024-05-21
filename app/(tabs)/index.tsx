import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../components/src/login/Login'
export default function HomeScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <Login/>
          {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="UserProfile" component={UserProfile}  options={{headerShown: false}}/>
        <Stack.Screen name="UserEditProfile" component={UserEditProfile} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="PersonalLoansCalculate" component={PersonalLoansCalculate} />
        <Stack.Screen name="MortgageCalculation" component={MortgageCalculation} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="BusinessFinance" component={BusinessFinance} />
        <Stack.Screen name="Mortgage" component={Mortgage} />
        <Stack.Screen name="PersonalLoan" component={PersonalLoan} />
        <Stack.Screen name="PersonalLoanForm" component={PersonalLoanForm} />
        <Stack.Screen name="MortgageForm" component={MortgageForm} />
        <Stack.Screen name="BusinessFinanceForm" component={BusinessFinanceForm} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsandConditions" component={TermsandConditions} />
        <Stack.Screen name="HelpandSupport" component={HelpandSupport} />
        <Stack.Screen name="FAQquestions" component={FAQquestions} />
        <Stack.Screen name="FeedBackForm" component={FeedBackForm} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ProfileIncomplete" component={ProfileIncomplete} />
      </Stack.Navigator>
    </NavigationContainer> */}
    </>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
