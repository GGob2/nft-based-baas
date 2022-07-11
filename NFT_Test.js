const Web3 = require('web3');
console.log('web3 할당 완료')

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('localhost 연결 완료')

web3.personal.unlockAccount(web3.eth.accounts[0], "1234");
console.log('계정 잠금 해제 완료')


const abi = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"create","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]'

const bin = '0x60806040523480156200001157600080fd5b506040518060400160405280600281526020017f4d4a0000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4a4d4a0000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000324565b508060019081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b6125c6806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a22cb46511610066578063a22cb4651461026f578063b88d4fde1461028b578063c87b56dd146102a7578063e985e9c5146102d7576100ea565b806370a08231146101f157806395d89b4114610221578063a15ab08d1461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611514565b610307565b604051610116919061155c565b60405180910390f35b6101276103e9565b6040516101349190611610565b60405180910390f35b61015760048036038101906101529190611668565b61047b565b60405161016491906116d6565b60405180910390f35b6101876004803603810190610182919061171d565b6104c1565b005b6101a3600480360381019061019e919061175d565b6105d8565b005b6101bf60048036038101906101ba919061175d565b610638565b005b6101db60048036038101906101d69190611668565b610658565b6040516101e891906116d6565b60405180910390f35b61020b600480360381019061020691906117b0565b610709565b60405161021891906117ec565b60405180910390f35b6102296107c0565b6040516102369190611610565b60405180910390f35b6102596004803603810190610254919061193c565b610852565b60405161026691906117ec565b60405180910390f35b610289600480360381019061028491906119c4565b6108a1565b005b6102a560048036038101906102a09190611aa5565b6108b7565b005b6102c160048036038101906102bc9190611668565b610919565b6040516102ce9190611610565b60405180910390f35b6102f160048036038101906102ec9190611b28565b6109be565b6040516102fe919061155c565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e182610a52565b5b9050919050565b6060600080546103f890611b97565b80601f016020809104026020016040519081016040528092919081815260200182805461042490611b97565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600061048682610abc565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104cc82610658565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361053c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053390611c3a565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661055b610b07565b73ffffffffffffffffffffffffffffffffffffffff16148061058a575061058981610584610b07565b6109be565b5b6105c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c090611ccc565b60405180910390fd5b6105d38383610b0f565b505050565b6105e96105e3610b07565b82610bc8565b610628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061f90611d5e565b60405180910390fd5b610633838383610c5d565b505050565b610653838383604051806020016040528060008152506108b7565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f790611dca565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610779576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077090611e5c565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107cf90611b97565b80601f01602080910402602001604051908101604052809291908181526020018280546107fb90611b97565b80156108485780601f1061081d57610100808354040283529160200191610848565b820191906000526020600020905b81548152906001019060200180831161082b57829003601f168201915b5050505050905090565b600061085e6006610ec3565b600061086a6006610ed9565b90506108768482610ee7565b826007600083815260200190815260200160002090816108969190612028565b508091505092915050565b6108b36108ac610b07565b83836110c0565b5050565b6108c86108c2610b07565b83610bc8565b610907576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fe90611d5e565b60405180910390fd5b6109138484848461122c565b50505050565b606060076000838152602001908152602001600020805461093990611b97565b80601f016020809104026020016040519081016040528092919081815260200182805461096590611b97565b80156109b25780601f10610987576101008083540402835291602001916109b2565b820191906000526020600020905b81548152906001019060200180831161099557829003601f168201915b50505050509050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ac581611288565b610b04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610afb90611dca565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b8283610658565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610bd483610658565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c165750610c1581856109be565b5b80610c5457508373ffffffffffffffffffffffffffffffffffffffff16610c3c8461047b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c7d82610658565b73ffffffffffffffffffffffffffffffffffffffff1614610cd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cca9061216c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d39906121fe565b60405180910390fd5b610d4d8383836112f4565b610d58600082610b0f565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610da8919061224d565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dff9190612281565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ebe8383836112f9565b505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4d90612323565b60405180910390fd5b610f5f81611288565b15610f9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f969061238f565b60405180910390fd5b610fab600083836112f4565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ffb9190612281565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110bc600083836112f9565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361112e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611125906123fb565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161121f919061155c565b60405180910390a3505050565b611237848484610c5d565b611243848484846112fe565b611282576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112799061248d565b60405180910390fd5b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b600061131f8473ffffffffffffffffffffffffffffffffffffffff16611485565b15611478578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611348610b07565b8786866040518563ffffffff1660e01b815260040161136a9493929190612502565b6020604051808303816000875af19250505080156113a657506040513d601f19601f820116820180604052508101906113a39190612563565b60015b611428573d80600081146113d6576040519150601f19603f3d011682016040523d82523d6000602084013e6113db565b606091505b506000815103611420576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114179061248d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061147d565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6114f1816114bc565b81146114fc57600080fd5b50565b60008135905061150e816114e8565b92915050565b60006020828403121561152a576115296114b2565b5b6000611538848285016114ff565b91505092915050565b60008115159050919050565b61155681611541565b82525050565b6000602082019050611571600083018461154d565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115b1578082015181840152602081019050611596565b838111156115c0576000848401525b50505050565b6000601f19601f8301169050919050565b60006115e282611577565b6115ec8185611582565b93506115fc818560208601611593565b611605816115c6565b840191505092915050565b6000602082019050818103600083015261162a81846115d7565b905092915050565b6000819050919050565b61164581611632565b811461165057600080fd5b50565b6000813590506116628161163c565b92915050565b60006020828403121561167e5761167d6114b2565b5b600061168c84828501611653565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116c082611695565b9050919050565b6116d0816116b5565b82525050565b60006020820190506116eb60008301846116c7565b92915050565b6116fa816116b5565b811461170557600080fd5b50565b600081359050611717816116f1565b92915050565b60008060408385031215611734576117336114b2565b5b600061174285828601611708565b925050602061175385828601611653565b9150509250929050565b600080600060608486031215611776576117756114b2565b5b600061178486828701611708565b935050602061179586828701611708565b92505060406117a686828701611653565b9150509250925092565b6000602082840312156117c6576117c56114b2565b5b60006117d484828501611708565b91505092915050565b6117e681611632565b82525050565b600060208201905061180160008301846117dd565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611849826115c6565b810181811067ffffffffffffffff8211171561186857611867611811565b5b80604052505050565b600061187b6114a8565b90506118878282611840565b919050565b600067ffffffffffffffff8211156118a7576118a6611811565b5b6118b0826115c6565b9050602081019050919050565b82818337600083830152505050565b60006118df6118da8461188c565b611871565b9050828152602081018484840111156118fb576118fa61180c565b5b6119068482856118bd565b509392505050565b600082601f83011261192357611922611807565b5b81356119338482602086016118cc565b91505092915050565b60008060408385031215611953576119526114b2565b5b600061196185828601611708565b925050602083013567ffffffffffffffff811115611982576119816114b7565b5b61198e8582860161190e565b9150509250929050565b6119a181611541565b81146119ac57600080fd5b50565b6000813590506119be81611998565b92915050565b600080604083850312156119db576119da6114b2565b5b60006119e985828601611708565b92505060206119fa858286016119af565b9150509250929050565b600067ffffffffffffffff821115611a1f57611a1e611811565b5b611a28826115c6565b9050602081019050919050565b6000611a48611a4384611a04565b611871565b905082815260208101848484011115611a6457611a6361180c565b5b611a6f8482856118bd565b509392505050565b600082601f830112611a8c57611a8b611807565b5b8135611a9c848260208601611a35565b91505092915050565b60008060008060808587031215611abf57611abe6114b2565b5b6000611acd87828801611708565b9450506020611ade87828801611708565b9350506040611aef87828801611653565b925050606085013567ffffffffffffffff811115611b1057611b0f6114b7565b5b611b1c87828801611a77565b91505092959194509250565b60008060408385031215611b3f57611b3e6114b2565b5b6000611b4d85828601611708565b9250506020611b5e85828601611708565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611baf57607f821691505b602082108103611bc257611bc1611b68565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c24602183611582565b9150611c2f82611bc8565b604082019050919050565b60006020820190508181036000830152611c5381611c17565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611cb6603e83611582565b9150611cc182611c5a565b604082019050919050565b60006020820190508181036000830152611ce581611ca9565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611d48602e83611582565b9150611d5382611cec565b604082019050919050565b60006020820190508181036000830152611d7781611d3b565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611db4601883611582565b9150611dbf82611d7e565b602082019050919050565b60006020820190508181036000830152611de381611da7565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611e46602983611582565b9150611e5182611dea565b604082019050919050565b60006020820190508181036000830152611e7581611e39565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611ede7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611ea1565b611ee88683611ea1565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611f25611f20611f1b84611632565b611f00565b611632565b9050919050565b6000819050919050565b611f3f83611f0a565b611f53611f4b82611f2c565b848454611eae565b825550505050565b600090565b611f68611f5b565b611f73818484611f36565b505050565b5b81811015611f9757611f8c600082611f60565b600181019050611f79565b5050565b601f821115611fdc57611fad81611e7c565b611fb684611e91565b81016020851015611fc5578190505b611fd9611fd185611e91565b830182611f78565b50505b505050565b600082821c905092915050565b6000611fff60001984600802611fe1565b1980831691505092915050565b60006120188383611fee565b9150826002028217905092915050565b61203182611577565b67ffffffffffffffff81111561204a57612049611811565b5b6120548254611b97565b61205f828285611f9b565b600060209050601f8311600181146120925760008415612080578287015190505b61208a858261200c565b8655506120f2565b601f1984166120a086611e7c565b60005b828110156120c8578489015182556001820191506020850194506020810190506120a3565b868310156120e557848901516120e1601f891682611fee565b8355505b6001600288020188555050505b505050505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612156602583611582565b9150612161826120fa565b604082019050919050565b6000602082019050818103600083015261218581612149565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006121e8602483611582565b91506121f38261218c565b604082019050919050565b60006020820190508181036000830152612217816121db565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061225882611632565b915061226383611632565b9250828210156122765761227561221e565b5b828203905092915050565b600061228c82611632565b915061229783611632565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156122cc576122cb61221e565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061230d602083611582565b9150612318826122d7565b602082019050919050565b6000602082019050818103600083015261233c81612300565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612379601c83611582565b915061238482612343565b602082019050919050565b600060208201905081810360008301526123a88161236c565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006123e5601983611582565b91506123f0826123af565b602082019050919050565b60006020820190508181036000830152612414816123d8565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612477603283611582565b91506124828261241b565b604082019050919050565b600060208201905081810360008301526124a68161246a565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006124d4826124ad565b6124de81856124b8565b93506124ee818560208601611593565b6124f7816115c6565b840191505092915050565b600060808201905061251760008301876116c7565b61252460208301866116c7565b61253160408301856117dd565b818103606083015261254381846124c9565b905095945050505050565b60008151905061255d816114e8565b92915050565b600060208284031215612579576125786114b2565b5b60006125878482850161254e565b9150509291505056fea2646970667358221220479c8a4864e390da884c79e391f58b1093607cc0f4aff2e7170145d4ba6b0f3764736f6c634300080f0033'

console.log('해당지점 통과 - 3')
const CommandContractFactory = web3.eth.contract(JSON.parse(abi));

console.log('해당지점 통과 - 4')


console.log("\n\n컨트랙트 배포를  시도합니다... ~~\n\n")
const startTime = Date.now();

const CommandContractInstance = CommandContractFactory.new({
    from: web3.eth.accounts[0],
    data : bin,
    gas: '9999999999'
}, 
     function (e,contract) {
        console.log(contract)
        if(e) {
             console.log("this is e~~~ : \n\n " + e);
         } 

         if(typeof contract.address !== 'undefined') {  
            const endTime = Date.now();

            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash)
            console.log("배포시작:  " + startTime  );
            console.log("배포 마무리:   " + endTime + "\n" (endTime - startTime)+"ms")
            console.log("총 소요시간 : " + ((endTime - startTime) / 1000) + "s")  
            
        }
    }

)


