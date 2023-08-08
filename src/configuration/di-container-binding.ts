import { Container } from 'inversify'
import { TYPES } from './types'
import { LoginController } from '@/features/login/presentation/controller/login.controller'
import { LoginUseCaseImpl } from '@/features/login/domain/use-cases/login.use-case.impl'
import { LoginUseCase } from '@/features/login/domain/use-cases/login.use-case'
import { LoginRepository } from '@/features/login/domain/repository/login.repository'
import { LoginRepositoriesImpl } from '@/features/login/infra/repositories/login.repositories.impl'

export function bindRepositories(DIContainer: Container) {
  DIContainer.bind<LoginRepository>(TYPES.LoginRepository).to(LoginRepositoriesImpl)
}

export function bindUseCases(DIContainer: Container) {
  DIContainer.bind<LoginUseCase>(TYPES.LoginUseCase).to(LoginUseCaseImpl)
}

export function bindControllers(DIContainer: Container) {
  DIContainer.bind<LoginController>(LoginController).toSelf()
}
