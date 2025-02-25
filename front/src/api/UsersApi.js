import ApiMethods from "./ApiMethods"

export const getStudents = async () => {
  const url = '/users';
  return ApiMethods.get(url);
}