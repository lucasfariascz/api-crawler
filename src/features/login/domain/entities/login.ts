export class Login {
  name: string
  password: string

  toString(): string {
    const result = {
      name: this.name
    }
    return JSON.stringify(result)
  }
}
