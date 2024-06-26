/**
 * localStorage 数据存储工具类
 */
class localCacheUtil {
  /**
   * 存数据
   * @param key
   * @param value
   */
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 取数据
   * @param key
   */
  get(key: string): any {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  /**
   * 删除指定key的数据
   * @param key
   */
  del(key: string) {
    window.localStorage.removeItem(key);
  }

  /**
   * 清除所有数据
   */
  clean() {
    window.localStorage.clear();
  }
}

/**
 * localStorage 数据存储工具类
 */
export default new localCacheUtil();
