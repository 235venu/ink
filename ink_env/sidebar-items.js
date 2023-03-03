window.SIDEBAR_ITEMS = {"enum":[["DefaultEnvironment","The fundamental types of the default configuration."],["Error","Errors that can be encountered upon environmental interaction."],["NoChainExtension","Placeholder for chains that have no defined chain extension."]],"fn":[["account_id","Returns the account ID of the executed contract."],["balance","Returns the balance of the executed contract."],["block_number","Returns the current block number."],["block_timestamp","Returns the current block timestamp."],["call_runtime","Tries to trigger a runtime dispatchable, i.e. an extrinsic from a pallet."],["caller","Returns the address of the caller of the executed contract."],["caller_is_origin","Checks whether the caller of the current contract is the origin of the whole call stack."],["clear_contract_storage","Clears the contract’s storage entry under the given storage key."],["code_hash","Retrieves the code hash of the contract at the specified account id."],["contains_contract_storage","Checks whether there is a value stored under the given storage key in the contract’s storage."],["debug_message","Appends the given message to the debug message buffer."],["decode_input","Returns the execution input to the executed contract and decodes it as `T`."],["ecdsa_recover","Recovers the compressed ECDSA public key for given `signature` and `message_hash`, and stores the result in `output`."],["ecdsa_to_eth_address","Returns an Ethereum address from the ECDSA compressed public key."],["emit_event","Emits an event with the given event data."],["gas_left","Returns the amount of gas left for the contract execution."],["get_contract_storage","Returns the value stored under the given storage key in the contract’s storage if any."],["hash_bytes","Conducts the crypto hash of the given input and stores the result in `output`."],["hash_encoded","Conducts the crypto hash of the given encoded input and stores the result in `output`."],["instantiate_contract","Instantiates another contract."],["invoke_contract","Invokes a contract message and returns its result."],["invoke_contract_delegate","Invokes a contract message via delegate call and returns its result."],["is_contract","Checks whether the specified account is a contract."],["minimum_balance","Returns the minimum balance that is required for creating an account (i.e. the chain’s existential deposit)."],["own_code_hash","Retrieves the code hash of the currently executing contract."],["return_value","Returns the value back to the caller of the executed contract."],["set_code_hash","Replace the contract code at the specified address with new code."],["set_contract_storage","Writes the value to the contract storage under the given storage key and returns the size of pre-existing value if any."],["take_contract_storage","Removes the `value` at `key`, returning the previous `value` at `key` from storage."],["terminate_contract","Terminates the existence of the currently executed smart contract."],["transfer","Transfers value from the contract to the destination account ID."],["transferred_value","Returns the transferred value for the contract execution."],["weight_to_fee","Returns the price for the specified amount of gas."]],"macro":[["debug_print","Appends a formatted string to the `debug_message` buffer if message recording is enabled in the contracts pallet and if the call is performed via RPC (not via an extrinsic). The `debug_message` buffer will be:"],["debug_println","Appends a formatted string to the `debug_message` buffer, as per [`debug_print`] but with a newline appended."],["pay_with_call","Prepend contract message call with value transfer. Used for tests in off-chain environment."]],"mod":[["call","Utilities to call or instantiate contracts on the chain."],["chain_extension","Definitions and utilities for calling chain extension methods."],["hash","Provides type definitions and traits for the built-in cryptographic hashes."],["test","Operations on the off-chain testing environment."]],"struct":[["CallFlags","The flags used to change the behavior of a contract call."],["ReturnFlags","The flags to indicate further information about the end of a contract execution."]],"trait":[["AccountIdGuard","A trait to enforce that a type should be an [`Environment::AccountId`]."],["ContractEnv","Stores the used host environment type of the ink! smart contract."],["ContractReference","Refers to the generated ink! smart contract reference type."],["Environment","The environmental types usable by contracts defined with ink!."],["FromLittleEndian","Allows to instantiate a type from its little-endian bytes representation."],["Topics","Implemented by event types to guide the event topic serialization using the topics builder."]],"type":[["Gas","The default gas type."],["Result","A result of environmental operations."]]};