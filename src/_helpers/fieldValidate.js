// 
// (redux-form) 필드 별 각각 따로 벨리데이션 체크할때 사용
// 
export const required = value => (value ? undefined : 'Required')

export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined

// export const maxLength15 = maxLength(15)

export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined

// export const minLength2 = minLength(2)

export const number = value => value && isNaN(Number(value)) ? '숫자로 입력해주세요' : undefined

export const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined

// export const minValue13 = minValue(13)

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? '이메일주소를 정확히 입력해 주세요'
    : undefined

export const tooYoung = value =>
  value && value < 13
    ? '너무 어립니다.'
    : undefined

export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? '영문으로 입력해 주세요'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
