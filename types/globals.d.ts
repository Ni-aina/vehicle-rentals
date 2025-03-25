export {}

export type Roles = 'ADMIN' | 'MODERATOR'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}