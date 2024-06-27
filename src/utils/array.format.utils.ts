/**
 * 深拷贝一个对象或数组
 * @param obj 要深拷贝的对象或数组
 * @param visited 访问过的对象的映射，用于处理循环引用
 * @returns 返回深拷贝后的新对象或数组
 */
export function deepCopy(obj: any, visited?: WeakMap<any, any>): any {
  // 如果obj为null或不是对象，则直接返回obj本身
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // 初始化visited，用于处理循环引用
  if (!visited) {
    visited = new WeakMap();
  }

  // 如果已经访问过obj，则直接返回缓存的结果
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  let result: any;

  // 处理特殊对象，如Date和RegExp
  if (obj instanceof Date) {
    result = new Date(obj); // 复制Date对象
  } else if (obj instanceof RegExp) {
    result = new RegExp(obj.source, obj.flags); // 复制RegExp对象
  } else {
    // 处理数组和普通对象
    result = Array.isArray(obj) ? [] : {};

    // 缓存结果，避免循环引用时的无限递归
    visited.set(obj, result);

    // 递归深拷贝每个属性
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepCopy(obj[key], visited);
      }
    }
  }

  return result;
}

/**
 * 数组打平
 * @param arr 数据数组
 * @param unique 是否去重，默认不去重
 */
export function flattenArray(arr: any[], unique: boolean = false): any[] {
  const result: any[] = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  });
  // 如果 unique 为 true，则对结果数组进行去重处理
  if (unique) {
    return Array.from(new Set(result));
  } else {
    return result;
  }
}

/**
 * 构建树形结构的数组对象
 * @param data 原始数据数组
 * @param parentIdKey 父节点关联字段名
 * @param isReturnJson 是否返回JSON字符串,默认不返回
 * @returns 树形结构的数组对象或者JSON字符串
 */
export function buildTree(data: any[], parentIdKey: string, isReturnJson = false): any[] | string {
  const tree: any[] = [];
  const map: { [key: number]: any } = {};

  // 第一次遍历，将每个节点存入map中
  data.forEach((node) => {
    const id = node.id;
    map[id] = { ...node, children: [] }; // 创建一个节点的副本，并初始化children数组
  });

  // 第二次遍历，将每个节点连接到父节点上
  data.forEach((node) => {
    const parentId = node[parentIdKey];
    if (parentId !== undefined && map[parentId]) {
      if (!Array.isArray(map[parentId].children)) {
        map[parentId].children = []; // 确保父节点有children字段，如果没有则创建一个空数组
      }
      map[parentId].children.push(map[node.id]); // 将当前节点添加到父节点的children数组中
    } else {
      tree.push(map[node.id]); // 如果没有父节点或者父节点不在data中，则添加到根节点
    }
  });

  return isReturnJson ? JSON.stringify(tree, null, 2) : tree;
}
