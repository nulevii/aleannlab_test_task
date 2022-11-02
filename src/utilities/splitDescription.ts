export const splitDescription = (description: string) => {
  const result = description
    .split(/\n|\t/)
    .map((element: string) => element.trim())
    .filter((entry: string) => entry !== '')
  const benefitsArr = result[4].split('. ')
  return {
    generalInfo: result[0],
    responsopilities: result[1],
    responsopilitiesText: result[2],
    benefits: result[3],
    benefitsArr
  }
}
