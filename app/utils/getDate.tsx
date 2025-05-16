export const writeDate = (getDate: string) => {
  const date = new Date(getDate)
  const day = date.toLocaleDateString(['en-Us'], { day: '2-digit' })
  const month = date?.toLocaleDateString(['cs-CZ'], { month: 'long' })
  const year = date?.toLocaleDateString(['en-US'], { year: 'numeric' })
  return `${day}.${month}, ${year}`
}
