// var statuses = ["All", "Not Started", "In Progress", "Need Assistance", "Deferred", "Completed"];

var statuses = ['Active', 'Inactive'];


//For My Promotions Grid
var promotions = [{"id":1,"Promotion Name":"Prodder","Approved":52,"Pending":85,"Needs Verification":7,"Points Awarded":2921,"Detail":"View Entered Sales"},
{"id":2,"Promotion Name":"Tin","Approved":93,"Pending":4,"Needs Verification":33,"Points Awarded":2596,"Detail":"View Entered Sales"},
{"id":3,"Promotion Name":"Toughjoyfax","Approved":88,"Pending":30,"Needs Verification":8,"Points Awarded":790,"Detail":"View Entered Sales"},
{"id":4,"Promotion Name":"Regrant","Approved":95,"Pending":22,"Needs Verification":33,"Points Awarded":1211,"Detail":"View Entered Sales"},
{"id":5,"Promotion Name":"Konklux","Approved":52,"Pending":60,"Needs Verification":9,"Points Awarded":5554,"Detail":"View Entered Sales"},
{"id":6,"Promotion Name":"Alpha","Approved":48,"Pending":46,"Needs Verification":68,"Points Awarded":1897,"Detail":"View Entered Sales"},
{"id":7,"Promotion Name":"Fixflex","Approved":5,"Pending":47,"Needs Verification":17,"Points Awarded":130,"Detail":"View Entered Sales"},
{"id":8,"Promotion Name":"Konklux","Approved":88,"Pending":27,"Needs Verification":56,"Points Awarded":5404,"Detail":"View Entered Sales"},
{"id":9,"Promotion Name":"Greenlam","Approved":45,"Pending":39,"Needs Verification":21,"Points Awarded":2600,"Detail":"View Entered Sales"},
{"id":10,"Promotion Name":"Kanlam","Approved":29,"Pending":43,"Needs Verification":75,"Points Awarded":1310,"Detail":"View Entered Sales"}
];


//My Account - Transaction History Grid

var transactionStatus = ['Award', 'Order'];

var transactionHistory = [{"id":1,"Date":"11/30/2017","Type":"Order","Description":"Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.","Amount":2783},
{"id":2,"Date":"10/14/2017","Type":"Order","Description":"Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.","Amount":4558},
{"id":3,"Date":"6/3/2018","Type":"Order","Description":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.","Amount":4443},
{"id":4,"Date":"8/10/2018","Type":"Order","Description":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","Amount":4244},
{"id":5,"Date":"5/21/2018","Type":"Award","Description":"Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.","Amount":1771}];


/*Promotion Detail Page */

//My Progress 
var progress = [{"id":1,"Approved":64,"Pending":60,"Needs Verification":77,"Recently Approved":344,"Recently Awarded Points":931,"Points Awarded":1665},
{"id":2,"Approved":87,"Pending":99,"Needs Verification":25,"Recently Approved":104,"Recently Awarded Points":937,"Points Awarded":2625},
{"id":3,"Approved":14,"Pending":70,"Needs Verification":58,"Recently Approved":274,"Recently Awarded Points":454,"Points Awarded":1878},
{"id":4,"Approved":15,"Pending":48,"Needs Verification":7,"Recently Approved":297,"Recently Awarded Points":1461,"Points Awarded":34},
{"id":5,"Approved":63,"Pending":2,"Needs Verification":63,"Recently Approved":52,"Recently Awarded Points":2267,"Points Awarded":806}];


var claimHistoryStatus = ["All", "Not Started", "In Progress", "Need Assistance", "Deferred", "Completed"];


//Claim History Table
var employees = [{
    "ID": 1,
    "Claim Date": "4/3/2018",
    "Quantity": 2,
    "Invoice": "12341234",
    "Status": "Approved",
    "Payout": 500,

    "Details": [{
        "ID": 5,
        "Claim ID": "KNH1234",
        "Product Code": "4/05/2018",
        "Quantity": 2,
        "Payout": 150,

    }, {
        "ID": 6,
        "Claim ID": "CDW1234",
        "Product Code": "2013/02/16",
        "Quantity": "2013/02/28",

        "Payout": 200,

    }, {
        "ID": 7,
        "Claim ID": "RSC1234",
        "Product Code": "2013/02/17",
        "Quantity": "2013/02/24",

        "Payout": 560

    }, {
        "ID": 22,
        "Claim ID": "EAW1234",
        "Product Code": "2013/03/14",
        "Quantity": "2013/03/16",

        "Payout": 600

    }, {
        "ID": 52,
        "Claim ID": "AMW1234",
        "Product Code": "2013/05/17",
        "Quantity": "2013/05/20",
        "Payout": 100

    }]
}, {
    "ID": 2,
    "Claim Date": "4/4/2018",
    "Quantity": 4,
    "Invoice": "12341235",
    "Status": "Needs Verification",

    "Details": [{
        "ID": 3,
        "Claim ID": "WTW1234",
        "Product Code": "2013/02/03",
        "Quantity": "2013/02/28",
        "Payout": 200

    }, {
        "ID": 4,
        "Claim ID": "TAW1234",
        "Product Code": "2013/02/12",
        "Quantity": "2013/04/25",
        "Payout": 300

    }, {
        "ID": 21,
        "Claim ID": "CLM1234",
        "Product Code": "2013/03/12",
        "Quantity": "2013/03/14",
        "Payout": 40

    }, {
        "ID": 50,
        "Claim ID": "WDW1234",
        "Product Code": "2013/05/05",
        "Quantity": "2013/05/15",
        "Payout": 200

    }]
}, {
    "ID": 3,
    "Claim Date": "4/5/2018",
    "Quantity": 9,
    "Invoice": "12341236",
    "Status": "Pending",

    "Details": [{
        "ID": 16,
        "Claim ID": "JLW1234",
        "Product Code": "2013/03/01",
        "Quantity": "2013/03/10",
        "Payout": 500

    }, {
        "ID": 74,
        "Claim ID": "SAW1234",
        "Product Code": "2013/07/30",
        "Quantity": "2013/08/02",
        "Payout": 30

    }, {
        "ID": 78,
        "Claim ID": "TOU1234",
        "Product Code": "2013/08/11",
        "Quantity": "2013/08/15",
        "Payout": 75

    }, {
        "ID": 117,
        "Claim ID": "SLK1234",
        "Product Code": "2014/01/11",
        "Quantity": "2014/01/31",
        "Payout": 125

    }]

}];
