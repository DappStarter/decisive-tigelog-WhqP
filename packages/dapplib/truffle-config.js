require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind minor guess clock bridge soul'; 
let testAccounts = [
"0xf1bf9e64042ea2a463c4ca5265e0ff3cd6ab36031678843bd02cefc34411b6c2",
"0x079e9fb959e8d06631382e2bb0dd49450b7a27b78c9396cab70dee1d7c74b410",
"0xd42adf76dbc27f196bbc65b69b1154f1ef39a3a18a016b5146b0613d3a6739c7",
"0x797300bf13115697ba6618d26e24891609ef6b83808107295c50bee584dbdabd",
"0xe167631fc815e3db3363fa77815df85fac612329583fdc7536094b79e431f94f",
"0xb14301205eef53b0ca7ad31f98c83af889c672b29c657f104e0b120724a71ed8",
"0x8a03b9a5a05eb9678f110b9a188eead60a5f71b0b80edf8ae0232bf77d75c4b9",
"0x7f6212f4be1303b82570d87b151aa19210f62f2beff6f0961d8d04e4c1846a04",
"0x0fb947f6ad1fe50c4e3e86daf03a616ce35f946efb18e9eaac09dbaa323e67d9",
"0x1fef87a01fc382880c566be7edaa75850afa92ecbcc9f7b80b16ce6f0a477938"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


