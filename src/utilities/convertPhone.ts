export const convertPhone = (phone: string) => {
  return phone
    .replace(/(?<=\d\d)\d\d/, (digits) => ` (${digits}) `)
    .replace(/\d\d\d\d$/, (digits) => `-${digits},`)
}
