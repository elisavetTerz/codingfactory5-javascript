const stocks = { Apple: "APPL", Microsoft: "MSFT", Google: "GOOG" };
const portofolio = { APPL: 10, MSFT: 20, GOOG: 40 };

function addShares(portofolio, stock, shares) {
  portofolio[stock] += shares;
}

addShares(portofolio, stocks.Apple, 40);
addShares(portofolio, stocks.Google, 10);
