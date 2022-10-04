const { getNamedAccounts, ethers } = require("hardhat")

// 4. Use ethers.utils.parseEther to convert Ether to wei
// without worrying about 18 zeroes of wei
const AMOUNT = ethers.utils.parseEther("0.02")

async function main() {
    // 1. Get an account to interact with the contract
    const { deployer } = await getNamedAccounts()

    // 2. To call a contract you need:
    // ABI, Contract address and an Account to interact
    const iWeth = await ethers.getContractAt(
        "IWeth",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        deployer
    )

    // 3. Then you can call functions on that contract
    // Add {value: "Value"} after a function arguments
    // to send "Value" to a payable function
    const tx = await iWeth.deposit({ value: AMOUNT })
    // 5. Wait for a block to go through
    await tx.wait(1)
    // 6. Get the balanceOf the deployer's address
    // deposit on iWeth contract
    const wethBalance = await iWeth.balanceOf(deployer)
    // 7. Log to console
    console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = { interface }
