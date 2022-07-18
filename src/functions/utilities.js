export const base_url = "https://www.reddit.com";
//returns the time since the post was created and the time unit (hours, days, months, years)
export const calculateTSC = (utc) => {
  let unit = "hour";
  const currUTC = new Date().getTime() / 1000;
  const timeDifference = currUTC - utc;
  const hours = timeDifference / 3600;
  if (hours >= 8760) {
    unit = "year";
    const years = hours / 8760;
    return {
      val: Math.round(years),
      unit: unit,
    };
  } else if (hours >= 730) {
    unit = "month";
    const months = hours / 8760;
    return {
      val: Math.round(months),
      unit: unit,
    };
  } else if (hours >= 24) {
    unit = "days";
    const days = hours / 24;
    return {
      val: Math.round(days),
      unit: unit,
    };
  } else {
    return {
      val: Math.round(hours),
      unit: unit,
    };
  }
};
export const formatTSC = (timeSinceCreated) => {
  const unit = timeSinceCreated.unit;
  const val = timeSinceCreated.val;
  return `${val} ${unit}${val > 1 ? "s " : " "}ago`;
};
