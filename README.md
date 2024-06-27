# ly-public-utils

[npm地址](https://www.npmjs.com/package/ly-public-utils)<br />

安装命令 `npm i ly-public-utils` 或 `yarn add ly-public-utils`

自用工具包，提供一些常用的工具方法。<br />
`formatDate` 格式化时间<br />
例：

```javascript
import { formatDate } from 'ly-public-utils';

formatDate(new Date(), 'YYYY-MM-DD') // 2022-12-12
```

`Base64` base64格式数据加密、解密<br />
例：

```javascript
import { Base64 } from 'ly-public-utils';

let pwd = '123456';
//加密
const base64 = new Base64().base64_encode(pwd);
//解密
pwd = new Base64().base64_decode(base64);
```

`localStorage` 数据持久化存储<br />
例：

```javascript
import { localStorage } from 'ly-public-utils';
//添加持久化数据
localStorage.set('userInfo', { name: zhangsan, age: 18 });
//查询持久化数据
localStorage.get('userInfo'); //{ name:zhangsan,age:18}
//删除指定持久化数据
localStorage.del('userInfo');
//清除所有持久化数据
localStorage.clear();
```

`deepCopy` 递归深拷贝<br />
`defaultUtils` 默认常见小工具<br />
例：

```javascript
import { defaultUtils } from 'ly-public-utils';
//手机号校验
defaultUtils.isPhone('13563526524'); //true
//手机号码只显示开始3位和结尾4位，其余使用****
defaultUtils.hideMobile('13563526524'); //135****6524
//还有好多自己查看……
```

`flattenArray` 数组打平<br />
例：

```javascript
import { flattenArray } from 'ly-public-utils';

flattenArray([1, 2, 3, [2, 5], 6, [7, 8, [9, 10]]]) //[1, 2, 3, 2, 5, 6, 7, 8, 9, 10]
```

`buildTree` 构建树形结构的数组对象<br />
例：

```javascript
import { buildTree } from 'ly-public-utils';
// 使用示例
const jsonData: any[] = [
  { id: 1, name: 'Node 1', parent_id: null },
  { id: 2, name: 'Node 2', parent_id: 1 },
  { id: 3, name: 'Node 3', parent_id: 1 },
  { id: 4, name: 'Node 4', parent_id: 2 },
  { id: 5, name: 'Node 5', parent_id: 2 },
  { id: 6, name: 'Node 6', parent_id: 3 }
];
const treeData = buildTree(jsonData, 'parent_id');
treeData// [{id: 1, name: 'Node 1', children: [{id: 2, name: 'Node 2', children: [{id: 4, name: 'Node 4'}, {id: 5, name: 'Node 5'}]}, {id: 3, name: 'Node 3', children: []}]}]
```
