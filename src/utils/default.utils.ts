function checkFileName(fileName: string, list: any) {
  let name = fileName.toLowerCase();
  return list.some((i: any) => name.endsWith(`.${i}`));
}

/**
 * 默认常见小工具
 */
const defaultUtils = {
  /**
   * 手机号校验
   * @param num
   */
  isPhone(num: any) {
    return /^1[2,3,4,5,7,8]\d{9}$/.test(num);
  },
  /**
   * 手机号码只显示开始3位和结尾4位，其余使用****
   * @param mobile
   */
  hideMobile(mobile: string) {
    return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
  },
  /**
   * 中英文姓名校验
   * @param name
   */
  isName(name: string) {
    return /[a-zA-Z\u4E00-\u9FA5]+$/.test(name);
  },
  /**
   * 身份证号校验 *15/18位*
   * @param idCard
   */
  isIdCard(idCard: any) {
    return /^\d{15}|\d{}18$/.test(idCard);
  },
  /**
   * 银行卡校验
   * @param bank
   */
  isBank(bank: any) {
    return /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/.test(bank);
  },
  /**
   * 邮箱校验
   * @param email
   */
  isEmail(email: any) {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
  },
  /**
   * QQ号校验
   * @param qq
   */
  isQQ(qq: any) {
    return /^[1-9][0-9]{4,9}$/.test(qq);
  },
  // 7:邮政编码校验
  isPostal(post: any) {
    return /[1-9]\d{5}(?!\d)/.test(post);
  },
  /**
   * 英文校验
   * @param english
   */
  isEn(english: any) {
    return /^[a-zA-Z]+$/.test(english);
  },
  /**
   * 中文校验
   * @param chinese
   */
  isCh(chinese: any) {
    return /^[\u4E00-\u9FA5]+$/.test(chinese);
  },
  /**
   * HTML校验
   * @param html
   */
  isHtml(html: any) {
    return /<("[^"]*"|'[^']*'|[^'">])*>/.test(html);
  },
  /**
   * 车牌号校验
   * @param carNum
   */
  isCarNum(carNum: any) {
    let patrn =
      /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
    let patrn2 =
      /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))$/;
    return !(!patrn.test(carNum) && !patrn2.test(carNum));
  },
  /**
   * 校验车架号
   * @param vehicle
   */
  isVehicle(vehicle: any) {
    let patrn = /^[A-HJ-NP-Za-hj-np-z0-9]+$/;
    return !(!patrn.test(vehicle) || vehicle === '');
  },
  /*
   * 验证是否为数字
   */
  isNumber(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
  /*
   * 是否为数组
   */
  isArray(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
  /*
   * 是否空数组
   */
  isArrayEmpty(val: any) {
    return !(val && val instanceof Array && val.length > 0);
  },
  /**
   * 判断是否为PC端
   */
  isPC() {
    let userAgentInfo = navigator.userAgent;
    let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  },
  /**
   * 判断当前设备{ios/android/web}
   */
  isDevice() {
    let ua: any = navigator.userAgent.toLowerCase();
    if (ua.match(/iPhone\sOS/i) === 'iphone os' || ua.match(/iPad/i) === 'ipad') {
      return 'iOS';
    }
    if (ua.match(/Android/i) === 'android') {
      return 'Android';
    }
    return 'Web';
  },
  /**
   * 判断是否为微信
   */
  isWx() {
    let ua: any = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) === 'micromessenger';
  },
  /**
   * 判断两个数组是否相等
   * @param arr1
   * @param arr2
   */
  arrayEqual(arr1: any, arr2: any) {
    if (arr1 === arr2) {
      return true;
    }
    if (arr1.length != arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  },
  /**
   * 判断图片是否加载完成
   * @param arr
   * @param callback
   */
  imgLoadAll(arr: any, callback: any) {
    let arrImg = [];
    for (let i = 0; i < arr.length; i++) {
      let img = new Image();
      img.src = arr[i];
      img.onload = function () {
        arrImg.push(this);
        if (arrImg.length == arr.length) {
          callback && callback();
        }
      };
    }
  },
  /**
   * 判断音频是否加载完成
   * @param src
   * @param callback
   */
  loadAudio(src: any, callback: any) {
    let audio = new Audio(src);
    audio.onloadedmetadata = callback;
    audio.src = src;
  },
  /**
   * 获取url的参数
   * @param urlLocation
   */
  urlParams(urlLocation: any) {
    /* urlLocation参数非必传，不传获取当前地址 */
    const fullUrl = urlLocation ? urlLocation : location.href;
    const url = fullUrl.substr(fullUrl.indexOf('?')); //获取url中"?"符后的字串
    let theRequest: any = {};
    if (url.indexOf('?') != -1) {
      const str = url.substr(1);
      const strs = str.split('&');
      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      }
    }
    return theRequest;
  },
  /**
   * 获取当前日期星期
   */
  getDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    let days = date.getDay();

    let monthStr = '';
    let dayStr = '';
    let weekStr = '';

    switch (days) {
      case 1:
        weekStr = '星期一';
        break;
      case 2:
        weekStr = '星期二';
        break;
      case 3:
        weekStr = '星期三';
        break;
      case 4:
        weekStr = '星期四';
        break;
      case 5:
        weekStr = '星期五';
        break;
      case 6:
        weekStr = '星期六';
        break;
      case 0:
        weekStr = '星期日';
        break;
    }
    if (month >= 1 && month <= 9) {
      monthStr = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      dayStr = '0' + strDate;
    }
    return year + '-' + monthStr + '-' + dayStr + weekStr;
  },
  /**
   * 获取滚动条的滚动距离
   */
  getViewportOffset() {
    if (window.innerWidth) {
      return {
        w: window.innerWidth,
        h: window.innerHeight
      };
    } else {
      // ie8及其以下
      if (document.compatMode === 'BackCompat') {
        // 怪异模式
        return {
          w: document.body.clientWidth,
          h: document.body.clientHeight
        };
      } else {
        // 标准模式
        return {
          w: document.documentElement.clientWidth,
          h: document.documentElement.clientHeight
        };
      }
    }
  },
  /**
   * 去除字符串空格
   * @param str 要处理的字符串
   * @param type 1：所有空格 2：前后空格 3：前空格 4：后空格
   */
  strTrim(str: string, type: 1 | 2 | 3 | 4) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '');
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 3:
        return str.replace(/(^\s*)/g, '');
      case 4:
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  },
  /**
   * 将某个元素置顶
   * @param fieldData
   * @param index
   */
  toFirst(fieldData: any, index: number) {
    if (index != 0) {
      fieldData.unshift(fieldData.splice(index, 1)[0]);
    }
    return fieldData;
  },
  /**
   * 将某个元素移至末尾
   * @param fieldData
   * @param index
   */
  toEnd(fieldData: any, index: number) {
    fieldData.push(fieldData[index]);
    fieldData.splice(index, 1);
    return fieldData;
  },
  /**
   * 将指定元素上移一位
   * @param fieldData
   * @param index
   */
  upGo(fieldData: any, index: number) {
    if (index != 0) {
      fieldData[index] = fieldData.splice(index - 1, 1, fieldData[index])[0];
    } else {
      fieldData.push(fieldData.shift());
    }
    return fieldData;
  },
  /**
   * 将指定元素下移一位
   * @param fieldData
   * @param index
   */
  downGo(fieldData: any, index: number) {
    if (index != fieldData.length - 1) {
      fieldData[index] = fieldData.splice(index + 1, 1, fieldData[index])[0];
    } else {
      fieldData.unshift(fieldData.splice(index, 1)[0]);
    }
    return fieldData;
  },
  /**
   * 生成随机数{min~max:随机数范围}
   * @param min
   * @param max
   */
  random(min: number, max: number) {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    } else {
      return null;
    }
  },
  /**
   * 数组删除指定元素
   * @param arr
   * @param ele
   */
  removeArr(arr: any, ele: any) {
    let index = arr.indexOf(ele);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  },
  /**
   * 数组并集
   * @param arr1
   * @param arr2
   */
  unionArr(arr1: any, arr2: any) {
    return [...new Set([...arr1, ...arr2])];
  },
  /**
   * 数组交集
   * @param arr1
   * @param arr2
   */
  intersectArr(arr1: any, arr2: any) {
    return [...new Set([...arr1].filter((x) => arr2.includes(x)))];
  },
  /**
   * 数组差集
   * @param arr1
   * @param arr2
   */
  differenceArr(arr1: any, arr2: any) {
    return [...new Set([...arr1].filter((x) => !arr2.includes(x)))];
  },
  /**
   * 数组去重
   * @param arr
   */
  deduplicationArr(arr: any) {
    return [...new Set([...arr])];
  },
  /**
   * 数组最大值
   * @param arr
   */
  maxArr(arr: any) {
    return Math.max.apply(null, arr);
  },
  /**
   * 数组最小值
   * @param arr
   */
  minArr(arr: any) {
    return Math.min.apply(null, arr);
  },
  /**
   * 判断数据类型
   * @param {any} val - 基本类型数据或者引用类型数据
   * @return {string} - 可能返回的结果有，均为小写字符串
   * number、boolean、string、null、undefined、array、object、function等
   */
  getType(val: any) {
    //判断数据是 null 和 undefined 的情况
    if (val == null) {
      return val + '';
    }
    return typeof val === 'object'
      ? Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
      : typeof val;
  },
  /**
   * 去除参数空数据（用于向后台传递参数的时候）
   * @param obj
   */
  filterEmptyData(obj: any) {
    for (let prop in obj) {
      obj[prop] === '' ? delete obj[prop] : obj[prop];
    }
    return obj;
  },
  /**
   * @desc  函数防抖，用于将多次执行变为最后一次执行
   * @param  fun - 需要使用函数防抖的被执行的函数。必传
   * @param  delay - 多少毫秒之内触发，只执行第一次，默认1000ms。可以不传
   */
  debounce(fun: any, delay: any) {
    delay = delay || 1000; //默认1s后执行
    let timer: any = null;
    return function (this: any, ...args: any) {
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fun.apply(context, args);
      }, delay);
    };
  },
  /**
   * 节流函数, 用于将多次执行变为每隔一段时间执行
   * @param fun 事件触发的操作
   * @param delay 间隔多少毫秒需要触发一次事件
   */
  throttle(fun: any, delay: any) {
    let timer: any = null;
    return function (this: any, ...args: any) {
      const context = this;
      if (!timer) {
        timer = setTimeout(function () {
          fun.apply(context, args);
          clearTimeout(timer);
          timer = null;
        }, delay);
      }
    };
  },
  /**
   * 字母大小写切换
   * @param str 要处理的字符串
   * @param type 1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
   */
  strChangeCase(str: string, type: 1 | 2 | 3 | 4 | 5) {
    function ToggleCase(str: string) {
      let itemText = '';
      str.split('').forEach(function (item) {
        if (/^([a-z]+)/.test(item)) {
          itemText += item.toUpperCase();
        } else if (/^([A-Z]+)/.test(item)) {
          itemText += item.toLowerCase();
        } else {
          itemText += item;
        }
      });
      return itemText;
    }

    switch (type) {
      case 1:
        return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
          v = v1.toUpperCase() + v2.toLowerCase();
          return v;
        });
      case 2:
        return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
          v = v1.toLowerCase() + v2.toUpperCase();
          return v;
        });
      case 3:
        return ToggleCase(str);
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        return str;
    }
  },
  /**
   * 检测密码强度
   * @param str 字符串
   * @returns 1：密码弱 2：密码中等 3：密码强 4：密码很强
   */
  checkPwd(str: string) {
    let nowLv = 0;
    if (str.length < 6) {
      return nowLv;
    }
    if (/[0-9]/.test(str)) {
      nowLv++;
    }
    if (/[a-z]/.test(str)) {
      nowLv++;
    }
    if (/[A-Z]/.test(str)) {
      nowLv++;
    }
    return nowLv;
  },
  /**
   * 浏览器全屏
   * @param eleId 需要全屏的元素，不传则全屏整个屏幕
   */
  reqFullScreen(eleId?: string) {
    const docElm: any =
      eleId && eleId.length > 0 ? document.getElementById(eleId) : document.documentElement;
    if (docElm.requestFullScreen) {
      docElm.requestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    }
  },
  /**
   * 浏览器退出全屏
   */
  exitFullScreen() {
    const docElm: any = document.documentElement;
    const doc: any = document;
    if (docElm.requestFullScreen) {
      doc.exitFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      doc.webkitCancelFullScreen();
    } else if (docElm.mozRequestFullScreen) {
      doc.mozCancelFullScreen();
    }
  },
  /**
   * 随机产生某个颜色
   * @returns 颜色 例：rgb(250,82,49)
   */
  randomColor() {
    return (
      'rgb(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ')'
    );
  },
  /**
   * 生成随机数{min~max:随机数范围，min必须小于max并且不能相等，fixed：保留几位小数}
   * @param min 范围最小值
   * @param max 范围最大值
   * @param fixed 保留几位小数
   */
  numberRandom(min: number, max: number, fixed = 0) {
    if (min > max || min === max) {
      throw new Error('请输入正确区间数字，min必须小于max');
    }

    const factor = Math.pow(10, fixed);
    return Math.floor(Math.random() * (max * factor - min * factor + 1) + min * factor) / factor;
  },
  /*
   *数字每千位加逗号
   */
  formatNumberWithCommas(num: number) {
    return num.toString().replace(/\d+/, function (s) {
      return s.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    });
  },
  /**
   * 数字转中文
   * @param num 数字
   * @param upperOrLower 'lower'：小写中文数字，'upper'：大写中文数字
   */
  formatNumberToChinese(num: number, upperOrLower: 'lower' | 'upper' = 'lower') {
    // 定义小写中文数字和单位
    let chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    let chineseUnits = ['', '十', '百', '千', '万', '十', '百', '千', '亿'];

    // 如果需要大写中文数字和单位
    if (upperOrLower === 'upper') {
      chineseNumbers = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
      chineseUnits = ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿'];
    }

    // 将数字转换为字符串，并分离整数部分和小数部分
    let numberString = num.toString();
    let [integerPart, decimalPart] = numberString.split('.');
    let integerArray = integerPart.split('').map(Number);

    // 构建整数部分的中文表示
    let chineseInteger = '';
    for (let i = 0; i < integerArray.length; i++) {
      let digit = integerArray[i];
      let unit = chineseUnits[integerArray.length - i - 1];
      if (digit === 0) {
        if (i !== integerArray.length - 1 && integerArray[i + 1] !== 0) {
          chineseInteger += chineseNumbers[digit];
        }
      } else {
        chineseInteger += chineseNumbers[digit] + unit;
      }
    }

    // 构建小数部分的中文表示
    let chineseDecimal = '';
    if (decimalPart) {
      let decimalArray = decimalPart.split('').map(Number);
      for (let i = 0; i < decimalArray.length; i++) {
        chineseDecimal += chineseNumbers[decimalArray[i]];
      }
    }

    // 拼接整数部分和小数部分的中文表示，并返回结果
    let result = chineseInteger + (decimalPart ? '点' + chineseDecimal : '');
    return result || '零';
  },
  /**
   * 检测文件名是否为图片
   * @param fileName
   */
  isImage(fileName: string) {
    return checkFileName(fileName, ['png', 'jpeg', 'jpg', 'png', 'bmp']);
  },
  /**
   * 检测文件名是否为视频
   * @param fileName
   */
  isH5Video(fileName: string) {
    return checkFileName(fileName, ['mp4', 'webm', 'ogg']);
  },
  /**
   * 检测文件名是否为PDF
   * @param fileName
   */
  isPdf(fileName: string) {
    return checkFileName(fileName, ['pdf']);
  },
  /**
   * 检测文件名是否为word
   * @param fileName
   */
  isWord(fileName: string) {
    return checkFileName(fileName, ['doc', 'docx']);
  },
  /**
   * 检测文件名是否为excel
   * @param fileName
   */
  isExcel(fileName: string) {
    return checkFileName(fileName, ['xlsx', 'xls', 'xlsm', 'xlsb', 'csv']);
  },
  /**
   * 获取一个随机的UUID
   */
  getUUID() {
    const timestamp = Date.now().toString(16); // 当前时间戳的十六进制表示
    const randomSegment = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

    return (
      timestamp.substring(0, 8) +
      '-' +
      randomSegment() +
      '-' +
      '4' +
      randomSegment().substring(0, 3) +
      '-' + // 确保第13位为4
      (8 + Math.floor(Math.random() * 4)).toString(16) +
      randomSegment().substring(0, 3) +
      '-' + // 确保第17位为8, 9, a, 或 b
      randomSegment() +
      randomSegment() +
      randomSegment()
    );
  }
};
/**
 * 默认常见小工具
 */
export default defaultUtils;
