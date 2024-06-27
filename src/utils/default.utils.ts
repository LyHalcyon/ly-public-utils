export default {
  /**
   * 手机号校验
   * @param num
   */
  isPhone(num: any) {
    return /^1[2,3,4,5,7,8]\d{9}$/.test(num);
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
   * 首尾去空格
   * @param str
   */
  trim(str: any) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
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
  }
};
