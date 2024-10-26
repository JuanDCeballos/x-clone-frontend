export const getEnvironments = () => {
  import.meta.env;
  return { ...import.meta.env };
};

export function GetTimeDifference(dateTimeString) {
  if(!dateTimeString)
    return undefined;

  const dateTime = new Date(dateTimeString);
  const now = new Date();
  const differenceInMs = now - dateTime;
  const differenceInHours = Math.floor(differenceInMs / (1000 * 60 * 60));

  if (differenceInHours >= 24) {
    const differenceInDays = Math.floor(differenceInHours / 24);
    return `${differenceInDays} ${differenceInDays === 1 ? "day" : "days"}`;
  } else {
    return `${differenceInHours} ${differenceInHours === 1 ? "hour" : "hours"}`;
  }
}