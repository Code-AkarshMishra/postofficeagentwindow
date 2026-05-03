function getPlanDurationMonths(paidMonths) {
  return Number(paidMonths) < 60 ? 60 : 120;
}

function addMonths(date, months) {
  if (!date || Number.isNaN(date.getTime())) return null;

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const targetFirstDay = new Date(Date.UTC(year, month + months, 1));
  const targetLastDay = new Date(
    Date.UTC(targetFirstDay.getUTCFullYear(), targetFirstDay.getUTCMonth() + 1, 0)
  ).getUTCDate();

  targetFirstDay.setUTCDate(Math.min(day, targetLastDay));
  return targetFirstDay;
}

function calculateMaturityDate(dueDate, paidMonths, durationMonths) {
  if (!dueDate) return null;

  const due = dueDate instanceof Date ? dueDate : new Date(dueDate);
  if (Number.isNaN(due.getTime())) return null;

  const duration = durationMonths ?? getPlanDurationMonths(paidMonths);
  const remainingMonths = Math.max(Number(duration) - Number(paidMonths || 0), 0);
  return addMonths(due, remainingMonths);
}

function getCustomerProgress(paidMonths, dueDate) {
  const durationMonths = getPlanDurationMonths(paidMonths);

  return {
    durationMonths,
    maturityDate: calculateMaturityDate(dueDate, paidMonths, durationMonths),
    status: Number(paidMonths) >= durationMonths ? "Completed" : "Running",
  };
}

module.exports = {
  addMonths,
  calculateMaturityDate,
  getCustomerProgress,
  getPlanDurationMonths,
};
