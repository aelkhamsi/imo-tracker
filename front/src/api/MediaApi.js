import ApiMethods from "./ApiMethods"

export const getImage = async (type, slug) => {
  const url = `/${type}/${slug}.png`;
  return ApiMethods.get(url);
}