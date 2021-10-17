pragma solidity ^0.8.0;

contract Token {
    string public name = "My Hardhat token";
    string public symbol = "MHT";
    uint256 public totalSupply = 1000000;
    address owner;

    mapping(address => uint256) balance;

    constructor() {
        balance[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) public {
        require(
            balance[msg.sender] >= amount,
            "You don't have enought balance"
        );
        balance[msg.sender] -= amount;
        balance[to] += amount;
    }

    function balanceOf(address account) public view returns (uint256) {
        return balance[account];
    }
}
