const SEPARATOR = '_'

const normalize = (str) => str
  ?.split(' ')
  ?.map(str => str.toLowerCase())
  ?.join(SEPARATOR)

export const getStudentSlug = (student) => {
  const firstName = normalize(student?.firstName)
  const lastName = normalize(student?.lastName)
  return [firstName, lastName]?.join(SEPARATOR)
}