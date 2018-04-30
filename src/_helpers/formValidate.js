// (redux-form) 폼그룹별로 체크할때 사용합니다.

export const validate = values => {
  const errors = {};
  if (!values.id) {
    errors.id = '아이디를 입력해 주세요';
  }
  if (!values.password) {
    errors.password = '비밀번호를 입력해 주세요';
  }
  if (!values.spiceLevel) {
    errors.spiceLevel = '라디오 선택 주세요';
  }
  return errors;
};

export const warn = values => {
  const warnings = {};
  if (values.id && values.id.trim().length < 5) {
    warnings.id = '더길게 입력';
  }
  if (values.password && values.password.trim().length < 5) {
    warnings.password = '더길게 입력';
  }
  return warnings;
};

export const loginFormErrorValidate = values => {
  const errors = {};
  if (!values.id) {
    errors.id = '아이디를 입력해 주세요';
  }
  if (!values.password) {
    errors.password = '비밀번호를 입력해 주세요';
  }
  return errors;
};
export const loginFormWarningValidate = values => {
  const warnings = {};
  if (values.id && values.id.length < 5) {
    warnings.id = '더길게 입력';
  }
  if (values.password && values.password.length < 5) {
    warnings.id = '더길게 입력';
  }
  return warnings;
};
