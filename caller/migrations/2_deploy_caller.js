const CallerContract = artifacts.require("CallerContract");

module.exports = async (deployer) =>{
  await deployer.deploy(CallerContract);
  const callerContract = await CallerContract.deployed()
  console.log("Caller contract deployed to : ", callerContract.address)
};
