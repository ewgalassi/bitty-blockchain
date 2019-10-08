$(function () {
    $("#newAccount").on("submit", function (event) {
        event.preventDefault();
        var username = $("#customer").val().trim();

        var customer = {
            username: username
        };

        $.ajax("/api/customer", {
            type: "POST",
            data: customer
        }).then(
            function () {
                console.log("Created user", username);
            }
        );
        $("#customerInfo").text("Hello, " + username + "! You currently have 0 PPcOIns").css("font-size", "24px").css("text-align", "right").css("padding-right", "150px");

        window.localStorage.setItem("username", username);
        $("#newAccount").attr("id", "transaction");
        $("#customer").attr("type", "number").attr("placeholder", 0);
        $("#customerButton").attr("value", "Buy/Sell");
    });
});
// const $characterStock = $("#character-stock");
// const $customerButton = $("#customerButton");
// const $blockTable = $("#blockTable");
// var $customerInfo = $("#customerInfo");
// var $customer = $("#customer");
// var customer;
// var opponentId;
// var youId;
// var charId;

// var getBlockData = function () {
//     $.get("blockchain.accdb").then(function() {
//         refreshBlocks();
//     });
// };

// var customerCreator = function (event) {
//     event.preventDefault();
//     var username = $customer.val().trim();

//     API.getCustomer().then(function (data) {
//         customer = {
//             username: username,
//             quantityOwned: data.quantityOwned
//         };
//     // })
//     // $.get("/api/customer").then(function (data) {

//     });

//     window.localStorage.setItem("username", username);
//     window.localStorage.setItem("quantityOwned", "0");

//     $customerInfo.text("Hello, " + username + "!  You have 0 PPcOIns currently");
// };

// // copied functions *************************************************************** //

// var API = {
//     saveBlock: function (block) {
//         return $.ajax({
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             type: "POST",
//             url: "blockchain.accdb",
//             data: JSON.stringify(block)
//         });
//     },
//     getBlocks: function () {
//         return $.ajax({
//             url: "blockchain.accdb",
//             type: "GET"
//         });
//     },
//     saveCustomer: function (customer) {
//         return $.ajax({
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             type: "POST",
//             url: "blockchain.accdb",
//             data: JSON.stringify(customer)
//         });
//     },
//     getCustomer: function () {
//             return $.ajax({
//             url: "blockchain.accdb",
//             type: "GET"
//         });
//     },
//     updateCustomer: function (username) {
//         return $.ajax({
//             url: "blockchain.accdb",
//             type: "PUT"
//         });
//     }
// };

// // refreshBlocks gets new blocks from the db and repopulates the list
// var refreshBlocks = function () {
//     API.getBlocks().then(function (data) {
//         // console.log(data);

//         var $block = data.map(function (block) {

//             var $tr = $("<tr>")
//                 .append($("<td>").text(block.index))
//                 .append($("<td>").text(block.previousHash))
//                 .append($("<td>").text(block.timestamp))
//                 .append($("<td>").text(block.transaction))
//                 .append($("<td>").text(block.hash));

//             return $tr;

//         });

//         $blockTable.empty();
//         $blockTable.unshift($block);
//     });
// };

// // HANDLERS ***********************************************************

// $customerButton.on("click", customerCreator);

// $(document).ready(function () {

//     getBlockData();
   
// });