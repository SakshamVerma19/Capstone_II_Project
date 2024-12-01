const { ethers, hre } = require("hardhat");

async function main() {
  // Calling the contracts
  const Accounts = await ethers.getContractFactory("Accounts");
  const Items = await ethers.getContractFactory("Items");
  const TrackPharma = await ethers.getContractFactory("TrackPharma");

  // Deploy the contract
  const pharma = await TrackPharma.deploy("Team_29", "rohanbajaj712@gmail.com");

  await pharma.deployed();

  // Print the contract address
  console.log("TrackPharma deployed to:", pharma.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(10000);

  // Verify the TrackPharma contract after deploying
  console.log("Verifying TrackPharma on Etherscan...");
  await hre.run("verify:verify", {
    address: pharma.address,
    constructorArguments: ["Team_29", "rohanbajaj712@gmail.com"],
  });

  console.log("Verified TrackPharma ");
}

// Function to pause the execution for a specified time
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
