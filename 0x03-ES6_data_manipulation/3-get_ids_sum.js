export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    const ids = list.map((element) => element.id);
    const totalIds = ids.reduce((total, element) => total + element);
    return totalIds;
  }
  return [];
}
