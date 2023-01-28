var randomFixedInteger = function () {
  return Math.floor(
    Math.pow(10, 4 - 1) +
      Math.random() * (Math.pow(10, 4) - Math.pow(10, 4 - 1) - 1)
  );
};

const otp = randomFixedInteger().toString();

export default otp;
