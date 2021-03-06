pragma solidity ^0.8.0;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MJ", "MJMJ") {}

    mapping(uint => string) tokenURIs;

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
      return tokenURIs[tokenId]; 
    }

    function create(address to, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(to, newItemId);
        tokenURIs[newItemId] = tokenURI;

        return newItemId;
    }
}