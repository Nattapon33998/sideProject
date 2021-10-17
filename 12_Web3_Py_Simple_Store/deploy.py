from solcx import compile_standard

with open("./SimpleStorage.sol", "r") as file:
    simple_storage_file = file.read()
    # print(simple_storage_file)

compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"SimpleStorage.sol": {"content": simple_storage_file}},
        "setting": {
            "outputSelections": {
                "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sorceMap"]}
            }
        },
    },
    solc_version="0.6.0",
)

print(compiled_sol)
