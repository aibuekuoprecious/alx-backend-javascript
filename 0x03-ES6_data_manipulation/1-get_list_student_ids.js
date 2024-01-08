/**
 * Create a function getListStudentIds that returns an array of ids from a list of object.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} studentList - The list of students.
 * @author Aibueku Precious Okwuoma <https://github.com/aibuekuoprecious>
 * @returns
 */
export default function getListStudentIds(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.map((student) => student.id);
  }
  return [];
}
