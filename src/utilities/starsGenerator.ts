export const generateStars = (starsQtt: number) => {
  const arrayLength = (Math.floor(Math.random() * starsQtt) + 1)
  return Array.from(new Array(arrayLength)).map((element) => 'star')
}
