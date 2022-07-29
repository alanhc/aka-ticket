
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";

const preferredNetwork =  NetworkType.MAINNET;
const options = {
    name: "NFT",
    iconUrl: "https://tezostaquito.io/img/favicon.png",
    preferredNetwork: preferredNetwork,
};
export const rpcURL = "https://mainnet-tezos.giganode.io";
export const wallet = new BeaconWallet(options);
const getActiveTezosAccount = async () => {
    return await wallet.client.getActiveAccount();
  };
const connectTezosWallet = async () => {
    let account = await wallet.client.getActiveAccount();
    if (!account) {
        await wallet.requestPermissions({
            network: { type: preferredNetwork },
        });
        account = await wallet.client.getActiveAccount();
    }
    return { success: true, wallet: account.address };
}
const disconnectTezosWallet = async () => {
    await wallet.clearActiveAccount();
    return { success: true, wallet: null };
};

const checkIfWalletConnected = async (wallet) => {
    try {
        const activeAccount = await wallet.client.getActiveAccount();
        if (!activeAccount) {
            await wallet.client.requestPermissions({
                type: { network: preferredNetwork },
            });
        }
        return {
            success: true,
        };
    } catch (error) {
        return {
            success: false,
            error,
        };
    }
};
export {
    connectTezosWallet,
    disconnectTezosWallet,
    getActiveTezosAccount,
    checkIfWalletConnected,
};
