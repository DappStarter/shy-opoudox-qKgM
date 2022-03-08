require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure ten alone rival museum upper coral light army gaze'; 
let testAccounts = [
"0x6c0a399bb76a823eaf081ba8f216731dc9b0e014d937bcb5884ccd2db4780016",
"0xc35654f7d9ab5113caa0a8a257ab6cf679c0687e81d5aaf2221d2bf00ddcae17",
"0x7526c64788a985c73cb95ae1071bbbbad98c1660572c7bfac7342a12eb928f34",
"0x60b12e24f280f87076ee54653f58b0d69dc2972fdc6c61f53e81806a6f57bafb",
"0xc9493ad2299db9107a9af852aefce17a93754db3f18db7752997bc0f689cefe2",
"0xcf12ecc3509294b19103933970c283de2c8e96b45b94bf2973438e218f300847",
"0x2a5bb68d3b5064b7e7c3b21f601820bdd8bed399fc5fe60d50ff410a02a49398",
"0x23376199cc5c2bc4173d884b708d42fa8695223cdf076dac3a4010f26e0600a3",
"0x857c29a3eb8c489bbaa30e264a96acc0b71b6a60c9ac1c815f850cafe2f0576a",
"0xc434a7206156cfb1b2108924ca407952a8641afcd546dd5dc46e16a3c7a6fba2"
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


