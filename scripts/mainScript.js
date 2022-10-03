const { interface } = require("../scripts/interface")

async function main() {
    // Get an account to interact with the contract
    const { deployer } = await getNamedAccounts()
    // Get the contract to work with
    // Arguments: ABI, Address, Account
    const lendingPoolAddressesProvider = await ethers.getContractAt(
        "ILendingPoolAddressesProvider",
        "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
        deployer
    )
    // Run the "interface.js" script
    await interface()
}

// Call th main function and log errors if any occur
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
