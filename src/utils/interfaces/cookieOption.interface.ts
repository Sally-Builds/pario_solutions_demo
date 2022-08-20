  export default interface CookieOption {
    expires: Date,
    httpOnly?: boolean
    secure?: boolean
  }