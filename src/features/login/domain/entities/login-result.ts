export class LoginResult {
  numberBenefit: string

  toString(): string {
    const result = {
      numberBenefit: this.numberBenefit
    }
    return JSON.stringify(result)
  }
}