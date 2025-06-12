export function isValidIranianPhone(phone: string): boolean {
  const iranPhoneRegex = /^09\d{9}$/;
  return iranPhoneRegex.test(phone);
}
