/**
 * The default tryCacher function that returns an array containing either null
 * or the desired outcome on index 0, and either null or the caught exception on index 1.
 *
 * @example
 *   const [parsed, error] = tryCatcher(() => JSON.parse(shouldWork));
 *   if (error) {
 *     throw error;
 *   }
 *   console.log('parsed', parsed);
 *
 * @param {Function} tryable The tryable function preloaded with the required arguments.
 * @returns {[?any, ?Error]} An array containing either null or the desired
 *   outcome on index 0, and either null or the caught exception on index 1.
 */
const tryCatcher = (tryable) => {
  try {
    // console.log("trying");
    const result = tryable();
    // console.log("result: ", result);
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export { tryCatcher };

export default tryCatcher;
