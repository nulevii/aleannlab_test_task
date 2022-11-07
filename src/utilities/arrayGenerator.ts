export const generateArray = (elementsQtt: number, random: boolean) => {
  if (random) {
    const arrayLength = Math.floor(Math.random() * elementsQtt) + 1
    return Array.from(new Array(arrayLength)).map((el, i) => i + 1)
  }
  return Array.from(new Array(elementsQtt)).map((el, i) => i + 1)
}
