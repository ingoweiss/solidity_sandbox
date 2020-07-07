const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'initial blade chat armor betray oyster industry useless kitchen expose pledge bonus',
    'https://rinkeby.infura.io/v3/4c81f51ce4274c44bdb8658f4acb9920'
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(interface)
        .deploy({ data: bytecode, arguments: ['Hi there!']})
        .send({ from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to', result.options.address);
};
deploy()