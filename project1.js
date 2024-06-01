let nfts = [];

 
function mintNFT(currencyname, creator, dateReleased) {
     let nft = {
        currencyname: currencyname,
        creator: creator,
        dateReleased:  dateReleased
    };
    
     nfts.push(nft);
}

 function listNFTs() {
     for (let i = 0; i < nfts.length; i++) {
        console.log("Currency Name: " + nfts[i].currencyname);
        console.log("Creator: " + nfts[i].creator);
        console.log("Date Released: " + nfts[i].dateReleased);
     }
}

 function getTotalSupply() {
    return nfts.length;
}

mintNFT("Bitcoin","Satoshi Nakamoto","January 3, 2009");
mintNFT("Ethereum","Vitalik Buterin","July 30, 2015");
mintNFT("Dogecoin ","Billy Markus and Jackson Palmer","April 18, 2014");


 
listNFTs();
console.log("Total Supply: " + getTotalSupply());
