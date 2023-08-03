export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    const newMap = list.map((element) => element.id);
    return newMap;
  }
  return [];
}
