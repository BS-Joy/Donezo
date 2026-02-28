export const formatAnalytics = (data, days = 7) => {
  const startDate = new Date(data[0].date); // first date from API
  const result = [];

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const dateStr = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const label = `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`;

    // Find if this date exists in API data
    const existing = data.find((item) => item.date === dateStr);

    result.push({
      date: dateStr,
      label,
      views: existing ? existing.views : 0,
    });
  }

  return result;
};
