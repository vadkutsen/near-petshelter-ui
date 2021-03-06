import { keyStores, Near, WalletConnection, utils } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = process.env.VUE_APP_CONTRACT_ID;
const gas = new BN(process.env.VUE_APP_gas);


// new NEAR is used here to  awoid  async/await
export const near = new Near({
  networkId: process.env.VUE_APP_networkId,
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: process.env.VUE_APP_nodeUrl,
  walletUrl: process.env.VUE_APP_walletUrl,
});

export const wallet = new WalletConnection(near, "petshop");

//function to get all pets
export const getPets = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_pets");
};

//function to get total donations
export const getDonations = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_donations");
};

//function to add a pet
export const addPet = (pet) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "add_pet",
    args: {
      name: pet.name,
      picture: pet.picture,
      age: parseInt(pet.age),
      breed: pet.breed,
      location: pet.location,
    },
  });
};

//function to adopt a pet
export const adopt = (petId) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "adopt",
    args: {
      pet_id: parseInt(petId)},
  });
};

//function to donate
export const donate = (attachedDeposit) => {
  attachedDeposit = utils.format.parseNearAmount(attachedDeposit)
    return wallet.account().functionCall({
        contractId: CONTRACT_ID,
        methodName: "donate",
        attachedDeposit:attachedDeposit
    })
}
