export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list) && typeof city === 'string') {
    const newList = list.filter((element) => element.location === city);
    return newList;
  }
  return [];
}
