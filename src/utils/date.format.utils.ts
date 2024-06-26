// 补零函数，用于将数字转换为两位数的字符串
export function padZero(num: number): string {
  return num < 10 ? '0' + num : String(num);
}

/**
 * 格式化时间
 * @param date 时间
 * @param returnDateType YYYY-MM-DD:年-月-日 YYYY-MM:年-月 YYYY:年 MM:月 DD:日 MM-DD:月-日 hh:mm:ss:时分秒 hh:mm:时分
 */
export function formatDate(
  date: Date,
  returnDateType?:
    | 'YYYY-MM-DD'
    | 'YYYY-MM'
    | 'YYYY'
    | 'MM'
    | 'DD'
    | 'MM-DD'
    | 'MM-DD hh:mm'
    | 'hh:mm:ss'
    | 'hh:mm'
): string {
  const year: number = date.getFullYear();
  const month: string = padZero(date.getMonth() + 1);
  const day: string = padZero(date.getDate());
  const hour: string = padZero(date.getHours());
  const minute: string = padZero(date.getMinutes());
  const second: string = padZero(date.getSeconds());
  let timeString: string = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  switch (returnDateType) {
    case 'YYYY-MM-DD':
      timeString = `${year}-${month}-${day}`;
      break;
    case 'YYYY-MM':
      timeString = `${year}-${month}`;
      break;
    case 'YYYY':
      timeString = `${year}`;
      break;
    case 'MM':
      timeString = `${month}`;
      break;
    case 'DD':
      timeString = `${day}`;
      break;
    case 'MM-DD':
      timeString = `${month}-${day}`;
      break;
    case 'MM-DD hh:mm':
      timeString = `${month}-${day} ${hour}:${minute}`;
      break;
    case 'hh:mm:ss':
      timeString = `${hour}:${minute}:${second}`;
      break;
    case 'hh:mm':
      timeString = `${hour}:${minute}`;
      break;
    default:
      break;
  }
  return timeString;
}
