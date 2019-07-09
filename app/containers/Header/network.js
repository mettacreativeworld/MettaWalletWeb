
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  'Ropsten Testnet': { rpc: 'https://ropsten.infura.io/v3/8835232ce9b445b5a441ed0efa7e9395', tx_explorer: 'https://ropsten.etherscan.io/tx/' },
  'Main Net': { rpc: 'https://mainnet.infura.io/v3/8835232ce9b445b5a441ed0efa7e9395', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
