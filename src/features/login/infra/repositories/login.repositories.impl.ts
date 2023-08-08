import { injectable } from 'inversify'
import { LoginRepository } from '../../domain/repository/login.repository'
import { Login } from '../../domain/entities/login'
import { LoginResult } from '../../domain/entities/login-result'
import puppeteer from 'puppeteer'

@injectable()
export class LoginRepositoriesImpl implements LoginRepository {
  async login(request: Login): Promise<LoginResult> {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: '/usr/bin/google-chrome',
      headless: false
    })

    const page = await browser.newPage()
    await page.goto('http://extratoclube.com.br/')

    // Obter o frame que contém o formulário de login
    const frames = page.frames()
    const frameHandle = frames[1]

    // Obter os campos de input
    const inputName = await frameHandle.$('[name="usuario"]')
    const inputPassword = await frameHandle.$('[name="senha"]')

    // Preencher os campos de Name e Password com os valores desejados
    await inputName.type(request.name)
    await inputPassword.type(request.password)

    // Clicar no botão de Login
    await frameHandle.waitForSelector('#botao')
    await frameHandle.click('#botao')

    await frameHandle.waitForNavigation()
    const modalFrame = await page.$('frame[src="http://ionic-application.s3-website-sa-east-1.amazonaws.com/"]')
    if (modalFrame) {
      const modalContent = await modalFrame.contentFrame()
      await page.goto(modalContent.url())
      await page.waitForTimeout(2000)
      await page.waitForSelector('ion-button')
      const buttons = await page.$$('ion-button')
      // Clica no 14º botão
      if (buttons.length >= 14) {
        await buttons[13].click() // Lembre-se que o índice do array começa em 0
      }
      // await page.waitForSelector('ion-button.ion-color-warning')
      // await page.click('ion-button.ion-color-warning')
    }
    await page.waitForTimeout(2000)
    // await page.waitForSelector('[name="ion-input-0"]')
    // await page.type('[name="ion-input-0"]', '074.687.335-20')
    // await page.waitForSelector('ion-button.ion-activatable')
    // await page.click('ion-button.ion-activatable')

    const loginResult = new LoginResult()
    loginResult.numberBenefit = '123'

    return loginResult
  }
}
