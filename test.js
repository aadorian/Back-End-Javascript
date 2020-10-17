
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {

  const provider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider });

  const [chain, nodeName, nodeVersion,getBlock] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
    api.rpc.chain.getBlock(),

   
  ]);

  console.log(`BlockInfo ${getBlock} of ${nodeName} v${nodeVersion}`);


}

main().catch(console.error).finally(() => process.exit());