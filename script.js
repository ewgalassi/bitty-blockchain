$(document).ready(function () {
    var customers = [];
    var coins = [];
    var username;
    var quantityOwned = 0;
    var chainLength = 1;

    class Block { 
        constructor(index, timestamp, transaction, previousHash = "") { 
            this.index = index; 
            this.previousHash = previousHash; 
            this.timestamp = timestamp; 
            this.transaction = transaction; 
            this.hash = this.calculateHash(); 
        }
        calculateHash() {
            var str = String(this.index) + String(this.previoushash) + String(this.timestamp) + String(this.transaction);
            var hash = 0, i, chr;
            for (i = 0; i < str.length; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
            // return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString(); 
        } 
    };

    class Blockchain {
        //Section 1: Genesis block creation
        constructor() { 
            this.chain = [this.createGenesisBlock()]; 
        } 
        createGenesisBlock() {
            var date = new Date();
            return new Block(0, date, "Open", "0"); 
        } 
            
        //section 2: adding new blocks
        getLatestBlock() { 
            return this.chain[this.chain.length - 1]; 
        } 
        addBlock(newBlock) { 
            newBlock.previousHash = this.getLatestBlock().hash; 
            newBlock.hash = newBlock.calculateHash(); 
            this.chain.push(newBlock); 
        } 
        
        //section 3: validating the chain
        isChainValid() { 
            for (let i = 1; i < this.chain.length; i++) { 
                const currentBlock = this.chain[i]; 
                const previousBlock = this.chain[i - 1]; 
                if (currentBlock.hash !== currentBlock.calculateHash()) { 
                    return false; 
                } 
                if (currentBlock.previousHash !== previousBlock.hash) { 
                    return false; 
                } 
            } 
            return true; 
        } 
    };
  
    var Blockmx = new Blockchain();
    setTable();
  
    function setTable () {
        $(".row").remove();
        Blockmx.chain.map(function (trxn) {
            var td0 = $("<td class='cell'>" + trxn.index + "</td>");
            var td1 = $("<td class='cell'>" + trxn.previousHash + "</td>");
            var td2 = $("<td class='cell time'>" + trxn.timestamp + "</td>");
            var td3 = $("<td class='cell'>" + trxn.transaction + "</td>");
            var td4 = $("<td class='cell'>" + trxn.hash + "</td>");
            var tr = $("<tr class='row'></tr>");
            tr.append(td0);
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            $("#transactions tr:first").after(tr);
        });
    };

    $("#newAccount").on("submit", function (event) {
        event.preventDefault();
        username = $("#customer").val().trim();

        if (!customers || !customers.includes(username)) {
            console.log("Created user", username);
            customers.push(username);
            quantityOwned = 0;
            coins.push(0);
        } else {
            var idx = customers.indexOf(username);
            username = customers[idx];
            quantityOwned = coins[idx];
        }
        $("#customerInfo").text("Hello, " + username + "! You currently have " + quantityOwned + " PPcOIns").css("padding-right", "150px");
        $("#customerButton").attr("value", "Change user");
        $("#transaction").css("visibility", "visible");
    });

    $("#transaction").on("submit", function (event) {
        event.preventDefault();
        var quantity = $("#quantity").val().trim();
        quantityOwned += parseInt(quantity);
        console.log(quantityOwned);
        var idx = customers.indexOf(username);
        coins[idx] = quantityOwned;
        $("#customerInfo").text("Hello, " + username + "! You currently have " + quantityOwned + " PPcOIns").css("padding-right", "150px");
        var date = new Date();
        Blockmx.addBlock(new Block(chainLength, date, parseInt(quantity) + " traded"));
        if (!Blockmx.isChainValid()) {
            alert("Something went wrong with the blockchain");
        };
        chainLength++;
        setTable();
    });
});
