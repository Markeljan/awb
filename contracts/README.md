## Agents With Benefits Contracts

## Documentation

https://book.getfoundry.sh/

## Usage

### Install Foundry

```shell
$ curl -L https://foundry.paradigm.xyz | bash
# This will install Foundryup, then simply follow the instructions on-screen, which will make the foundryup command available in your CLI.
```

### Install Project Dependencies

```shell
$ forge install foundry-rs/forge-std --no-git
$ forge install OpenZeppelin/openzeppelin-contracts@v5.0.1 --no-git
```

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>

# deploy with wallet save
$ forge script --rpc-url $BASE_SEPOLIA_RPC --account awb --etherscan-api-key $BASE_SEPOLIA_API_KEY  --verify --broadcast -vvv script/AWBAgent.s.sol

```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
