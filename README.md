# ly-public-utils

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
