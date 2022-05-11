import web3 from 'web3'
let hasProviderEnded = false;

export function newBlockchainConnection(webSocketProvider) {
	const web3Instant = new web3(webSocketProvider)
	window.web3 = web3Instant;
	hasProviderEnded = false;
	let provider = web3Instant.currentProvider;
	provider.on('connect', () => console.log("已连接"));
	provider.on('error', (err) => console.log('error', err));
	provider.on('chainChanged', (chainId) => {
		console.log('chainChanged', chainId)
	});
	provider.on('accountsChanged', (chainId) => {
		location.reload()
    localStorage.removeItem('sign')
		console.log('accountsChanged', chainId)
	});
	provider.on('disconnect', async () => {
		console.log("disconnect");
		if (hasProviderEnded) return;
		hasProviderEnded = true;
		provider.reset();
		// removing all the listeners of provider.
		provider.removeAllListeners("connect");
		provider.removeAllListeners("error");
		provider.removeAllListeners("chainChanged");
		provider.removeAllListeners("accountsChanged");
		provider.removeAllListeners("end");
	});
	return web3Instant;
}
