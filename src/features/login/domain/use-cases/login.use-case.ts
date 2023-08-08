import { Login } from "../entities/login"
import { LoginResult } from "../entities/login-result"

export interface LoginUseCase {
  execute(request: Login): Promise<LoginResult>
}
