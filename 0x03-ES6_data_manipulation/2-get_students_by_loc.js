/**
 * Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} studentList - The list of students.
 * @param {String} city - The location.
 * @author Aibueku Precious Okwuoma <https://github.com/aibuekuoprecious>
 * @returns
 */
export default function getStudentsByLocation(studentList, city) {
  if (Array.isArray(studentList)) {
    return studentList.filter((student) => student.location === city);
  }
  return [];
}
