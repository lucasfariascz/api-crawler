import { Login } from '../entities/login'
import { LoginResult } from '../entities/login-result'

export interface LoginRepository {
  login(request: Login): Promise<LoginResult>
}
