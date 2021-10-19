const { expect } = require("chai"); // chai is lib for test in Js

describe("Token Contract", async () => {
  let Token, token, owner, addr1, addr2;
  beforeEach(async () => {
    Token = await ethers.getContractFactory("Token");
    token = await Token.deploy();
    [owner, addr1, addr2, ...addr] = await ethers.getSigners();
  });
  describe("Deployment", async () => {
    it("Should set the right owner", async function () {
      expect(await token.owner()).to.equal(owner.address);
    });

    it("should assign total supply to owner", async () => {
      const ownerBalance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });
  });
});
