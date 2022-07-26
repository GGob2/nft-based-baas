pragma solidity ^0.8.15;

import './ERC721.sol';

contract ERC721Impl is ERC721 {
    function _mint(address to, uint256 tokenId) internal {
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _tokenOwner[tokenId] = to;
        

        emit Transfer(address(0), to, tokenId);
    }
}

contract CharactorByERC721 is ERC721Impl {
    struct Charactor {
        string name;
        uint256 level;
    }
    Charactor[] public charactors;
    address public owner;

    constructor () public {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(owner == msg.sender);
        _;
    }

    function mint(string memory name, address account) public isOwner {
        uint256 cardId = charactors.length;
        charactors.push(Charactor(name, 1));
        _mint(account, cardId);
    }
}