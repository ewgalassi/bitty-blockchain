$(document).ready(function () {
    var customers = [];
    var blocks = [];
    blocks.map(function (trxn) {
        var td0 = $("<td>").text(trxn.index).attr("class", "cell");
        var td1 = $("<td>").text(trxn.previousHash).attr("class", "cell");
        var td2 = $("<td>").text(trxn.timestamp).attr("class", "cell");
        var td3 = $("<td>").text(trxn.transaction).attr("class", "cell");
        var td4 = $("<td>").text(trxn.hash).attr("class", "cell");
        var tr = $("<tr>" + td0 + td1 + td2 + td3 + td4 + "</tr>").attr("class", "row");
        $("#transactions tr:last").after(tr);
    });

    $("#newAccount").on("submit", function (event) {
        event.preventDefault();
        var username = $("#customer").val().trim();
        var customer = {
            username: username,
            quantityOwned: 0
        };
        customers = window.localStorage.getItem("customers");
        if (!customers.find(x => x.username === username)) {
            console.log("Created user", username);
            customers.append(customer);
        } else {
            var idx = customers.findIndex(x => x.username === username);
            customer = customers[idx];
        }
        $("#customerInfo").text("Hello, " + username + "! You currently have " + customer.quantityOwned + " PPcOIns").css("font-size", "24px").css("text-align", "right").css("padding-right", "150px");

        window.localStorage.setItem("customers", customers);
        window.localStorage.setItem("username", username);
        $("#customer").style("visibility", "hidden");
        $("#transaction").style("visibility", "visible");
    });
});
