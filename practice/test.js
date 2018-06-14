/**
 * @license Lodash <https://lodash.com/>
 * @namespace Lodash
 */
const lodash = (function () {
  /**
   * @access private
   * @memberof Lodash
   */
  const meaning = 42;

  /**
   * @access public
   * @memberof Lodash
   */
  const welcome = "Hello";

  /**
   * Возвращает все, кроме последнего, элементы массива, переданного в качестве аргумента
   * 
   * @memberof Lodash
   * @since 0.1.0
   * @param {Array} array - передаваемый массив
   * @returns {Array} - часть переданного массива
   * @example
   * 
   * initial([1, 2, 3]);
   * // => [1, 2]
   */
  function initial(array) {
    var length = array == null ? 0 : array.length;
    return length ? array.slice(0, -1) : [];
  }
})();