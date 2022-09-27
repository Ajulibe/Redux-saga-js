import { useSelector } from "react-redux";

/**
 *
 * Done the warn the user when selector is used outside the provider
 *
 */

function useAppSelector(fn) {
  const selector = useSelector(fn);
  if (selector === undefined) {
    throw new Error("useAppSelector must be used within a Provider");
  }
  return selector;
}
export { useAppSelector };
