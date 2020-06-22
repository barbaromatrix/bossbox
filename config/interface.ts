export interface IConfig {
  application: {
    port: string
  },
  database: {
    url: string
  },
  security: {
    passwordSecret: string,
    jwtSecret: string,
    jwtAccessTokenExpirationTime: number | string,
    jwtRefreshTokenExpirationTime: number | string,
  }
}