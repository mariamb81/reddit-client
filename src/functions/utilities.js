export const base_url = "https://www.reddit.com";
//returns the time since the post was created and the time unit (hours, days, months, years)
export const isImage = (url) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
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
      val: Math.ceil(months),
      unit: unit,
    };
  } else if (hours >= 24) {
    unit = "day";
    const days = hours / 24;
    return {
      val: Math.round(days),
      unit: unit,
    };
  }
  else if(Math.round(hours) <= 0){
    unit = "minute"
    const minutes = timeDifference / 60;
    return {
      val: Math.round(minutes),
      unit: unit,
    };
  }
  else {
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
