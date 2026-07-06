/**
 * 计算两个 ISO 时间字符串的毫秒差值
 * @param isoStr1 时间1
 * @param isoStr2 时间2
 * @returns 毫秒差（绝对值）
 */
export const getISODurationMs = (start: string, end: string) => {
  const startMs = new Date(start).getTime();
  const endMs = new Date(end).getTime();

  // 非法时间判断
  if (Number.isNaN(startMs) || Number.isNaN(endMs)) {
    throw new Error("传入的不是有效的 ISO 时间字符串");
  }

  return Math.abs(endMs - startMs);
};

const TimeNull = new Date("1000-01-01T00:00:00.000Z");
export const getTimeNull = () => TimeNull;
