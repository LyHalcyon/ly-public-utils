// 补零函数，用于将数字转换为两位数的字符串
export function padZero(num: number): string {
  return num < 10 ? '0' + num : String(num);
}

/**
 * 格式化时间
 * @param date 时间
 * @param returnDateType YMD:年月日 YM:年月 Y:年 M:月 D:日 HMS:时分秒 HM:时分
 */
export function formatDate(
  date: Date,
  returnDateType?: 'YMD' | 'YM' | 'Y' | 'M' | 'D' | 'HMS' | 'HM'
): string {
  const year: number = date.getFullYear();
  const month: string = padZero(date.getMonth() + 1);
  const day: string = padZero(date.getDate());
  const hour: string = padZero(date.getHours());
  const minute: string = padZero(date.getMinutes());
  const second: string = padZero(date.getSeconds());
  let timeString: string = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  switch (returnDateType) {
    case 'YMD':
      timeString = `${year}-${month}-${day}`;
      break;
    case 'YM':
      timeString = `${year}-${month}`;
      break;
    case 'Y':
      timeString = `${year}`;
      break;
    case 'M':
      timeString = `${month}`;
      break;
    case 'D':
      timeString = `${day}`;
      break;
    case 'HMS':
      timeString = `${hour}:${minute}:${second}`;
      break;
    case 'HM':
      timeString = `${hour}:${minute}`;
      break;
    default:
      break;
  }
  return timeString;
}
