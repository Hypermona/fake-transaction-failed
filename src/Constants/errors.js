const warning = "warning";

export default [
  {
    id: "error100",
    title: "Payment Failed",
    signal: "error",
    subtitle: "Oops! Something went wrong. (UPVD)",
    description:
      "lf your account has been debited with this charge, it will be refunded in 2-3 business days. Please contact your bank if the issue persists",
    buttons: ["Close"],
  },
  {
    id: "error101",
    title: "Payment Failed",
    signal: "error",
    subtitle: "Oops! Something went wrong.",
    description: null,
    buttons: ["Start again"],
  },
  {
    id: "error102",
    title: "Account error",
    signal: "error",
    subtitle: "Paymenl declined: try another bank account or call yourbank (U16)",
    description: null,
    buttons: ["Close"],
  },
  {
    id: "error103",
    title: "Bank server unavailable",
    signal: warning,
    subtitle: "lt looks like your uPl ID provider is temporarily not accepting payment requests.",
    description: null,
    buttons: ["Try again", "Change UPI ID"],
  },
  {
    id: "error104",
    title: " Payment failed",
    signal: "error",
    subtitle: "Oops! Something went wrong. (uo9)",
    description: "Any money deducted will be refunded in 3-5 working days",
    buttons: ["Close"],
  },
];
