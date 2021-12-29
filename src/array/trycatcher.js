/**
 *
 * @param {*} tryable The tryable function preloaded with the required arguments.
 * @returns {[?any,?Error]} An array containing either null or the desired outcome on index 0, and either null or the caught exception on index 1.
 */
const tryCatcher = (tryable) => {
  try {
    // console.log("trying");
    const result = tryable();
    // console.log("result: ", result);
    return [result, null];
  } catch (error) {
    // console.log("error: ", error);
    return [null, error];
  }
};

export { tryCatcher };
