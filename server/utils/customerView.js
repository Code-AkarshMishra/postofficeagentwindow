const { calculateMaturityDate, getPlanDurationMonths } = require("./maturity");

function toCustomerView(customer) {
  if (!customer) return null;

  const data = typeof customer.toObject === "function" ? customer.toObject() : { ...customer };
  const dueDate = data.dueDate || data.maturityDate || null;
  const durationMonths = getPlanDurationMonths(data.paidMonths);
  const maturityDate = calculateMaturityDate(dueDate, data.paidMonths, durationMonths);

  delete data.password;

  return {
    ...data,
    dueDate,
    durationMonths,
    maturityDate,
    status: Number(data.paidMonths) >= durationMonths ? "Completed" : "Running",
  };
}

module.exports = {
  toCustomerView,
};
