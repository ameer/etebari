import { RequestHandler, LocalScheme } from '~auth/runtime'
const DEFAULTS$4 = {
  name: 'local',
  token: {
    property: 'data.token',
    global: true,
    required: true,
    type: 'Bearer'
  },
  user: {
    property: 'data',
    autoFetch: true
  },
  endpoints: {
    login: { url: '/auth/login', method: 'post' },
    logout: { url: '/auth/logout', method: 'get' },
    user: { url: '/auth/me', method: 'get' }
  },
  clientId: false,
  grantType: false,
  scope: false
}
export class CustomRequestHandler extends RequestHandler {
  _requestHasAuthorizationHeader (config) {
    return !!config.headers[this.scheme.options.token.name]
  }
}
export default class CustomLocalScheme extends LocalScheme {
  constructor ($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$4)
    this.requestHandler = new CustomRequestHandler(this, this.$auth.ctx.$axios)
  }
}
