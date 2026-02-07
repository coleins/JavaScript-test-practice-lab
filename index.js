function checkAge(age) {
  if (age >= 18) {
    return "Access granted.";
  } else {
    return "Access denied.";
  }
}
module.exports = {
  checkAge,
};
