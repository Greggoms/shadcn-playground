/**
 * This utility function allows the EmployeeSearch component
 * to search for an employee based on multiple properties.
 * They can search for by name, email, location, directory info,
 * authId, _id, role, and more.
 *
 * https://stackoverflow.com/a/55251598
 */

export default function flattenObject(obj: Record<string | number, any>) {
  const flattened = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value));
    } else {
      // @ts-expect-error | Dunno how to solve this one, but shouldn't break anything
      flattened[key] = value;
    }
  });

  return flattened;
}
