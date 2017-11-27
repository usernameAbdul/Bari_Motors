/*-----------------------login logout--------------------------*/

var apiPath = "http://52.187.168.31:3000/api/";
var count = 0;
var _session = $.session;

function login() {
    var data = {
        "username": $(username).val(),
        "password": $(password).val()
    }
    $.post(apiPath + "BariMotorUsers/login", data, function(success, status) {
        //console.log(success);   
        //$.session.set("myVar",$(username).val())       
        //$.session.set("status","true"); 
        localStorage.setItem("myVar", $(username).val());
        localStorage.setItem("status", "true");
        window.location = "index.html";

    });


}

function logOut() {
    localStorage.setItem("myVar", "");
    localStorage.setItem("status", "false");
}




/*function loggedOut(){
    console.log("here");
    console.log($);
    console.log($.session);
    $.session.set("myVar","");
    $.session.set("status","loggedOut");
    user ="";
}*/
/*------------------------------CREDIT MODAL--------------------------------------*/
$('#credit').on('hidden.bs.modal', function() {
    location.reload();
})
$('#debit').on('hidden.bs.modal', function() {
    location.reload();
})
$('#InvestorModal').on('hidden.bs.modal', function() {
    location.reload();
})
$('#SupplierModal').on('hidden.bs.modal', function() {
    location.reload();
})
$('#cars').on('hidden.bs.modal', function() {
    location.reload();
})
$('#carOld').on('hidden.bs.modal', function() {
    location.reload();
})
$('#customerModal').on('hidden.bs.modal', function() {
    location.reload();
})
$('#addAccount').on('hidden.bs.modal', function() {
    location.reload();
})



var count = 0;
var countCiBank = 0;
var countOBank = 0;
var countCar = 0;
var countCiCar = 0;
var countOCar = 0;

function countZero() {
    count = 0;
    countCiBank = 0;
    countOBank = 0;
    countCar = 0;
    countCiCar = 0;
    countOCar = 0;
    $('.cihCarRemove').hide();
    $('.ciCarRemove').hide();
    $('.oCarRemove').hide();
    $('.cihBankRemove').hide();
    $('.ciBankRemove').hide();
    $('.oBankRemove').hide();
}
$('#sel1').on('change', function() {
    var name = $('#sel1').val();
    if (name == "Car") {
        $('#carDiv').css('display', 'block');
        $('#bank').css('display', 'none');
        $('#investorDivCredit').css('display', 'none');
        $('#suppliersCar').css('display', 'none');
        $('#customerDiv').css('display', 'none');

    } else if (name == "Banks") {


        $('#carDiv').css('display', 'none');
        $('#bank').css('display', 'block');
        $('#investorDivCredit').css('display', 'none');
        $('#suppliersCar').css('display', 'none');
        $('#customerDiv').css('display', 'none');


    } else if (name == "Investment") {

        $('#investorDivCredit').css('display', 'block');
        $('#carDiv').css('display', 'none');
        $('#bank').css('display', 'none');
        $('#suppliersCar').css('display', 'none');
        $('#customerDiv').css('display', 'none');


    } else if (name == "Supplier") {
        $('#investorDivCredit').css('display', 'none');
        $('#carDiv').css('display', 'none');
        $('#bank').css('display', 'none');
        $('#suppliersCar').css('display', 'block');
        $('#customerDiv').css('display', 'none');

    } else if (name == "Customer") {
        console.log("inside customer")
        $('#investorDivCredit').css('display', 'none');
        $('#carDiv').css('display', 'none');
        $('#bank').css('display', 'none');
        $('#suppliersCar').css('display', 'none');
        $('#customerDiv').css('display', 'block');

    }
});


$('#sel2').on('change', function() {
    var name = $('#sel2').val();
    if (name == "Cheque") {
        $('.chequeChecked').css('display', 'block');
        $('.cashChecked').css('display', 'none');
        $('.onlineChecked').css('display', 'none');

    } else if (name == "Cheque Submission") {
        $('.cashChecked').css('display', 'block');
        $('.chequeChecked').css('display', 'none');
        $('.onlineChecked').css('display', 'none');
    } else if (name == "ATM") {
        $('.chequeChecked').css('display', 'none');
        $('.cashChecked').css('display', 'none');
        $('.onlineChecked').css('display', 'block');
    }
});

$('#sel3').on('change', function() {
    var name = $('#sel3').val();

    if (name == "Cheque") {
        $('.chequeChecked2').css('display', 'block');
        $('.cashChecked2').css('display', 'none');
        $('.onlineChecked2').css('display', 'none');

    } else if (name == "Cash In Hand") {

        $('.cashChecked2').css('display', 'block');
        $('.chequeChecked2').css('display', 'none');
        $('.onlineChecked2').css('display', 'none');
    } else if (name == "Online Payment") {

        $('.chequeChecked2').css('display', 'none');
        $('.cashChecked2').css('display', 'none');
        $('.onlineChecked2').css('display', 'block');
    }
});

$('.cihBankAdd').on('click', function() {
    count++;
    var html = '';
    html = "<div class=\"" + count + "\"><hr><div class=\"form-group\"><label for=\"usr\">Amount:</label><input type=\"text\" class=\"form-control\" id=\"usr\"> </div></div>"
    console.log(html);
    $('#bankDiv1').append(html);
    $('.cihBankRemove').show();

});

$('.cihBankRemove').on('click', function() {
    console.log("here");
    console.log($("." + count + ""));

    $("." + count + "").remove();
    count--;
    if (count == 0) {
        $('.cihBankRemove').hide();
    }

});

$('.ciBankAdd').on('click', function() {
    countCiBank++;
    var html = "<div class=\"" + countCiBank + "\"> <hr><div class=\"form-group\">"
    html += "  <label>Bank's list:</label>"
    html += "  <select class=\"form-control\">"
    html += "    <option>alHabib</option>"
    html += "    <option>blah</option>"
    html += "    <option>Others</option>"
    html += "  </select>"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Check No:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Account No:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Amount:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <div><label for=\"usr\">Status:</label></div>"
    html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"1\" name=\"option\">Paid </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"0\" name=\"option\">Unpaid</label>"
    html += "</div></div>";
    console.log(html);
    $('#bankDiv2').append(html);
    $('.ciBankRemove').show();
});
$('.ciBankRemove').on('click', function() {
    console.log("here");
    console.log(countCiBank);

    $("." + countCiBank + "").remove();
    countCiBank--;
    if (countCiBank == 0) {
        $('.ciBankRemove').hide();
    }

});

$('.oBankAdd').on('click', function() {
    countOBank++;
    var html = `<div class="${countOBank}">
	<hr>
	<div class="form-group">
      <label>Bank's list:</label>
      <select class="form-control">
        <option>alHabib</option>
        <option>blah</option>
        <option>Others</option>
      </select>
    </div>
    <div class="form-group">
      <label for="usr">Account No:</label>
      <input type="text" class="form-control" id="usr">
    </div>
    <div class="form-group">
      <label for="usr">Amount:</label>
      <input type="text" class="form-control" id="usr">
    </div>
  </div>`;
    console.log(html);
    $('#bankDiv3').append(html);
    $('.oBankRemove').show();

});
$('.oBankRemove').on('click', function() {
    console.log("online remove");

    $("." + countOBank + "").remove();
    countOBank--;
    if (countOBank == 0) {
        $('.oBankRemove').hide();
    }

});
/*--------------------------------------------*/

// $('.cihCarAdd').on('click', function() {
//     countCar++;
//     var html = '';
//     html = "<div class=\"c" + countCar + "\"><hr><div class=\"form-group\"><label for=\"usr\">Amount:</label><input type=\"text\" class=\"form-control\" id=\"usr\"> </div></div>"
//     console.log(html);
//     $('#carDiv1').append(html);
//     $('.cihCarRemove').show();

// });

// $('.cihCarRemove').on('click', function() {
//     console.log("here");

//     $(".c" + countCar + "").remove();
//     countCar--;
//     if (countCar == 0) {
//         $('.cihCarRemove').hide();
//     }

// });
function getBankListCredit() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListCredit' + countCiCar + '').append(html);

    });

}

// $(document).on('change', '#bankListCredit' + countCiCar + '', function() {
//     // Action goes here.
//     console.log($('#bankListCredit' + countCiCar + '').val());
// });
// $().on('change', function() {
//     $('#accountIdCredit' + countCiCar + '').html('');

//     $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListCredit' + countCiCar + '').val() + "", function(success) {

//         var html = '';
//         html += `<option>Select Account</option>`

//         success.forEach(function(ele) {

//             html += `<option>` + ele.AccountID + `</option>`
//         }, this)
//         $('#accountIdCredit' + countCiCar + '').append(html);
//     });


// });
function register(c) {
    $(`#bankListCredit${c}`).on('change', function() {
        $('#accountIdCredit' + countCiCar + '').html('');

        $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListCredit' + countCiCar + '').val() + "", function(success) {

            var html = '';
            html += `<option>Select Account</option>`

            success.forEach(function(ele) {

                html += `<option>` + ele.AccountID + `</option>`
            }, this)
            $('#accountIdCredit' + countCiCar + '').append(html);
        });
    });
}

function register2(c) {
    $('#accountIdCredit' + countCiCar + '').on('change', function() {

        $.get(apiPath + "Accounts?filter[where][AccountID]=" + $('#accountIdCredit' + countCiCar + '').val() + "", function(success) {
            var html = '';
            $('#accNoCredit' + countCiCar + '').val(success[0].AccountNo);
        });


    });
}
$('.ciCarAdd').on('click', function() {
    countCiCar++;
    getBankListCredit();

    var html = `<div class="ci${countCiCar}"><hr><div class="form-group">
    <label>Bank's list:</label>
    <select class="form-control" id="bankListCredit${countCiCar}">
<option>Select Bank</option>
</select>
</div>
<div class="form-group">
    <label>Account ID:</label>
    <select class="form-control" id="accountIdCredit` + countCiCar + `">
<option>Select Account</option>
</select>
</div>
<div class="form-group">
    <label for="usr">Account No:</label>
    <input type="text" class="form-control" id="accNoCredit` + countCiCar + `">
</div>
<div class="form-group">
    <label for="usr">Check No:</label>
    <input type="text" class="form-control" id="cNoCredit` + countCiCar + `">
</div>
<div class="form-group">
    <label for="usr">Amount:</label>
    <input type="text" class="form-control" id="chequeCreditAmount` + countCiCar + `">
</div></div>`
        // var html = "<div class=\"ci" + countCiCar + "\"> <hr><div class=\"form-group\">"
        // html += "  <label>Bank's list:</label>"
        // html += "  <select class=\"form-control\">"
        // html += "    <option>alHabib</option>"
        // html += "    <option>blah</option>"
        // html += "    <option>Others</option>"
        // html += "  </select>"
        // html += "</div>"
        // html += "<div class=\"form-group\">"
        // html += "  <label for=\"usr\">Check No:</label>"
        // html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
        // html += "</div>"
        // html += "<div class=\"form-group\">"
        // html += "  <label for=\"usr\">Account No:</label>"
        // html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
        // html += "</div>"
        // html += "<div class=\"form-group\">"
        // html += "  <label for=\"usr\">Amount:</label>"
        // html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
        // html += "</div>"
        // html += "<div class=\"form-group\">"
        // html += "  <div><label for=\"usr\">Status:</label></div>"
        // html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"1\" name=\"option\">Paid </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        // html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"0\" name=\"option\">Unpaid</label>"
        // html += "</div></div>";
    $('#carDiv2').append(html);
    $('.ciCarRemove').show();
    register(countCiCar);
    register2(countCiCar);
});
$('.ciCarRemove').on('click', function() {


    $(".ci" + countCiCar + "").remove();
    countCiCar--;
    if (countCiCar == 0) {
        $('.ciCarRemove').hide();
    }

});

function getBankListCreditOnline() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListCreditOnline' + countOCar).append(html);
    });

}

function register3(c) {
    $('#bankListCreditOnline' + c).on('change', function() {
        $('#accountIdCreditOnline').html('');
        var html = ''
        $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListCreditOnline' + c).val() + "", function(success) {




            success.forEach(function(ele) {

                html += `<option>` + ele.AccountID + `</option>`
            }, this)
            $('#accountIdCreditOnline' + c).append(html);
        });


    });
}

function register4(c) {
    $('#accountIdCreditOnline' + c).on('change', function() {

        $.get(apiPath + "Accounts?filter[where][AccountID]=" + $('#accountIdCreditOnline' + c).val() + "", function(success) {
            var html = '';
            $('#accNoCreditOnline' + c).val(success[0].AccountNo);
        });


    });
}
$('.oCarAdd').on('click', function() {
    countOCar++;
    getBankListCreditOnline();
    var html = `<div class="o${countOCar}">
	<hr>
	<div class="form-group">
    <label>Bank's list:</label>
    <select class="form-control" id="bankListCreditOnline${countOCar}">
<option>Select Bank</option>
</select>
</div>
<div class="form-group">
    <label>Account ID:</label>
    <select class="form-control" id="accountIdCreditOnline${countOCar}">
<option>Select Account</option>
</select>
</div>
<div class="form-group">
    <label for="usr">Account No:</label>
    <input type="text" class="form-control" id="accNoCreditOnline${countOCar}">
</div>
<div class="form-group">
    <label for="usr">Amount:</label>
    <input type="text" class="form-control" id="onlineCreditAmount${countOCar}">
</div>
  </div>`;

    $('#carDiv3').append(html);
    $('.oCarRemove').show();
    register3(countOCar);
    register4(countOCar);

});
$('.oCarRemove').on('click', function() {

    $(".o" + countOCar + "").remove();
    countOCar--;
    if (countOCar == 0) {
        $('.oCarRemove').hide();
    }

});
/*------------------------------DEBIT MODAL--------------------------------------*/

var dcount = 0;
var dcountCiBank = 0;
var dcountOBank = 0;
var dcountCar = 0;
var dcountCiCar = 0;
var dcountOCar = 0;
var expcount = 0;
var expcountCi = 0;
var expcountO = 0;

function dcountZero() {
    dcount = 0;
    dcountCiBank = 0;
    dcountOBank = 0;
    dcountCar = 0;
    dcountCiCar = 0;
    dcountOCar = 0;
    expcount = 0;
    expcountCi = 0;
    expcountO = 0;
    $('.dcihCarRemove').hide();
    $('.dciCarRemove').hide();
    $('.doCarRemove').hide();
    $('.dcihBankRemove').hide();
    $('.dciBankRemove').hide();
    $('.doBankRemove').hide();
    $('.expcihBankRemove').hide();
    $('.expciBankRemove').hide();
    $('.expoBankRemove').hide();
}
$('#dsel1').on('change', function() {
    var name = $('#dsel1').val();
    if (name == "Car") {
        $('#dcarDiv').css('display', 'block');
        $('#dbank').css('display', 'none');
        $('#expense').css('display', 'none');
        $('#investorDivDebit').css('display', 'none');
        $('#supplierDivDebit').css('display', 'none');
        $('#customerPaymentDebit').css('display', 'none');

    } else if (name == "Customer Payments") {


        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'none');
        $('#expense').css('display', 'none');
        $('#investorDivDebit').css('display', 'none');
        $('#supplierDivDebit').css('display', 'none');
        $('#customerPaymentDebit').css('display', 'block');

    } else if (name == "Banks") {


        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'block');
        $('#expense').css('display', 'none');
        $('#investorDivDebit').css('display', 'none');
        $('#supplierDivDebit').css('display', 'none');
        $('#customerPaymentDebit').css('display', 'none');

    } else if (name == "Expense") {


        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'none');
        $('#expense').css('display', 'block');
        $('#investorDivDebit').css('display', 'none');
        $('#supplierDivDebit').css('display', 'none');
        $('#customerPaymentDebit').css('display', 'none');

    } else if (name == "Investment") {

        $('#investorDivDebit').css('display', 'block');
        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'none');
        $('#expense').css('display', 'none');
        $('#supplierDivDebit').css('display', 'none');
        $('#customerPaymentDebit').css('display', 'none');

    } else if (name == "Supplier") {

        $('#investorDivDebit').css('display', 'none');
        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'none');
        $('#expense').css('display', 'none');
        $('#supplierDivDebit').css('display', 'block');
        $('#customerPaymentDebit').css('display', 'none');

    }
});
$('#exp').on('change', function() {
    var name = $('#exp').val();
    if (name == "Car Expense") {
        $('#expDiv1').css('display', 'block');
        $('#expDiv2').css('display', 'none');
        $('#expDiv3').css('display', 'none');
    } else if (name == "Home Expense") {


        $('#expDiv1').css('display', 'none');
        $('#expDiv2').css('display', 'block');
        $('#expDiv3').css('display', 'none');

    } else if (name == "Showroom Expense") {


        $('#expDiv1').css('display', 'none');
        $('#expDiv2').css('display', 'none');
        $('#expDiv3').css('display', 'block');

    }
});

$('#supplier2').on('change', function() {
    var name = $('#supplier2').val();
    if (name == "Cheque") {
        $('.sCihDebit').css('display', 'none');
        $('.sChequeDebit').css('display', 'block');
        $('.sOnlineDebit').css('display', 'none');

    } else if (name == "Cash In Hand") {
        $('.sCihDebit').css('display', 'block');
        $('.sChequeDebit').css('display', 'none');
        $('.sOnlineDebit').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log("inside banks");
        $('.sCihDebit').css('display', 'none');
        $('.sChequeDebit').css('display', 'none');
        $('.sOnlineDebit').css('display', 'block');
    }
});

$('#investment2').on('change', function() {
    var name = $('#investment2').val();
    if (name == "Cheque") {
        $('.iCihDebit').css('display', 'none');
        $('.iChequeDebit').css('display', 'block');
        $('.iOnlineDebit').css('display', 'none');

    } else if (name == "Cash In Hand") {
        $('.iCihDebit').css('display', 'block');
        $('.iChequeDebit').css('display', 'none');
        $('.iOnlineDebit').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log("inside banks");
        $('.iCihDebit').css('display', 'none');
        $('.iChequeDebit').css('display', 'none');
        $('.iOnlineDebit').css('display', 'block');
    }
});

$('#cpDebit').on('change', function() {
    var name = $('#cpDebit').val();
    if (name == "Cheque") {
        $('.cpCihDebit').css('display', 'none');
        $('.cpChequeDebit').css('display', 'block');
        $('.cpOnlineDebit').css('display', 'none');

    } else if (name == "Cash In Hand") {
        $('.cpCihDebit').css('display', 'block');
        $('.cpChequeDebit').css('display', 'none');
        $('.cpOnlineDebit').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log("inside banks");
        $('.cpCihDebit').css('display', 'none');
        $('.cpChequeDebit').css('display', 'none');
        $('.cpOnlineDebit').css('display', 'block');
    }
});

$('#cpCredit').on('change', function() {
    var name = $('#cpCredit').val();
    console.log(name);
    if (name == "Cheque") {
        console.log(name);
        $('#cpCihCredit').css('display', 'none');
        $('#cpChequeCredit').css('display', 'block');
        $('#cpOnlineCredit').css('display', 'none');

    } else if (name == "Cash In Hand") {
        console.log(name);
        $('#cpCihCredit').css('display', 'block');
        $('#cpChequeCredit').css('display', 'none');
        $('#cpOnlineCredit').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log(name);
        $('#cpCihCredit').css('display', 'none');
        $('#cpChequeCredit').css('display', 'none');
        $('#cpOnlineCredit').css('display', 'block');
    }
});
$('#spCredit').on('change', function() {
    var name = $('#spCredit').val();
    console.log(name);
    if (name == "Cheque") {
        console.log(name);
        $('#spCihCredit').css('display', 'none');
        $('#spChequeCredit').css('display', 'block');
        $('#spOnlineCredit').css('display', 'none');

    } else if (name == "Cash In Hand") {
        console.log(name);
        $('#spCihCredit').css('display', 'block');
        $('#spChequeCredit').css('display', 'none');
        $('#spOnlineCredit').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log(name);
        $('#spCihCredit').css('display', 'none');
        $('#spChequeCredit').css('display', 'none');
        $('#spOnlineCredit').css('display', 'block');
    }
});

$('#investment').on('change', function() {
    var name = $('#investment').val();
    if (name == "Cheque") {
        $('.iCihCredit').css('display', 'none');
        $('.iChequeCredit').css('display', 'block');
        $('.iOnlineCredit').css('display', 'none');

    } else if (name == "Cash In Hand") {
        $('.iCihCredit').css('display', 'block');
        $('.iChequeCredit').css('display', 'none');
        $('.iOnlineCredit').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log("inside banks");
        $('.iCihCredit').css('display', 'none');
        $('.iChequeCredit').css('display', 'none');
        $('.iOnlineCredit').css('display', 'block');
    }
});

$('#dsel2').on('change', function() {
    var name = $('#dsel2').val();
    console.log(name);
    if (name == "Cheque") {
        $('.dchequeChecked').css('display', 'block');
        $('.dcashChecked').css('display', 'none');
        $('.donlineChecked').css('display', 'none');

    } else if (name == "Cash In Hand") {
        console.log("inside banks");
        $('.dcashChecked').css('display', 'block');
        $('.dchequeChecked').css('display', 'none');
        $('.donlineChecked').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log("inside banks");
        $('.dchequeChecked').css('display', 'none');
        $('.dcashChecked').css('display', 'none');
        $('.donlineChecked').css('display', 'block');
    }
});

$('#dsel3').on('change', function() {
    var name = $('#dsel3').val();
    if (name == "Cheque") {
        $('.dchequeChecked2').css('display', 'block');
        $('.dcashChecked2').css('display', 'none');
        $('.donlineChecked2').css('display', 'none');

    } else if (name == "Cash In Hand") {

        $('.dcashChecked2').css('display', 'block');
        $('.dchequeChecked2').css('display', 'none');
        $('.donlineChecked2').css('display', 'none');
    } else if (name == "Online Payment") {

        $('.dchequeChecked2').css('display', 'none');
        $('.dcashChecked2').css('display', 'none');
        $('.donlineChecked2').css('display', 'block');
    }
});

$('.dcihBankAdd').on('click', function() {
    dcount++;
    var html = '';
    html = "<div class=\"d" + dcount + "\"><hr><div class=\"form-group\"><label for=\"usr\">Amount:</label><input type=\"text\" class=\"form-control\" id=\"usr\"> </div></div>"
    console.log(html);
    $('#dbankDiv1').append(html);
    $('.dcihBankRemove').show();

});

$('.dcihBankRemove').on('click', function() {
    console.log("here");
    console.log($("." + dcount + ""));

    $(".d" + dcount + "").remove();
    dcount--;
    if (dcount == 0) {
        $('.dcihBankRemove').hide();
    }

});

$('.dciBankAdd').on('click', function() {
    dcountCiBank++;
    var html = "<div class=\"d" + dcountCiBank + "\"> <hr><div class=\"form-group\">"
    html += "  <label>Bank's list:</label>"
    html += "  <select class=\"form-control\">"
    html += "    <option>alHabib</option>"
    html += "    <option>blah</option>"
    html += "    <option>Others</option>"
    html += "  </select>"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Check No:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Account No:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Amount:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <div><label for=\"usr\">Status:</label></div>"
    html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"1\" name=\"option\">Paid </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"0\" name=\"option\">Unpaid</label>"
    html += "</div></div>";
    console.log(html);
    $('#dbankDiv2').append(html);
    $('.dciBankRemove').show();
});
$('.dciBankRemove').on('click', function() {
    console.log("here");
    console.log(dcountCiBank);

    $(".d" + dcountCiBank + "").remove();
    dcountCiBank--;
    if (dcountCiBank == 0) {
        $('.dciBankRemove').hide();
    }

});

$('.doBankAdd').on('click', function() {
    dcountOBank++;
    var html = `<div class="d${dcountOBank}">
	<hr>
	<div class="form-group">
      <label>Bank's list:</label>
      <select class="form-control">
        <option>alHabib</option>
        <option>blah</option>
        <option>Others</option>
      </select>
    </div>
    <div class="form-group">
      <label for="usr">Account No:</label>
      <input type="text" class="form-control" id="usr">
    </div>
    <div class="form-group">
      <label for="usr">Amount:</label>
      <input type="text" class="form-control" id="usr">
    </div>
  </div>`;
    console.log(html);
    $('#dbankDiv3').append(html);
    $('.doBankRemove').show();

});
$('.doBankRemove').on('click', function() {
    console.log("donline remove");

    $(".d" + dcountOBank + "").remove();
    dcountOBank--;
    if (dcountOBank == 0) {
        $('.doBankRemove').hide();
    }

});
/*--------------------------------------------*/

$('.dcihCarAdd').on('click', function() {
    dcountCar++;
    var html = '';
    html = "<div class=\"cd" + dcountCar + "\"><hr><div class=\"form-group\"><label for=\"usr\">Amount:</label><input type=\"text\" class=\"form-control\" id=\"usr\"> </div></div>"
    console.log(html);
    $('#dcarDiv1').append(html);
    $('.dcihCarRemove').show();

});

$('.dcihCarRemove').on('click', function() {
    console.log("here");

    $(".cd" + dcountCar + "").remove();
    dcountCar--;
    if (dcountCar == 0) {
        $('.dcihCarRemove').hide();
    }

});

$('.dciCarAdd').on('click', function() {
    dcountCiCar++;
    var html = "<div class=\"cid" + dcountCiCar + "\"> <hr><div class=\"form-group\">"
    html += "  <label>Bank's list:</label>"
    html += "  <select class=\"form-control\">"
    html += "    <option>alHabib</option>"
    html += "    <option>blah</option>"
    html += "    <option>Others</option>"
    html += "  </select>"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Check No:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Account No:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Amount:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <div><label for=\"usr\">Status:</label></div>"
    html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"1\" name=\"option\">Paid </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"0\" name=\"option\">Unpaid</label>"
    html += "</div></div>";
    $('#dcarDiv2').append(html);
    $('.dciCarRemove').show();
});
$('.dciCarRemove').on('click', function() {


    $(".cid" + dcountCiCar + "").remove();
    dcountCiCar--;
    if (dcountCiCar == 0) {
        $('.dciCarRemove').hide();
    }

});

$('.doCarAdd').on('click', function() {
    dcountOCar++;
    var html = `<div class="od${dcountOCar}">
	<hr>
	<div class="form-group">
      <label>Bank's list:</label>
      <select class="form-control">
        <option>alHabib</option>
        <option>blah</option>
        <option>Others</option>
      </select>
    </div>
    <div class="form-group">
      <label for="usr">Account No:</label>
      <input type="text" class="form-control" id="usr">
    </div>
    <div class="form-group">
      <label for="usr">Amount:</label>
      <input type="text" class="form-control" id="usr">
    </div>
  </div>`;
    console.log(html);
    $('#dcarDiv3').append(html);
    $('.doCarRemove').show();

});
$('.doCarRemove').on('click', function() {

    $(".od" + dcountOCar + "").remove();
    dcountOCar--;
    if (dcountOCar == 0) {
        $('.doCarRemove').hide();
    }

});
/*
-------------------------------------------------------------*/

$('#expCash').on('change', function() {
    var name = $('#expCash').val();
    console.log(name);
    if (name == "Cheque") {
        $('.expchequeChecked').css('display', 'block');
        $('.expcashChecked').css('display', 'none');
        $('.exponlineChecked').css('display', 'none');

    } else if (name == "Cash In Hand") {
        console.log("inside banks");
        $('.expcashChecked').css('display', 'block');
        $('.expchequeChecked').css('display', 'none');
        $('.exponlineChecked').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log("inside banks");
        $('.expchequeChecked').css('display', 'none');
        $('.expcashChecked').css('display', 'none');
        $('.exponlineChecked').css('display', 'block');
    }
});
$('.expcihBankAdd').on('click', function() {
    expcount++;
    var html = '';
    console.log("exp CIH div")
    html = "<div class=\"exp" + expcount + "\"><hr><div class=\"form-group\"><label for=\"usr\">Amount:</label><input type=\"text\" class=\"form-control\" id=\"usr\"> </div></div>"
    console.log(html);
    $('#expbankDiv1').append(html);
    $('.expcihBankRemove').show();

});

$('.expcihBankRemove').on('click', function() {

    $(".exp" + expcount + "").remove();
    expcount--;
    if (expcount == 0) {
        $('.expcihBankRemove').hide();
    }

});

$('.expciBankAdd').on('click', function() {
    expcountCi++;
    var html = "<div class=\"expci" + expcountCi + "\"> <hr><div class=\"form-group\">"
    html += "  <label>Bank's list:</label>"
    html += "  <select class=\"form-control\">"
    html += "    <option>alHabib</option>"
    html += "    <option>blah</option>"
    html += "    <option>Others</option>"
    html += "  </select>"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Check No:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Account No:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <label for=\"usr\">Amount:</label>"
    html += "  <input type=\"text\" class=\"form-control\" id=\"usr\">"
    html += "</div>"
    html += "<div class=\"form-group\">"
    html += "  <div><label for=\"usr\">Status:</label></div>"
    html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"1\" name=\"option\">Paid </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    html += "  <label class=\"radio-inline\"><input type=\"radio\"  value=\"0\" name=\"option\">Unpaid</label>"
    html += "</div></div>";
    console.log(html);
    $('#expbankDiv2').append(html);
    $('.expciBankRemove').show();
});
$('.expciBankRemove').on('click', function() {

    $(".expci" + expcountCi + "").remove();
    expcountCi--;
    if (expcountCi == 0) {
        $('.expciBankRemove').hide();
    }

});

$('.expoBankAdd').on('click', function() {
    expcountO++;
    var html = `<div class="expo${expcountO}">
	<hr>
	<div class="form-group">
      <label>Bank's list:</label>
      <select class="form-control">
        <option>alHabib</option>
        <option>blah</option>
        <option>Others</option>
      </select>
    </div>
    <div class="form-group">
      <label for="usr">Account No:</label>
      <input type="text" class="form-control" id="usr">
    </div>
    <div class="form-group">
      <label for="usr">Amount:</label>
      <input type="text" class="form-control" id="usr">
    </div>
  </div>`;
    console.log(html);
    $('#expbankDiv3').append(html);
    $('.expoBankRemove').show();

});
$('.expoBankRemove').on('click', function() {

    $(".expo" + expcountO + "").remove();
    expcountO--;
    if (expcountO == 0) {
        $('.expoBankRemove').hide();
    }

});
$('#oldCar').hide();
$('.checkCar').on('click', function() {
    var radio = $("input[name='optradio']:checked").val();
    if (radio == "new") {
        $('#new').css('display', 'block');
        $('#old').css('display', 'none');
        $('#oldCar').hide();
        $('#newCar').show();
    }
    if (radio == "old") {
        $('#old').css('display', 'block');
        $('#new').css('display', 'none');
        $('#oldCar').show();
        $('#newCar').hide();

    }


});
$('#sup').on('change', function() {
    var name = $('#sup').val();
    if (name == "Pay Supplier") {
        $("#paySupplier").css("display", "block")
        $("#saleCar").css("display", "none")
    } else if (name == "Sale Car") {
        $("#paySupplier").css("display", "none")
        $("#saleCar").css("display", "block")
    }
});
/*----------------------------------API CALLS*---------------------------------------*/
function expenseCount() {
    $.get(apiPath + "Expenses/GetExpensesCount", function(success) {
        $("#displayExpenses").html("Rs." + success);
    })
}

function addOldCar() {
    var date = new Date('' + $("#oldCarDate").val() + '');
    var newDate = date.toString('dd/MM/yyyy');

    var data = {
            "CarID": $("#olDcarId").val(),
            "DO": "1122",
            "Make": $("#olDcarMake").val(),
            "MYear": $("#manufactureYearOld").val(),
            "Model": $("#olDcarModel").val(),
            "Color": $("#olDcarColor").val(),
            "EngineNo": $("#olDcarEng").val(),
            "ChasisNo": $("#olDchNo").val(),
            // "ProfitMargin": $("#olDpm").val(),
            "PurchasePrice": newDate,
            //"SalePrice": $("#olDsp").val(),
            "PurchaseDate": new Date(),
            "CarCondition": "Old",
            "CarNumber": $("#Cn").val(),
            "Milage": $("#Mil").val(),
            "RegistrationStatus": $("input[name='status']:checked").val(),
            "Grade": $("#Grade").val(),
            "AddedBy": localStorage.getItem("myVar"),
            "Remarks": $("#olDremarks").val()

        }
        //console.log(data)
        //console.log("@ addCar")
        /*toastr.success("Car Added <a href='index.html'><strong>Go To Index</a></strong>")*/
    $.post(apiPath + "Cars", data, function(data, status) {
        location.reload();
        toastr.success("Old Car Added <a href='index.html'><strong>Go To Index</a></strong>");
        console.log(data);
    });
}

function addCar() {
    var date = new Date('' + $("#carDate").val() + '');
    var newDate = date.toString('dd/MM/yyyy');
    var data = {
            "CarID": $("#carId").val(),
            "DO": "1122",
            "Make": $("#carMake").val(),
            "Model": $("#carModel").val(),
            "MYear": $("#manufactureYear").val(),
            "Color": $("#carColor").val(),
            "EngineNo": $("#carEng").val(),
            "ChasisNo": $("#chNo").val(),
            // "ProfitMargin": $("#pm").val(),
            "PurchasePrice": $("#pp").val(),
            "PurchaseDate": newDate,
            "CarCondition": "New",
            "AddedBy": localStorage.getItem("myVar"),
            "RegistrationStatus": "Unregistered",
            "Remarks": $("#carRemarks").val()

        }
        //console.log("@ addCar")
        /*toastr.success("Car Added <a href='index.html'><strong>Go To Index</a></strong>")*/
    $.post(apiPath + "Cars", data, function(data, status) {

        location.reload();
        toastr.success("Car Added <a href='index.html'><strong>Go To Index</a></strong>");
        // console.log(data);
    });
}

function getOldCar() {
    $.get(apiPath + "Cars?filter[where][CarCondition]=Old", function(success, status) {
        var html = '';

        success.forEach(function(ele) {
            /* if(!ele.InvestorID){
               investor= "Unassigned";
               }
               else
               {
                   investor= ele.InvestorID;
               }
               if(!ele.SaleDate){
               ele.SaleDate= "00-00-00";
               }*/


            html += '<tr>' +
                '<td>' + ele.CarID + '</td><td>' + ele.Make + '</td> <td>' + ele.Color + '</td> <td>' + ele.ChasisNo + '</td> <td>' + ele.EngineNo + '</td> <td>' + ele.PurchasePrice + '</td><td>' + ele.PurchaseDate + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a></td></tr>'

        }, this)

        $('#tableBodyOldCar').append(html);


    });
}

function getCreditTransaction() {
    $.get(apiPath + "Transactions?filter[where][Type]=Credit", function(success, status) {
        var html = '';


        success.forEach(function(ele) {
            html += '<tr>' +
                '<td>' + ele.Reason + '</td><td>' + ele.DO + '</td> <td>' + ele.Amount + '</td>'
        }, this)

        $('#creditTable').append(html);


    });
}

function getDebitTransaction() {
    $.get(apiPath + "Transactions?filter[where][Type]=Debit", function(success, status) {
        var html = '';


        success.forEach(function(ele) {
            html += '<tr>' +
                '<td>' + ele.Reason + '</td><td>' + ele.DO + '</td> <td>' + ele.Amount + '</td>'
        }, this)

        $('#debitTable').append(html);


    });
}

function chequeChecked(ele) {
    $.get(apiPath + "DayBooks/chequeClearance?ChequeNo=" + ele + "", function(success) {
        location.reload();
    });

}

function getPendingCheque() {
    $.get(apiPath + "Transactions?filter[where][PaidStatus]=false", function(success, status) {
        var html = '';


        success.forEach(function(ele) {


            html += '<tr>' +
                '<td>' + ele.PaymentAccount + '</td><td>' + ele.ChequeNo + '</td> <td><div class=\"checkbox red\"><label><input type=\"checkbox\" value=\"check\" onchange=\"chequeChecked(' + ele.ChequeNo + ')\"> </label> </div></td><td>' + ele.Date + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a></td></tr>'
        }, this)

        $('#tableBodyPendingCheque').append(html);


    });
}

function getCar() {
    $.get(apiPath + "Cars?filter[where][CarCondition]=New", function(success, status) {
        var html = '';


        success.forEach(function(ele) {
            var investor = "";
            /*if(!ele.InvestorID){
 			investor= "Unassigned";
			}
			else
			{
				investor= ele.InvestorID;
			}*/
            if (!ele.SaleDate) {
                ele.SaleDate = "00-00-00";
            }
            html += '<tr>' +
                '<td>' + ele.CarID + '</td><td>' + ele.Make + '</td> <td>' + ele.Color + '</td> <td>' + ele.ChasisNo + '</td> <td>' + ele.EngineNo + '</td> <td>' + ele.PurchasePrice + '</td><td>' + ele.PurchaseDate + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a></td></tr>'
        }, this)

        $('#tableBody').append(html);


    });
}

function addSupplier() {
    // var radio = $("input[name='type']:checked").val();
    var date = new Date('' + $("#supDate").val() + '');
    var newDate = date.toString('dd/MM/yyyy');
    var data = {
        "SupplierID": $("#supId").val(),
        "ShowRoomName": $("#supName").val(),
        "ContactNo": $("#supCno").val(),
        // "Payable": $("#supPayable").val(),
        "Balance": $("#supReceivable").val(),
        "AddedDate": newDate,
        "AddedBy": localStorage.getItem("myVar")


    }

    $.post(apiPath + "Suppliers", data, function(success, status) {
        console.log(success);
        location.reload();
    });

}

function getSupplierlist() {
    $.get(apiPath + "Suppliers", function(success, status) {
        var html;
        success.forEach(function(ele) {
            html += `<option>` + ele.SupplierID + `</option>`
        }, this)

        $('#debitSupplier').append(html);
        $('#creditSup').append(html);
        $('#spListCreditCheque').append(html);
        $('#spListCreditOnline').append(html);
        $('#spListCredit').append(html);
    });
}

function getSupplier() {
    $.get(apiPath + "Suppliers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += '<tr>' + '<td>' + ele.SupplierID + '</td><td>' + ele.ShowRoomName + '</td><td>' + ele.ContactNo + '</td><td>' + ele.AddedBy + '</td><td>' + ele.Balance + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a></td></tr>'
        }, this)

        $('#tableBodySupplier').append(html);
    });
}

function addInvestor() {
    // var radio = $("input[name='type']:checked").val();

    var date = new Date('' + $("#inDate").val() + '');
    var newDate = date.toString('dd/MM/yyyy');
    var data = {
        "InvestorID": $("#inId").val(),
        "Name": $("#inName").val(),
        "ContactNo": $("#inCno").val(),
        "Balance": $("#inInvestment").val(),
        "AddedDate": newDate,
        // "Payable": $("#inPayable").val(),
        // "Receivable": $("#inReceivable").val(),
        "AddedBy": localStorage.getItem("myVar"),
        "Type": "Investor"
    }

    $.post(apiPath + "Investors", data, function(success, status) {
        location.reload();
    });

}

function getInvestor() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += '<tr>' + '<td>' + ele.InvestorID + '</td><td>' + ele.Name + '</td><td>' + ele.ContactNo + '</td><td>' + ele.Type + '</td><td>' + ele.Investment + `</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a> <a href="#" onclick="viewInvestor('${ele.InvestorID}')"><u><small>view more</small></a></u></td></tr>`

        }, this)

        $('#tableBodyInvestor').append(html);
    });
}

function viewSupplier(ele) {
    localStorage.setItem("supplierID", ele);
    window.location = "supplierView.html";
}

function viewInvestor(ele) {
    localStorage.setItem("investorID", ele);
    window.location = "viewMore.html";
}

function getInvestorView(id) {

    $.get(apiPath + "Investors?filter[where][InvestorID]=" + id, function(success, status) {
        success.forEach(function(ele) {
            $("#investorHeading").html(ele.InvestorID + " <small>Control panel</small>");
            $("#viewInvestment").html("<b>Balance</b> :" + ele.Investment);

        });
    });


}

function displayCash() {
    $.get(apiPath + "Accounts?filter[where][AccountID]=1", function(success) {
        $("#displayCash").html("Rs. " + success[0].Balance);
    });
}

function getCihData() {
    $.get(apiPath + "Transactions?filter[where][Via]=Cash", function(success) {
        if (success.length == 0) {
            toastr.error("No Entries Yet");
        }
        success.forEach(function(ele) {

            html = `<tr><td>${ele.RF}</td> <td>${ele.Reason}</td> <td>${ele.Type}</td> <td>${ele.Date}</td> <td>${ele.Amount}</td><td>${ele.AddedBy}</td></tr>`
            $('#cihTable').append(html);
        });
    });
}

function getAccountDetailId(id) {
    localStorage.setItem("account", id);
    window.location = "accountsDetail.html";
}

function generateAccountDiv() {
    $.get(apiPath + "Accounts", function(success) {

        success.forEach(function(ele) {
            if (ele.BankName != "Cash In Hand" && ele.BankName != "Profit Loss") {
                html = `<div class="col-lg-3 col-xs-6 ">
            <!-- small box -->
            <div class="small-box bg-yellow ">
                <div class="inner ">
                    <h3>Rs. ${ele.Balance}</h3>
                    <h4><b>${ele.BankName}</b> : ${ele.AccountID}</h4>
                </div>
                <div class="icon ">
                    <i class="fa fa-university "></i>
                </div>
                <a href="#" class="small-box-footer" onclick="getAccountDetailId('${ele.AccountID}')">More info <i class="fa fa-arrow-circle-right "></i></a>
            </div>
        </div>`
                $('#allBanks').append(html);



            }
        });
    });
}

// function getAccountData(id) {
//     $.get(apiPath + "Transactions?filter[where][PaymentAccount]=" + id, function(success) {
//         if (success.length == 0) {
//             toastr.error("No Entries Yet");
//         }
//         success.forEach(function(ele) {

//             html = `<tr><td>${ele.RF}</td> <td>${ele.Reason}</td> <td>${ele.Type}</td> <td>${ele.Date}</td> <td>${ele.Amount}</td><td>${ele.AddedBy}</td></tr>`
//             $('#viewAccountTable').append(html);
//       });
//         $("#AccountIdIs").html("AccountID : " + id);
//     });
// }

function addCustomer() {
    var date = new Date('' + $("#custDate").val() + '');
    var newDate = date.toString('dd/MM/yyyy');
    var data = {
        "CustomerID": $("#custId").val(),
        "Name": $("#custName").val(),
        "FatherName": $("#custFName").val(),
        "ContactNo": $("#custCno").val(),
        "Address": $("#custAddress").val(),
        // "Payable": $("#custPayable").val(),
        "Balance": $("#custReceivable").val(),
        "AddedDate": newDate,
        "AddedBy": localStorage.getItem("myVar"),
        "CNIC": $("#custCnic").val()
    }

    $.post(apiPath + "Customers", data, function(success, status) {
        location.reload();
    });
}

function getCustomer() {
    $.get(apiPath + "Customers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += ` <tr>  <td>  ${ele.CustomerID}  </td><td> ${ ele.Name}  </td><td>  ${ele.FatherName}  </td><td>  ${ele.ContactNo}  </td><td>  ${ele.Address}  </td><td>  ${ele.CNIC}  </td><td>  ${ele.Balance}  </td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> <a href="#" onclick="setCustId('${ele.CustomerID}')"><span><small><u>view more</u></small></span> </a></td></tr>`
        }, this)

        $('#tableBodyCustomer').append(html);
    });
}
$('#whosCarSelect').on('change', function() {
    var name = $('#whosCarSelect').val();
    if (name == "Investor's Car") {
        $('#inCarSale').css('display', 'block');
        $('#custCarSale').css('display', 'none');
        $('#supCarSale').css('display', 'none');
    } else if (name == "Supplier's Car") {


        $('#custCarSale').css('display', 'none');
        $('#supCarSale').css('display', 'block');
        $('#inCarSale').css('display', 'none');

    } else if (name == "Customer's Car") {


        $('#inCarSale').css('display', 'none');
        $('#supCarSale').css('display', 'none');
        $('#custCarSale').css('display', 'block');

    }
});

function setCustId(id) {
    localStorage.setItem("custId", id)
    window.location = "customerDetails.html";
}

function getCustomerView(id) {

    $.get(apiPath + "Transactions?filter[where][CustomerID]=" + id, function(success) {
        if (success.length == 0) {
            toastr.error("No Entries Yet");
        }
        success.forEach(function(ele) {
            html = `<tr><td>${ele.RF}</td> <td>${ele.Reason}</td> <td>${ele.Type}</td> <td>${ele.Date}</td> <td>${ele.Amount}</td><td>${ele.AddedBy}</td></tr>`
            $('#viewCustomerTable').append(html);
        })

    })
}

function getUnpaidCheques() {

    $.get(apiPath + "Transactions?filter[where][PaidStatus]=false", function(success) {
        if (success.length == 0) {
            toastr.error("No Entries Yet");
        }
        $("#chequeStatus").html(success.length);

    })
}

function getCustomerBalanceAndPayable(id) {
    $.get(apiPath + "Customers?filter[where][CustomerID]=" + id, function(success) {
        $("#viewCustPayable").html("<b>Payable </b>:" + success[0].Payable);
        $("#viewCustBalance").html("<b>Balance </b>:" + success[0].Balance);
        $("#customerHeading").html("<b>Customer ID </b>:" + success[0].CustomerID);



    })
}

function addAccount() {
    var data = {
        "BankName": $('#bankListAccount').val(),
        "AccountID": $('#accAccountId').val(),
        "AccountNo": $('#accAccountNo').val(),
        "Balance": $('#accBalance').val(),
        "AddedBy": localStorage.getItem("myVar")
    }
    $.post(apiPath + "Accounts", data, function(success, status) {
        location.reload();
    });
}

function getCustCount() {
    $.get(apiPath + "Customers", function(success) {
        var custCount = success.length;
        $("#custCount").html(custCount)

    })
}

// function getprofitAndLostTable() {

//     $.get(apiPath + "Transactions?filter[where][PaymentAccount]=Profit Loss", function(success) {
//         var html;

//         success.forEach(function(ele) {
//             html = `<tr><td>${ele.RF}</td> <td>${ele.Reason}</td> <td>${ele.Type}</td> <td>${ele.Date}</td> <td>${ele.Amount}</td><td>${ele.AddedBy}</td></tr>`
//             $('#profitLossTable').append(html);
//         });

//     })
// }
var balance;

function getprofitAndLostCount() {

    $.get(apiPath + "Accounts?filter[where][AccountID]=2", function(success) {
        $("#profitAndLossCount").html("Rs. " + success[0].Balance);
        balance = success[0].Balance;

    })
}

function getCustomerBalance() {
    var balance = 0;
    $.get(apiPath + "Customers?", function(success) {
        success.forEach(function(ele) {
            balance += ele.Balance;
        })
        $("#custBalance").html("Rs. " + balance)
    })
}

function getInvestorCount() {
    $.get(apiPath + "Investors", function(success) {
        var custCount = success.length;
        $("#investCount").html(custCount)

    })
}

function carSold(id) {
    $.get(apiPath + "Cars/InvestorSoldCar?InvestorID=" + id, function(success) {
        $("#viewCarSold").html("<b>Car Sold </b>:" + success.length)
    })
}

function getViewMoreBalance(id) {
    $.get(apiPath + "Suppliers?filter[where][SupplierID]=" + id, function(success) {
        $("#viewMoreBalance").html("<b>Balance : </b>" + success[0].Balance)
    })
}

function carAssigned(id) {
    $.get(apiPath + "Cars?filter[where][and][0][InvestorID]=" + id + "&filter[where][and][1][Status]=Available", function(success) {
        $("#viewCarAssigned").html("<b>Car Assigned </b>:" + success.length)
    })
}

function getInvestment() {
    $.get(apiPath + "Investors", function(success) {
        var balance = 0;
        success.forEach(function(ele) {
            balance += ele.Investment;
        });
        $("#currentInvestment").html("Rs. " + balance);
    });
}

function getAccount() {
    $.get(apiPath + "Accounts?filter[where][BankName][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.BankName != "Profit Loss") {
                html += `<tr><td> ${ele.BankName} </td><td>${ele.AccountID} </td><td>${ele.AccountNo} </td><td>${ele.Balance} </td><td> ${ele.AddedBy} </td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span></a><span> <a href="#" onclick="getAccountDetailId('${ ele.AccountID }')"><small><u>view more</u><small></span> </a></td></tr>`
            }
        }, this)

        $('#accountTable').append(html);
    });
}
var pay = [];
var TotalAmount = 0;

function addCashInHand(amount) {
    pay.push({ "Mode": "Cash", "Amount": parseInt(amount) });
    TotalAmount += parseInt(amount);
}

function addCheque(amount, chequeNo, account) {
    // for(i=0;i<=)
    pay.push({ "Mode": "Cheque", "Amount": parseInt(amount), "AccountID": account, "ChequeNo": chequeNo });
    TotalAmount += parseInt(amount);
}

function addOnline(account, amount) {
    pay.push({ "Mode": "Online Payment", "AccountID": account, "Amount": parseInt(amount) });
    TotalAmount += parseInt(amount);

}
$('#creditCarID').on('change', function() {

    $.get(apiPath + "Cars?filter[where][CarID]=" + $('#creditCarID').val() + "", function(success) {
        var html = '';
        //console.log(success[0].Status);

        $('#creditpr').val(success[0].ProfitMargin);
        if ($("#creditCarID").val() != "Select Car") {
            $("#purchasePriceCredit").val(success[0].PurchasePrice);
        } else {
            $("#purchasePriceCredit").val("Select a Car first")
        }
        /*$('#cihCreditAmount').val(success[0].SalePrice);
        $("#chequeCreditAmount").val(success[0].SalePrice);  
        $("#onlineCreditAmount").val(success[0].SalePrice); */
    });


});


function addCredit() {
    var data;
    if ($('#sel1').val() == "Car") {

        if (!$('#cihCreditAmount').val()) {} else {
            addCashInHand($('#cihCreditAmount').val())
        }

        for (var i = 0; i <= countCiCar; i++) {
            if (!$('#chequeCreditAmount' + i + '').val() || !$('#accountIdCredit' + i + '').val() || !$('#cNoCredit' + i + '').val() || $('#accountIdCredit' +
                    i + '').val() == "Select Account") {} else {
                addCheque($('#chequeCreditAmount' + i + '').val(), $('#cNoCredit' + i + '').val(), $('#accountIdCredit' + i + '').val())
            }
        }
        for (var j = 0; j <= countOCar; j++)
            if (!$('#accountIdCreditOnline' + j).val() || !$('#onlineCreditAmount' + j).val() || $('#accountIdCreditOnline' + j).val() == "Select Account") {} else {
                addOnline($('#accountIdCreditOnline' + j).val(), $('#onlineCreditAmount' + j).val())
            }

        data = {
            "CarID": $('#creditCarID').val(),
            "DO": $('#11').val(),
            "PaymentModes": pay,
            "TotalAmount": TotalAmount,
            "TransactionType": "Credit",
            "Type": "SalePurchase",
            "AddedBy": localStorage.getItem("myVar"),
            "SalePrice": $("#sp").val(),
            "CustomerID": $("#creditCustomer").val(),
            "ProfitMargin": $('#creditpr').val()
        }

        $.post(apiPath + "DayBooks", data, function(success, status) {
            location.reload();

        });

    }

    if ($('#sel1').val() == "Banks") {

        if ($('#sel2').val() == "Cheque Submission") {
            $.get(apiPath + "Accounts/ChequeToCash?AccountID=" + $('#accountIdChequetoCih').val() + "&Amount=" + $('#amountChequetoCih').val() + "&chequeNo=" + $('#chequeNoChequetoCih').val() + "", function(success, status) {
                location.reload();
            });
        }
        //  if($('#sel2').val()=="Cheque"){
        //   $.get(apiPath + "Accounts/ChequeToBank?chequeNo="+$('#chequeNoBdiv').val()+"&Amount="+$('#chequeAmountBdiv').val()+"&AccountID1="+$('#accountId1').val()+"&AccountID2="+$('#accountId2').val()+"", function(success, status) {
        //      location.reload();
        //       });
        //  }
        if ($('#sel2').val() == "ATM") {
            $.get(apiPath + "Accounts/TransferToCash?AccountID=" + $('#onlineAccountId1').val() + "&Amount=" + $('#onlineAmountBdiv').val() + "", function(success, status) {
                location.reload();

            });
        }

    }




    if ($('#sel1').val() == "Investment") {
        if ($('#investment').val() == "Cash In Hand") {

            $.get(apiPath + "Investors/cashInInvestor?Amount=" + $('#iAmountCredit').val() + "&InvestorID=" + $('#iListCredit').val() + "", function(success, status) {
                location.reload();
            });
        }
        if ($('#investment').val() == "Cheque") {

            $.get(apiPath + "Investors/ChequeInInvestor?ChequeNo=" + $('#iCnoCredit').val() + "&Amount=" + $('#iAmountCreditCheque').val() + "&AccountID=" + $('#iAListCreditCheque').val() + "&InvestorID=" + $('#iListCreditCheque').val() + "", function(success, status) {
                location.reload();
            });
        }
        if ($('#investment').val() == "Online Payment") {

            $.get(apiPath + "Investors/TransferInInvestor?AccountID=" + $('#iAListCreditOnline').val() + "&Amount=" + $('#iAmountCreditOnline').val() + "&InvestorID=" + $('#iListCreditOnline').val() + "", function(success, status) {
                location.reload();
            });
        }
    }
    if ($('#sel1').val() == "Supplier") {
        if ($("#whatToDo").val() == "Assign Car") {
            $.get(apiPath + "DayBooks/SupplierToCar?SupplierID=" + $('#debitSupplier').val() + "&CarID=" + $('#debitCarSupplier').val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success, status) {
                location.reload();
            });
        } else if ($("#whatToDo").val() == "Get Paid") {
            if ($("#spCredit").val() == "Cash In Hand") {
                $.get(apiPath + "Suppliers/SupplierToCash?SupplierID=" + $("#spListCredit").val() + "&Amount=" + $("#spAmountCredit").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                    //console.log(success);
                    location.reload();
                })
            } else if ($("#spCredit").val() == "Cheque") {
                $.get(apiPath + "Suppliers/SupplierToCheque?SupplierID=" + $("#spListCreditCheque").val() + "&Amount=" + $("#spAmountCreditCheque").val() + "&AccountID=" + $("#spAListCreditCheque").val() + "&ChequeNo=" + $("#spCnoCredit").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                    location.reload();
                    //console.log(success);
                })

            } else if ($("#spCredit").val() == "Online Payment") {
                $.get(apiPath + "Suppliers/SupplierToTransfer?SupplierID=" + $("#spListCreditOnline").val() + "&Amount=" + $("#spAmountCreditOnline").val() + "&AccountID=" + $("#spAListCreditOnline").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                    location.reload();
                    //console.log(success);
                })
            }
        }
    }
    if ($('#sel1').val() == "Customer") {
        if ($("#cust").val() == "Assign Car") {
            $.get(apiPath + "Customers/CarToCustomer?CustomerID=" + $('#creditCustomerList').val() + "&CarID=" + $('#custCarList').val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success, status) {
                location.reload();
            });
        } else if ($("#cust").val() == "Get Paid") {
            if ($("#cpCredit").val() == "Cash In Hand") {
                $.get(apiPath + "Customers/CustomerPayCash?CustomerID=" + $("#cpListCredit").val() + "&Amount=" + $("#cpAmountCredit").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                    //console.log(success);
                    location.reload();
                })
            } else if ($("#cpCredit").val() == "Cheque") {
                $.get(apiPath + "Customers/CustomerPayCheque?CustomerID=" + $("#cpListCreditCheque").val() + "&Amount=" + $("#cpAmountCreditCheque").val() + "&AccountID=" + $("#cpAListCreditCheque").val() + "&ChequeNo=" + $("#cpCnoCredit").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                    location.reload();
                })

            } else if ($("#cpCredit").val() == "Online Payment") {
                $.get(apiPath + "Customers/CustomerPayOnline?CustomerID=" + $("#cpListCreditOnline").val() + "&Amount=" + $("#cpAmountCreditOnline").val() + "&AccountID=" + $("#cpAListCreditOnline").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                    location.reload();
                })
            }
        }
    }
}


$('#creditCust').on('change', function() {
    $('#creditCarID').html('');
    $.get(apiPath + "Cars?filter[where][CustomerID]=" + $('#creditCust').val() + "", function(success) {

        var html = '';
        html += `<option>Select Car</option>`

        success.forEach(function(ele) {
            if (ele.Status != "Sold") {
                html += `<option>` + ele.CarID + `</option>`
            }
        }, this)
        $('#creditCarID').append(html);
    });


});
$('#creditSup').on('change', function() {
    $('#creditCarID').html('');
    $.get(apiPath + "Cars?filter[where][SupplierID]=" + $('#creditSup').val() + "", function(success) {

        var html = '';
        html += `<option>Select Car</option>`

        success.forEach(function(ele) {
            if (ele.Status != "Sold") {
                html += `<option>` + ele.CarID + `</option>`
            }
        }, this)
        $('#creditCarID').append(html);
    });


});
$('#creditInvestor').on('change', function() {
    $('#creditCarID').html('');
    $.get(apiPath + "Cars/GetCarByInvestor?InvestorID=" + $('#creditInvestor').val() + "", function(success) {

        var html = '';
        html += `<option>Select Car</option>`

        success.forEach(function(ele) {
            if (ele.Status != "Sold") {
                html += `<option>` + ele.CarID + `</option>`
            }
        }, this)
        $('#creditCarID').append(html);
    });


});
$('#bListChequetoCih').on('change', function() {
    $('#accountIdChequetoCih').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bListChequetoCih').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#accountIdChequetoCih').append(html);
    });


});
$('#bankListCreditBdiv').on('change', function() {
    $('#accountIdCreditBdiv').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListCreditBdiv').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {
            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#accountIdCreditBdiv').append(html);
    });
});
$('#bankListBdivCheque').on('change', function() {
    $('#accountId1').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListBdivCheque').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#accountId1').append(html);
    });
});
$('#bankListBdivCheque2').on('change', function() {
    $('#accountId2').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListBdivCheque2').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#accountId2').append(html);
    });
});


$('#bankListBdivOnline').on('change', function() {
    $('#onlineAccountId1').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListBdivOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#onlineAccountId1').append(html);
    });
});

$('#iBListCreditOnline').on('change', function() {
    $('#iAListCreditOnline').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#iBListCreditOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
            console.log(ele.AccountID);
        }, this)
        $('#iAListCreditOnline').append(html);
    });
});

$('#bankListBdivOnline2').on('change', function() {
    console.log("inside account 2");
    $('#22').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListBdivOnline2').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
            console.log(ele.AccountID);
        }, this)
        $('#22').append(html);
    });
});

//sBListDebitCheque

$('#iBListCreditCheque').on('change', function() {
    $('#iAListCreditCheque').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#iBListCreditCheque').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#iAListCreditCheque').append(html);
    });


});
$('#iBListCreditCheque').on('change', function() {
    $('#iAListCreditCheque').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#iBListCreditCheque').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#iAListCreditCheque').append(html);
    });


});

$('#sBListDebitCheque').on('change', function() {
    $('#sAListDebitCheque').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#sBListDebitCheque').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#sAListDebitCheque').append(html);
    });


});
$('#sBListDebitOnline').on('change', function() {
    $('#sAListDebitOnline').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#sBListDebitOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#sAListDebitOnline').append(html);
    });


});
$('#iBListDebitCheque').on('change', function() {
    $('#iAListDebitCheque').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#iBListDebitCheque').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#iAListDebitCheque').append(html);
    });


});
$('#iBListDebitOnline').on('change', function() {
    $('#payInvestorOnline').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#iBListDebitOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#payInvestorOnline').append(html);
    });


});

// $('#whosCar').on('change', function() {
//     var choice = $('#whosCar').val();
//     if (choice == "Investor") {
//         $('#investorsCar').css('display', 'block');
//         $('#suppliersCar').css('display', 'none');
//     } else if (choice == "Supplier") {
//         $('#investorsCar').css('display', 'none');
//         $('#suppliersCar').css('display', 'block');

//     }
//     /* $.get(apiPath +"Accounts?filter[where][AccountID]="+$('#accountIdCredit').val()+"", function(success){
//          var html='';
//          $('#accNoCredit').val(success[0].AccountNo);
//      });*/


// });



function sListDebit() {
    $.get(apiPath + "Suppliers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.SupplierID + `</option>`
        }, this)

        $('#sListDebit').append(html);
    });

}

function sListDebitCheque() {
    $.get(apiPath + "Suppliers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.SupplierID + `</option>`
        }, this)

        $('#sListDebitCheque').append(html);
    });

}

function sListDebitOnline() {
    $.get(apiPath + "Suppliers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.SupplierID + `</option>`
        }, this)

        $('#sListDebitOnline').append(html);
    });

}

function iListDebit() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#iListDebit').append(html);
    });

}

function iListDebitCheque() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#iListDebitCheque').append(html);
    });

}

function iListCreditCheque() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#iListCreditCheque').append(html);
    });

}

function iListDebitOnline() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#investorListing').append(html);
    });

}

function iListCreditOnline() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#iListCreditOnline').append(html);
    });

}

function getInvestersListInvestmentCredit() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#iListCredit').append(html);
    });

}

function getInvestersListCar() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#CarInvestor').append(html);
    });

}

function sBListDebitCheque() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#sBListDebitCheque').append(html);
    });

}

function sBListDebitOnline() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#sBListDebitOnline').append(html);
    });

}
//
function iBListDebitCheque() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#iBListDebitCheque').append(html);
    });

}

function iBListDebitOnline() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#iBListDebitOnline').append(html);
    });

}

function iBListCreditOnline() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';
        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#iBListCreditOnline').append(html);
    });

}

function getBankListAccount() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';
        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListAccount').append(html);
    });

}

function getBankListBdivCheque() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';
        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListBdivCheque').append(html);
    });

}

function getBankListBdivCheque2() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListBdivCheque2').append(html);
    });

}

function getBankListChequetoCih() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';
        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bListChequetoCih').append(html);
    });

}

function getBankListBdivOnline() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';
        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListBdivOnline').append(html);
    });

}

function getBankListBdivOnline2() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListBdivOnline2').append(html);
    });

}

function getBankListAccountBdiv() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';
        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListCreditBdiv').append(html);
    });

}



function iBListCreditCheque() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#iBListCreditCheque').append(html);
    });

}



function getCustomersListCredit() {
    $.get(apiPath + "Customers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.CustomerID + `</option>`
        }, this)

        $('#creditCustomer').append(html);
        $('#creditCust').append(html);
    });

}
$('#expDiv1InvestorId').on('change', function() {

    $('#expDiv1CarId').html('');
    $.get(apiPath + "Cars/GetCarByInvestor?InvestorID=" + $('#expDiv1InvestorId').val() + "", function(success) {

        var html = '';
        html += `<option>Select Car</option>`

        success.forEach(function(ele) {
            if (ele.Status != "Sold") {
                html += `<option>` + ele.CarID + `</option>`

            }
        }, this)
        $('#expDiv1CarId').append(html);

    });
});
$('#expDiv1CarId').on('change', function() {

    $.get(apiPath + "Cars?filter[where][CarID]=" + $('#expDiv1CarId').val() + "", function(success) {
        $("#expDiv1Do").val(success[0].DO);

    });
});


function getInvestorIdForExpense() {
    $.get(apiPath + "Investors", function(success) {

        success.forEach(function(ele) {
            $("#expDiv1InvestorId").append("<option>" + ele.InvestorID + "</option>")
        })

    });
}

$('#blExpCheque').on('change', function() {

    var html = ''
    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#blExpCheque').val() + "", function(success) {
        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#alExpCheque').append(html);
    });
});
$('#blExpOnline').on('change', function() {

    var html = ''
    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#blExpOnline').val() + "", function(success) {
        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#alExpOnline').append(html);
    });
});
$('#alExpCheque').on('change', function() {
    $.get(apiPath + "Accounts?filter[where][AccountID]=" + $('#alExpCheque').val() + "", function(success) {
        $('#anExpCheque').val(success[0].AccountNo);
    });
});
$('#alExpOnline').on('change', function() {
    $.get(apiPath + "Accounts?filter[where][AccountID]=" + $('#alExpOnline').val() + "", function(success) {
        $('#anExpOnline').val(success[0].AccountNo);
    });
});

function getBankListForExpCheque() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';
        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#blExpCheque').append(html);
    });
}

function getBankListForExpOnline() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';
        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#blExpOnline').append(html);
    });
}
var payExpense = [];

function addDebit() {

    var data;
    if ($('#dsel1').val() == "Expense") {
        if ($('#exp').val() == "Car Expense") {
            data = {
                "Description": $("#expDiv1Description").val(),
                "Cost": $("#expDiv1Cost").val(),
                "Type": "CarExpense",
                "CarID": $("#expDiv1CarId").val(),
                "Date": $("#expDiv1Date").val(),
                "Reason": "CarExpense",
                "AddedBy": localStorage.getItem("myVar"),
                "PaymentModes": payExpense
            }
        }
        if ($('#exp').val() == "Home Expense") {
            data = {
                "Description": $("#expDiv2Comment").val(),
                "Cost": $("#expDiv2Cost").val(),
                "Type": "HomeExpense",
                "Date": $("#expDiv2Date").val(),
                "Reason": "HomeExpense",
                "AddedBy": localStorage.getItem("myVar"),
                "PaymentModes": payExpense
            }
        }
        if ($('#exp').val() == "Showroom Expense") {
            data = {
                "Description": $("#expDiv3Comment").val(),
                "Cost": $("#expDiv3Cost").val(),
                "Type": "ShowroomExpense",
                "Date": $("#expDiv3Date").val(),
                "Reason": "ShowroomExpense",
                "AddedBy": localStorage.getItem("myVar"),
                "PaymentModes": payExpense
            }
        }
        if ($("#expCash").val() == "Cash In Hand") {
            payExpense.push({ "Cost": parseInt($("#expCih").val()), "Mode": "Cash" })
        } else if ($("#expCash").val() == "Cheque") {
            if (($("#alExpCheque").val()) != "Select Account") {
                payExpense.push({ "Mode": "Cheque", "Cost": parseInt($("#amountExpCheque").val()), "AccountID": $("#alExpCheque").val(), "ChequeNo": $("#cnExpCheque").val() })
            }
        } else if ($("#expCash").val() == "Online Payment") {
            if (($("#alExpOnline").val()) != "Select Account") {
                payExpense.push({ "Mode": "Online Payment", "AccountID": $("#alExpOnline").val(), "Cost": parseInt($("#amountExpOnline").val()) })
            }
        }

        $.post(apiPath + "Expenses", data, function(success, status) {
            location.reload();
        });
    }
    /* var data = {
         "InvestorID": $('#debitInvestor').val(),
         "CarID": $('#debitCar').val(),
         "DO": $('#debitDo').val()
     }
     console.log(data);*/
    if ($("#dsel1").val() == "Customer Payments") {
        //Customers/CashToCustomer?CustomerID=newID&Amount=100&AddedBy=manu
        if ($("#cpDebit").val() == "Cash In Hand") {
            $.get(apiPath + "Customers/CashToCustomer?CustomerID=" + $("#cpListDebit").val() + "&Amount=" + $("#cpAmountDebit").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                //console.log(success);
                location.reload();
            })
        } else if ($("#cpDebit").val() == "Cheque") {
            $.get(apiPath + "Customers/ChequeToCustomer?CustomerID=" + $("#cpListDebitCheque").val() + "&Amount=" + $("#cpAmountDebitCheque").val() + "&ChequeNo=" + $("#cpCnoDebit").val() + "&AccountID=" + $("#cpAListDebitCheque").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                location.reload();
            })

        } else if ($("#cpDebit").val() == "Online Payment") {
            $.get(apiPath + "Customers/TransferToCustomer?CustomerID=" + $("#cpListDebitOnline").val() + "&Amount=" + $("#cpAmountDebitOnline").val() + "&AccountID=" + $("#cpAListDebitOnline").val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success) {
                location.reload();
            })
        }
    }
    if ($('#dsel1').val() == "Car") {
        var investors = [];
        var percentage;
        for (var i = 0; i <= count; i++) {
            percentage = ($('#investmentDebit' + i + '').val() / carAmount) * 100;

            investors.push({ "InvestorID": $('#debitInvestor' + i + '').val(), "Investment": $('#investmentDebit' + i + '').val(), "Percentage": percentage });
        }
        console.log(investors);
        var data = {
            "array": investors
        }

        $.post(apiPath + "Investors/InvestorsToCar?CarID=" + $('#debitCar').val() + "&AddedBy=" + localStorage.getItem("myVar") + "", data, function(success, status) {
            location.reload();
        });


    }

    if ($('#dsel1').val() == "Banks") {
        if ($('#dsel2').val() == "Cash In Hand") {
            $.get(apiPath + "Accounts/cashTobank?AccountID=" + $('#accountIdCreditBdiv').val() + "&Amount=" + $('#cihAmountBdiv').val() + "", function(success, status) {
                location.reload();
            });
        }
        if ($('#dsel2').val() == "Cheque") {
            $.get(apiPath + "Accounts/ChequeToBank?chequeNo=" + $('#chequeNoBdiv').val() + "&Amount=" + $('#chequeAmountBdiv').val() + "&AccountID1=" + $('#accountId1').val() + "&AccountID2=" + $('#accountId2').val() + "", function(success, status) {
                location.reload();
            });
        }
        if ($('#dsel2').val() == "Online Payment") {
            $.get(apiPath + "Accounts/TransferTobank?Amount=" + $('#onlineAmountBdiv').val() + "&AccountID1=" + $('#onlineAccountId1').val() + "&AccountID2=" + $('#22').val() + "", function(success, status) {
                location.reload();
            });
        }

    }
    if ($('#dsel1').val() == "Investment") {
        if ($('#investment2').val() == "Cash In Hand") {

            $.get(apiPath + "Investors/cashToInvestor?Amount=" + $('#iAmountDebit').val() + "&InvestorID=" + $('#iListDebit').val() + "", function(success, status) {
                location.reload();
            });
        }
        if ($('#investment2').val() == "Cheque") {

            $.get(apiPath + "Investors/ChequeToInvestor?ChequeNo=" + $('#iCnoDebit').val() + "&AccountID=" + $('#iAListDebitCheque').val() + "&InvestorID=" + $('#iListDebitCheque').val() + "&Amount=" + $('#iAmountDebitCheque').val() + "", function(success, status) {
                location.reload();
                //console.log(success);
            });
        }
        if ($('#investment2').val() == "Online Payment") {
            // console.log($('#payInvestorOnline').val() + " " + $('#onlineCash').val() + " " + $('#investorListing').val())
            $.get(apiPath + "Investors/TransferToInvestor?AccountID=" + $('#payInvestorOnline').val() + "&Amount=" + $('#onlineCash').val() + "&InvestorID=" + $('#investorListing').val() + "", function(success, status) {
                location.reload();
            });

        }
    }

    if ($('#dsel1').val() == "Supplier") {
        if ($('#sup').val() == "Pay Supplier") {
            if ($('#supplier2').val() == "Cash In Hand") {

                $.get(apiPath + "Suppliers/CashToSupplier?SupplierID=" + $('#sListDebit').val() + "&Amount=" + $('#sAmountDebit').val() + "", function(success, status) {
                    location.reload();
                });
            }
            if ($('#supplier2').val() == "Cheque") {

                $.get(apiPath + "Suppliers/ChequeToSupplier?ChequeNo=" + $('#sCnoDebit').val() + "&AccountID=" + $('#sAListDebitCheque').val() + "&Amount=" + $('#sAmountDebitCheque').val() + "&SupplierID=" + $('#sListDebitCheque').val() + "", function(success, status) {
                    location.reload();
                    // console.log($('#sCnoDebit').val());
                });
            }
            if ($('#supplier2').val() == "Online Payment") {

                $.get(apiPath + "Suppliers/TransferToSupplier?SupplierID=" + $('#sListDebitOnline').val() + "&Amount=" + $('#sAmountDebitOnline').val() + "&AccountID=" + $('#sAListDebitOnline').val() + "", function(success, status) {
                    location.reload();
                });
            }
        } else if ($('#sup').val() == "Sale Car") {
            $.get(apiPath + "Suppliers/SupplierToSupplier?CarID=" + $("#supCarList").val() + "&SupplierID=" + $("#supSl2").val() + "&SalePrice=" + $("#supSp").val() + "&AddedBy=" + localStorage.getItem("myVar") + "&DO=" + $("#supDo").val() + "", function(success) {
                location.reload();
            })

        }
    }
}

function getInvestersListCredit() {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#creditInvestor').append(html);
    });

}


function getMakeListCar() {
    $.get(apiPath + "CarMakes", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.MakeName + `</option>`
        }, this)

        $('#carMake').append(html);
    });

}

function getColorListCar() {
    $.get(apiPath + "CarColors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.ColorName + `</option>`
        }, this)

        $('#carColor').append(html);
    });

}

function getModelListCar() {
    $.get(apiPath + "CarModels", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.ModelName + `</option>`
        }, this)

        $('#carModel').append(html);
    });

}

function getolDMakeListCar() {
    $.get(apiPath + "CarMakes", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.MakeName + `</option>`
        }, this)

        $('#olDcarMake').append(html);
    });

}

function getOldColorListCar() {
    $.get(apiPath + "CarColors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.ColorName + `</option>`
        }, this)

        $('#olDcarColor').append(html);
    });

}

function getolDModelListCar() {
    $.get(apiPath + "CarModels", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.ModelName + `</option>`
        }, this)

        $('#olDcarModel').append(html);
    });

}

function getCarListDebitSupplier() {
    $.get(apiPath + "Cars/GetCarsNoSC", function(success, status) {
        var html = '';

        success.forEach(function(ele) {

            html += `<option>` + ele.CarID + `</option>`

        }, this)

        $('#debitCarSupplier').append(html);
    });

}

function getcreditCustomerList() {
    $.get(apiPath + "Customers", function(success, status) {
        var html = '';

        success.forEach(function(ele) {

            html += `<option>` + ele.CustomerID + `</option>`

        }, this)

        $('#creditCustomerList').append(html);
    });
}

function getCarListCreditCustomer() {
    $.get(apiPath + "Cars/GetCarsNoSC", function(success, status) {
        var html = '';

        success.forEach(function(ele) {

            html += `<option>` + ele.CarID + `</option>`

        }, this)

        $('#custCarList').append(html);
    });

}

function getCarListDebit() {
    $.get(apiPath + "Cars/GetCarsWithoutInvestors", function(success, status) {
        var html = '';

        success.forEach(function(ele) {

            html += `<option>` + ele.CarID + `</option>`

        }, this)

        $('#debitCar').append(html);
    });

}
var carAmount;
$('#debitCar').on('change', function() {
    $.get(apiPath + "Cars", function(success, status) {
        var html = '';
        success.forEach(function(ele) {
            if (!ele.InvestorID && ele.CarID == $('#debitCar').val()) {
                $("#purchasePriceDebit").val(ele.PurchasePrice);
                carAmount = ele.PurchasePrice;
                // console.log(ele.PurchasePrice + " " + ele.CarID);
            }

        }, this)


    });
});


function getInvestersListDebit(count) {
    $.get(apiPath + "Investors", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.InvestorID + `</option>`
        }, this)

        $('#debitInvestor' + count + '').append(html);

    });

}

function investorStuffRemove() {
    if (count == 0) {
        $('#ifCount').hide();
    } else {
        $('#investorStuff' + count + '').remove();


        count--;
    }

}

function investorStuff() {
    count++;
    console.log("investor added " + count);

    var html = `<div id="investorStuff` + count + `">
            <hr>
            <div class="form-group">
              <label>Investors List:</label>
              <select class="form-control" id="debitInvestor` + count + `">
                <option>Select Investor</option>
              </select>
            </div>
            <div class="form-group">
              <label for="usr">Investment:</label>
              <input type="text" class="form-control" id="investmentDebit` + count + `">
            </div></div>`
    $('#investorStuff0').append(html);
    getInvestersListDebit(count);
    $('#ifCount').show();


}

function getCustListDebitTransaction() {
    $.get(apiPath + "Customers", function(success) {
        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.CustomerID + `</option>`
        }, this)

        $('#cpListDebit').append(html);
        $('#cpListDebitCheque').append(html);
        $('#cpListDebitOnline').append(html);
    })
}

function getCustListCreditTransaction() {
    $.get(apiPath + "Customers", function(success) {
        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.CustomerID + `</option>`
        }, this)

        $('#cpListCredit').append(html);
        $('#cpListCreditCheque').append(html);
        $('#cpListCreditOnline').append(html);
    })
}

function getBankListCustDebit() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#cpBListDebitCheque').append(html);
        $('#cpBListDebitOnline').append(html);

    });

}

function getBankListCustCredit() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#cpBListCreditCheque').append(html);
        $('#cpBListCreditOnline').append(html);
        $('#spBListCreditCheque').append(html);
        $('#spBListCreditOnline').append(html);

    });

}

$('#cpBListDebitCheque').on('change', function() {
    $('#cpAListDebitCheque').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#cpBListDebitCheque').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#cpAListDebitCheque').append(html);
    });


});
$('#cpBListDebitOnline').on('change', function() {
    $('#cpAListDebitOnline').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#cpBListDebitOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#cpAListDebitOnline').append(html);
    });


});

$('#cpBListCreditCheque').on('change', function() {
    $('#cpAListCreditCheque').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#cpBListCreditCheque').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#cpAListCreditCheque').append(html);
    });


});
$('#cpBListCreditOnline').on('change', function() {
    $('#cpAListCreditOnline').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#cpBListCreditOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#cpAListCreditOnline').append(html);
    });


});

function getSl() {
    var html = "";
    $.get(apiPath + "Suppliers", function(success) {
        success.forEach(function(ele) {
            html += `<option>${ele.SupplierID}</option>`
        });
        $("#supSl1").append(html);
        $("#supSl2").append(html);
    });
}
$("#supSl1").on('change', function() {
    var html = " "
    $("#supCarList").html('');
    html += `<option>Select Car</option>`
    $.get(apiPath + "Cars?[filter][where][SupplierID]=" + $("#supSl1").val(), function(success) {
        success.forEach(function(ele) {
            if (ele.Status == "Available") {
                html += `<option>${ele.CarID}</option>`
            }
        })
        $("#supCarList").append(html);
    })
})
$("#whatToDo").on('change', function() {
    var name = $("#whatToDo").val();
    if (name == "Assign Car") {
        $("#getPaidBySupplier").css('display', 'none');
        $("#assignCarToSupplier").css('display', 'block');
    } else if (name == "Get Paid") {
        $("#assignCarToSupplier").css('display', 'none');
        $("#getPaidBySupplier").css('display', 'block');
    }
})
$("#whosCarSelect").on('change', function() {
    console.log("whosCarSelect");
    if ($("#whosCarSelect").val() == "Supplier's Car") {
        console.log("s");
        $("#creditpr").val(100);
        $("#creditpr").prop('disabled', true);
    } else if ($("#whosCarSelect").val() == "Customer's Car") {
        console.log("c");
        $("#creditpr").val(100);
        $("#creditpr").prop('disabled', true);
    } else if ($("#whosCarSelect").val() == "Investor's Car") {
        console.log("i");
        $("#creditpr").val(0);
        $("#creditpr").prop('disabled', false);
    }
});
$("#cust").on('change', function() {
    if ($("#cust").val() == "Assign Car") {
        $("#custAssignCar").css('display', 'block');
        $("#customerPaymentCredit").css('display', 'none');
    } else if ($("#cust").val() == "Get Paid") {
        $("#custAssignCar").css('display', 'none');
        $("#customerPaymentCredit").css('display', 'block');
    }
});
$("#supCarList").on('change', function() {
    var html = ""
    $.get(apiPath + "Cars?[filter][where][CarID]=" + $("#supCarList").val(), function(success) {
        $("#supPp").val(success[0].PurchasePrice);
    })
})
$("#spBListCreditCheque").on('change', function() {
    $('#spAListCreditCheque').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#spBListCreditCheque').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#spAListCreditCheque').append(html);
    })
})

$("#spBListCreditOnline").on('change', function() {
    $('#spAListCreditOnline').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#spBListCreditOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#spAListCreditOnline').append(html);
    })
})
$('#cars').on('show.bs.modal', function() {

    getMakeListCar();
    getColorListCar();
    getModelListCar();
});
$('#carOld').on('show.bs.modal', function() {

    getolDMakeListCar();
    getOldColorListCar();
    getolDModelListCar();
});

function getReceivableCount() {
    $.get(apiPath + "DayBooks/GetAllReceivables", function(success) {
        $("#receivableCount").html("Rs. " + success);
    })
}

function getPayableTotal() {
    $.get(apiPath + "DayBooks/GetAllPayables", function(success) {
        $("#payableCount").html("Rs. " + success);
    })
}




function bariProfit() {

    toastr.success(balance, 'Bari Profit :');
}

function newCar() {
    toastr.success('4004720', 'New Car Profit :');
}

function renovatedCar() {
    toastr.success('3221100', 'Renovated Car Profit:');
}

function oldCar() {
    toastr.success('3404000', 'Old Car Profit :');
}

$('#debit').on('show.bs.modal', function() {
    getInvestersListDebit(0);
    getCarListDebit();
    getBankListAccountBdiv();
    getBankListBdivCheque();
    getBankListBdivCheque2();
    getBankListBdivOnline();
    getBankListBdivOnline2();
    iListDebit();
    iListDebitCheque();
    iListDebitOnline();
    iBListDebitCheque();
    iBListDebitOnline();
    sListDebit();
    sListDebitCheque();
    sListDebitOnline();
    sBListDebitCheque();
    sBListDebitOnline();
    getBankListForExpCheque();
    getInvestorIdForExpense();
    getBankListForExpOnline();
    getCustListDebitTransaction();
    getBankListCustDebit();
    getSl();
    $('#ifCount').hide();

});

$('#credit').on('show.bs.modal', function() {
    getCustListCreditTransaction();
    getInvestersListCredit();
    getCustomersListCredit();
    getBankListCredit();
    getBankListCreditOnline();
    getBankListChequetoCih();
    getInvestersListInvestmentCredit();
    iListCreditCheque();
    iBListCreditCheque();
    iListCreditOnline();
    iBListCreditOnline();
    getBankListBdivOnline()
    getSupplierlist();
    getCarListDebitSupplier();
    register(0);
    register2(0);
    register3(0);
    register4(0);
    getCarListCreditCustomer();
    getBankListCustCredit();
    getcreditCustomerList();
    /* getBankListAccountBdiv();
     getBankListBdivCheque();
     getBankListBdivCheque2();
     getBankListBdivOnline();
     getBankListBdivOnline2();*/

});
$('#addAccount').on('show.bs.modal', function() {
    getBankListAccount();
});
$('#cars').on('show.bs.modal', function() {
    getManufactureYear();
});
$('#carOld').on('show.bs.modal', function() {
    getManufactureYear();
});

function addMake() {

    data = {
        MakeName: $("#make").val()
    }
    $.post(apiPath + "CarMakes", data, function(success) {
        location.reload();
        // console.log(success);

    })

}

function addColor() {

    data = {
        ColorName: $("#color").val()
    }
    $.post(apiPath + "CarColors", data, function(success) {
        location.reload();
        //console.log(success);
    })

}

function addModel() {
    // console.log($("#model").val())
    data = {
        ModelName: $("#model").val()
    }
    $.post(apiPath + "CarModels", data, function(success) {
        location.reload();
        // console.log(success);
    })
}

function addYear() {
    data = {
        YearNumber: $("#year").val()
    }
    $.post(apiPath + "CarYears", data, function(success) {
        location.reload();
        //console.log(success);
    })

}

function getModel() {
    var html;
    $.get(apiPath + "CarModels", function(success) {
        success.forEach(function(ele) {
            html = `<tr>
            <td>${ele.ModelName}<span class="pull-right"><a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i> </a><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> </a></span></td>
            </tr>`
            $("#modelTable").append(html);
        })
    })
}

function getColor() {
    var html;
    $.get(apiPath + "CarColors", function(success) {
        success.forEach(function(ele) {
            html = `<tr>
            <td>${ele.ColorName}<span class="pull-right"><a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i> </a><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> </a></span></td>
            </tr>`
            $("#colorTable").append(html);
        })
    })
}

function getYear() {
    var html;
    $.get(apiPath + "CarYears", function(success) {
        success.forEach(function(ele) {
            html = `<tr>
            <td>${ele.YearNumber}<span class="pull-right"><a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i> </a><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> </a></span></td>
            </tr>`
            $("#yearTable").append(html);
        })
    })
}

function getMake() {
    var html;
    $.get(apiPath + "CarMakes", function(success) {
        success.forEach(function(ele) {
            html = `<tr>
            <td>${ele.MakeName}<span class="pull-right"><a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i> </a><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> </a></span></td>
            </tr>`
            $("#makeTable").append(html);
        })
    })
}

function getManufactureYear() {
    var html = '';
    $.get(apiPath + "CarYears", function(success) {
        console.log(success)
        success.forEach(function(ele) {
            console.log("iteration")
            html += `<option>${ele.YearNumber}</option>`

        })
        $("#manufactureYear").append(html);
        $("#manufactureYearOld").append(html);
    })
}