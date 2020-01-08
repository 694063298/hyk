/**
 * 手机号码
 */
export function validatePhone(value) {
    return /^1\d{10}$/.test(value);
}

/**
 * 身份证
 */
export function validateIdCard (str) {
    const reg18 = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
    return reg18.test(str)
}
