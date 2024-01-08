/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Aibueku Precious Okwuoma <https://github.com/aibuekuoprecious>
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
