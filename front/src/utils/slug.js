const SEPARATOR = '_'

export const normalize = (str) => str
  ?.replace(/ +(?= )/g,'')
  ?.split(' ')
  ?.map(str => str.toLowerCase())
  ?.join(SEPARATOR)

export const capitalize = (slug) => slug
  ?.split(SEPARATOR)
  ?.map(str => String(str).charAt(0).toUpperCase() + String(str).slice(1))
  ?.join(' ')

export const getStudentSlug = (student) => {
  const firstName = normalize(student?.firstName)
  const lastName = normalize(student?.lastName)
  return [firstName, lastName]?.join(SEPARATOR)
}