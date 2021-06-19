const EthPriceOracle = artifacts.require("EthPriceOracle");

module.exports = async (deployer) =>{
  await deployer.deploy(EthPriceOracle);
  const ethPriceOracle = await EthPriceOracle.deployed()
  console.log("Oracle contract deployed to : ", ethPriceOracle.address)
};
