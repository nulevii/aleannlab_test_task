export const convertSalary = (salary: string) => {
  const convertedSalary = salary.replace(/k/g, ' 000').replace('-', '—')
  return `€ ${convertedSalary}`
}
