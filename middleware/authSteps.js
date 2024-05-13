export default function ({ route, redirect }) {
  if (route.name === 'auth-register-mobile' && !route.params.national_id) {
    return redirect('/auth/login')
  } else if (route.name === 'auth-login-otp' && !route.params.phone_number && !route.params.national_id) {
    return redirect('/auth/login')
  }
}
