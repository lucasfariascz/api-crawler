import dotenv from 'dotenv'
import DIContainer from './configuration/di-container'
import { InversifyExpressServer } from 'inversify-express-utils'
import * as bodyParser from 'body-parser'
import { LogService } from './services/log/log-service'
import { LogServiceImpl } from './services/log/log-service.impl'

class App {
  public express: InversifyExpressServer
  logs: LogService
  constructor() {
    this.logs = new LogServiceImpl()
    this.buildEnvConfig()
    this.express = new InversifyExpressServer(DIContainer)
    this.middlewares()
  }

  private buildEnvConfig(): void {
    const configPath = '.env.dev'
    this.logs.debug(`loading configpath: ${configPath}`)
    dotenv.config({
      path: configPath
    })
  }

  private middlewares(): void {
    const server = this.express
    server.setConfig((app) => {
      app.use(
        bodyParser.urlencoded({
          extended: true
        })
      )
      app.use(bodyParser.json())
    })
  }
}

export default new App().express
