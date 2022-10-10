import { environment } from './env'

interface IAuthConfig {
  jwt: {
    secret: string
    expiresIn: string | number
  }
}

export default {
  jwt: {
    secret: environment.APP_SECRET,
    expiresIn: '1d',
  },
} as IAuthConfig
