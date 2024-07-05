# ly-public-utils

自用工具包，提供一些常用的工具方法。<br />

[npm地址](https://www.npmjs.com/package/ly-public-utils)<br />

安装命令 `npm i ly-public-utils` 或 `yarn add ly-public-utils`

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

/**
 * 手机号校验
 * @param num 手机号
 */
defaultUtils.isPhone('13563526524');

/**
 * 手机号码只显示开始3位和结尾4位，其余使用****
 * @param mobile 手机号
 */
defaultUtils.hideMobile('13563526524');

/**
 * 中英文姓名校验
 * @param name 姓名
 */
defaultUtils.isName('张三');

/**
 * 身份证号校验 *15/18位*
 * @param idCard 身份证号
 */
defaultUtils.isIdCard('123456789012345');

/**
 * 银行卡校验
 * @param bank 银行卡号
 */
defaultUtils.isBank('6222020202020202020');

/**
 * 邮箱校验
 * @param email 邮箱地址
 */
defaultUtils.isEmail('example@example.com');

/**
 * QQ号校验
 * @param qq QQ号
 */
defaultUtils.isQQ('123456789');

/**
 * 邮政编码校验
 * @param post 邮政编码
 */
defaultUtils.isPostal('100000');

/**
 * 英文校验
 * @param english 英文
 */
defaultUtils.isEn('hello');

/**
 * 中文校验
 * @param chinese 中文
 */
defaultUtils.isCh('你好');

/**
 * HTML校验
 * @param html HTML内容
 */
defaultUtils.isHtml('<div>Hello</div>');

/**
 * 车牌号校验
 * @param carNum 车牌号
 */
defaultUtils.isCarNum('京A12345');

/**
 * 校验车架号
 * @param vehicle 车架号
 */
defaultUtils.isVehicle('L0ABC123456789012');

/**
 * 验证是否为数字
 * @param n 数字
 */
defaultUtils.isNumber('123');

/**
 * 是否为数组
 * @param obj 对象
 */
defaultUtils.isArray([1, 2, 3]);

/**
 * 是否空数组
 * @param val 数组
 */
defaultUtils.isArrayEmpty([]);

/**
 * 判断是否为PC端
 */
defaultUtils.isPC();

/**
 * 判断当前设备{ios/android/web}
 */
defaultUtils.isDevice();

/**
 * 判断是否为微信
 */
defaultUtils.isWx();

/**
 * 判断两个数组是否相等
 * @param arr1 数组1
 * @param arr2 数组2
 */
defaultUtils.arrayEqual([1, 2, 3], [1, 2, 3]);

/**
 * 判断图片是否加载完成
 * @param arr 图片数组
 * @param callback 回调函数
 */
defaultUtils.imgLoadAll(['image1.jpg', 'image2.jpg'], () => console.log('加载完成'));

/**
 * 判断音频是否加载完成
 * @param src 音频地址
 * @param callback 回调函数
 */
defaultUtils.loadAudio('audio.mp3', () => console.log('加载完成'));

/**
 * 获取url的参数
 * @param urlLocation url地址
 */
defaultUtils.urlParams('https://example.com?param1=value1&param2=value2');

/**
 * 获取当前日期星期
 */
defaultUtils.getDate();

/**
 * 获取滚动条的滚动距离
 */
defaultUtils.getViewportOffset();

/**
 * 去除字符串空格
 * @param str 要处理的字符串
 * @param type 类型
 */
defaultUtils.strTrim('  hello  ', 2);

/**
 * 将某个元素置顶
 * @param fieldData 数据
 * @param index 索引
 */
defaultUtils.toFirst([1, 2, 3], 1);

/**
 * 将某个元素移至末尾
 * @param fieldData 数据
 * @param index 索引
 */
defaultUtils.toEnd([1, 2, 3], 0);

/**
 * 将指定元素上移一位
 * @param fieldData 数据
 * @param index 索引
 */
defaultUtils.upGo([1, 2, 3], 1);

/**
 * 将指定元素下移一位
 * @param fieldData 数据
 * @param index 索引
 */
defaultUtils.downGo([1, 2, 3], 1);

/**
 * 生成随机数{min~max:随机数范围}
 * @param min 最小值
 * @param max 最大值
 */
defaultUtils.random(1, 10);

/**
 * 数组删除指定元素
 * @param arr 数组
 * @param ele 元素
 */
defaultUtils.removeArr([1, 2, 3], 2);

/**
 * 数组并集
 * @param arr1 数组1
 * @param arr2 数组2
 */
defaultUtils.unionArr([1, 2, 3], [3, 4, 5]);

/**
 * 数组交集
 * @param arr1 数组1
 * @param arr2 数组2
 */
defaultUtils.intersectArr([1, 2, 3], [2, 3, 4]);

/**
 * 数组差集
 * @param arr1 数组1
 * @param arr2 数组2
 */
defaultUtils.differenceArr([1, 2, 3], [2, 3, 4]);

/**
 * 数组去重
 * @param arr 数组
 */
defaultUtils.deduplicationArr([1, 2, 2, 3]);

/**
 * 数组最大值
 * @param arr 数组
 */
defaultUtils.maxArr([1, 2, 3]);

/**
 * 数组最小值
 * @param arr 数组
 */
defaultUtils.minArr([1, 2, 3]);

/**
 * 判断数据类型
 * @param val 数据
 */
defaultUtils.getType('hello');

/**
 * 去除参数空数据（用于向后台传递参数的时候）
 * @param obj 对象
 */
defaultUtils.filterEmptyData({ a: 1, b: '' });

/**
 * 函数防抖，用于将多次执行变为最后一次执行
 * @param fun 函数
 * @param delay 延迟时间
 */
defaultUtils.debounce(() => console.log('执行了'), 1000);

/**
 * 节流函数, 用于将多次执行变为每隔一段时间执行
 * @param fun 函数
 * @param delay 间隔时间
 */
defaultUtils.throttle(() => console.log('执行了'), 1000);

/**
 * 字母大小写切换
 * @param str 字符串
 * @param type 类型
 */
defaultUtils.strChangeCase('hello', 1);

/**
 * 检测密码强度
 * @param str 字符串
 */
defaultUtils.checkPwd('Password123');

/**
 * 浏览器全屏
 * @param eleId 元素ID
 */
defaultUtils.reqFullScreen('elementId');

/**
 * 浏览器退出全屏
 */
defaultUtils.exitFullScreen();

/**
 * 随机产生某个颜色
 */
defaultUtils.randomColor();

/**
 * 生成随机数{min~max:随机数范围，min必须小于max并且不能相等，fixed：保留几位小数}
 * @param min 范围最小值
 * @param max 范围最大值
 * @param fixed 保留小数位
 */
defaultUtils.numberRandom(1, 10, 2);

/**
 * 数字每千位加逗号
 * @param num 数字
 */
defaultUtils.formatNumberWithCommas(1000000);

/**
 * 数字转中文
 * @param num 数字
 * @param upperOrLower 'lower'：小写中文数字，'upper'：大写中文数字
 */
defaultUtils.formatNumberToChinese(12345, 'lower');

/**
 * 检测文件名是否为图片
 * @param fileName 文件名
 */
defaultUtils.isImage('image.png');

/**
 * 检测文件名是否为视频
 * @param fileName 文件名
 */
defaultUtils.isH5Video('video.mp4');

/**
 * 检测文件名是否为PDF
 * @param fileName 文件名
 */
defaultUtils.isPdf('document.pdf');

/**
 * 检测文件名是否为word
 * @param fileName 文件名
 */
defaultUtils.isWord('document.docx');

/**
 * 检测文件名是否为excel
 * @param fileName 文件名
 */
defaultUtils.isExcel('spreadsheet.xlsx');

/**
 * 获取一个随机的UUID
 */
defaultUtils.getUUID();

```

`flattenArray` 数组打平<br />
例：

```javascript
import { flattenArray } from 'ly-public-utils';

flattenArray([1, 2, 3, [2, 5], 6, [7, 8, [9, 10]]]) //[1, 2, 3, 2, 5, 6, 7, 8, 9, 10]
```

`buildTree` 扁平化数组数据构建树形结构的数组对象<br />
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

`cutArray` 数组按size分组<br />
例：

```javascript
import { cutArray } from 'ly-public-utils';
// 使用示例
const arrData: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resData = cutArray(arrData, 3);
resData// [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

`generateCombinations` 生成数组的排列组合<br />
例：

```javascript
import { generateCombinations } from 'ly-public-utils';
// 使用示例
const arrData: any[] = [[1, 2], [3, 4]]
const resData = generateCombinations(arrData);
resData// [[1, 3], [1, 4], [2, 3], [2, 4]]
```

`exportExcel` 根据元素ID导出excel<br />
例：

```javascript
import { exportExcel } from 'ly-public-utils';
// 使用示例
exportExcel('my-table', '集团数据');
```

`bus` 跨组件事件总线->`mitt`<br />
例：

```javascript
import { bus } from 'ly-public-utils';
// 触发事件
bus.emit('myEvent', { message: 'Hello from Component A' });
```

```javascript
import { bus } from 'ly-public-utils';
// 触发事件
bus.on('myEvent', (data) => {
  console.log(data.message); // 输出: Hello from Component A
});
//组件销毁时清理监听器->避免内存泄漏
onUnmounted(() => {
  bus.off('myEvent', handler);
});
```
