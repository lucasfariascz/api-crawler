import { LoginResult } from '@/features/login/domain/entities/login-result'
import { LoginOutputDTO } from '@/features/login/presentation/dto/login.output.dto'
import { classes } from '@automapper/classes'
import { createMapper, mapFrom } from '@automapper/core'

export const loginMapper = createMapper({
  name: 'login',
  pluginInitializer: classes
})

loginMapper
  .createMap(LoginResult, LoginOutputDTO)
  .forMember(
    (dst) => dst.numberBenefit,
    mapFrom((src) => src.numberBenefit)
  )