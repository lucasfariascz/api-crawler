import { inject } from 'inversify'
import { controller, httpPost } from 'inversify-express-utils'
import { Login } from '../../domain/entities/login'
import { LoginUseCase } from '../../domain/use-cases/login.use-case'
import { Request } from 'express'
import { loginMapper } from '../../../../configuration/automapper/mapper.login'
import { LoginInputDTO } from '../dto/login.input.dto'
import { LoginOutputDTO } from '../dto/login.output.dto'
import { TYPES } from '@/configuration/types'
import { LoginResult } from '../../domain/entities/login-result'

@controller('/login')
export class LoginController {
  private readonly LoginUseCase: LoginUseCase
  constructor(@inject(TYPES.LoginUseCase) LoginUseCase: LoginUseCase) {
    this.LoginUseCase = LoginUseCase
  }

  @httpPost('/')
  async Login(request: Request): Promise<LoginResult> {
    const input: LoginInputDTO = request.body
    const login = new Login()
    login.name = input.name
    login.password = input.password

    return this.LoginUseCase.execute(login).then((login) => {
      return loginMapper.map(login, LoginOutputDTO, LoginResult)
    })
  }
}
