import { Container } from 'inversify'
import { bindControllers, bindRepositories, bindUseCases } from './di-container-binding'

const DIContainer = new Container()

bindRepositories(DIContainer)
bindUseCases(DIContainer)
bindControllers(DIContainer)

export default DIContainer
