let authenticationData = fetch("AuthAPI");
let cartData = fetch("CartAPI");

const renderHeader = () => {
  console.log("rendering header");
};

Promise.all([authenticationData, cartData]).then((x) => {
  renderHeader();
});
