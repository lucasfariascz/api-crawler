import { inject, injectable } from "inversify";
import { Login } from "../entities/login";
import { LoginResult } from "../entities/login-result";
import { LoginUseCase } from "./login.use-case";
import { TYPES } from "@/configuration/types";
import { LoginRepository } from "../repository/login.repository";

@injectable()
export class LoginUseCaseImpl implements LoginUseCase {

  private readonly loginRepository: LoginRepository

  constructor(@inject(TYPES.LoginRepository) loginRepository: LoginRepository) {
    this.loginRepository = loginRepository
  }
  async execute(request: Login): Promise<LoginResult> {
    await this.loginRepository.login(request)
    return 
  }
}