
import { BeaconWallet } from "@taquito/beacon-wallet";

const preferredNetwork = "ithacanet";
const options = {
    name: "NFT",
    iconUrl: "https://tezostaquito.io/img/favicon.png",
    preferredNetwork: preferredNetwork,
};
const rpcURL = "https://ithacanet.smartpy.io/";
const wallet = new BeaconWallet(options);
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
    await wallet.disconnect();
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
