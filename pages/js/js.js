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

    } else if (name == "Banks") {


        $('#carDiv').css('display', 'none');
        $('#bank').css('display', 'block');
        $('#investorDivCredit').css('display', 'none');


    } else if (name == "Investment") {

        $('#investorDivCredit').css('display', 'block');
        $('#carDiv').css('display', 'none');
        $('#bank').css('display', 'none');


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
    } else if (name == "Online Payment") {
        $('.chequeChecked').css('display', 'none');
        $('.cashChecked').css('display', 'none');
        $('.onlineChecked').css('display', 'block');
    }
});

$('#sel3').on('change', function() {
    var name = $('#sel3').val();
    console.log(name);
    if (name == "Cheque") {
        $('.chequeChecked2').css('display', 'block');
        $('.cashChecked2').css('display', 'none');
        $('.onlineChecked2').css('display', 'none');

    } else if (name == "Cash In Hand") {
        console.log("inside banks");
        $('.cashChecked2').css('display', 'block');
        $('.chequeChecked2').css('display', 'none');
        $('.onlineChecked2').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log("inside banks");
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

$('.cihCarAdd').on('click', function() {
    countCar++;
    var html = '';
    html = "<div class=\"c" + countCar + "\"><hr><div class=\"form-group\"><label for=\"usr\">Amount:</label><input type=\"text\" class=\"form-control\" id=\"usr\"> </div></div>"
    console.log(html);
    $('#carDiv1').append(html);
    $('.cihCarRemove').show();

});

$('.cihCarRemove').on('click', function() {
    console.log("here");

    $(".c" + countCar + "").remove();
    countCar--;
    if (countCar == 0) {
        $('.cihCarRemove').hide();
    }

});

$('.ciCarAdd').on('click', function() {
    countCiCar++;
    var html = "<div class=\"ci" + countCiCar + "\"> <hr><div class=\"form-group\">"
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
    $('#carDiv2').append(html);
    $('.ciCarRemove').show();
});
$('.ciCarRemove').on('click', function() {


    $(".ci" + countCiCar + "").remove();
    countCiCar--;
    if (countCiCar == 0) {
        $('.ciCarRemove').hide();
    }

});

$('.oCarAdd').on('click', function() {
    countOCar++;
    var html = `<div class="o${countOCar}">
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
    $('#carDiv3').append(html);
    $('.oCarRemove').show();

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
    } else if (name == "Banks") {


        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'block');
        $('#expense').css('display', 'none');
        $('#investorDivDebit').css('display', 'none');
        $('#supplierDivDebit').css('display', 'none');

    } else if (name == "Expense") {


        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'none');
        $('#expense').css('display', 'block');
        $('#investorDivDebit').css('display', 'none');
        $('#supplierDivDebit').css('display', 'none');

    } else if (name == "Investment") {

        $('#investorDivDebit').css('display', 'block');
        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'none');
        $('#expense').css('display', 'none');
        $('#supplierDivDebit').css('display', 'none');

    } else if (name == "Supplier") {

        $('#investorDivDebit').css('display', 'none');
        $('#dcarDiv').css('display', 'none');
        $('#dbank').css('display', 'none');
        $('#expense').css('display', 'none');
        $('#supplierDivDebit').css('display', 'block');

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
    console.log(name);
    if (name == "Cheque") {
        $('.dchequeChecked2').css('display', 'block');
        $('.dcashChecked2').css('display', 'none');
        $('.donlineChecked2').css('display', 'none');

    } else if (name == "Cash In Hand") {
        console.log("inside banks");
        $('.dcashChecked2').css('display', 'block');
        $('.dchequeChecked2').css('display', 'none');
        $('.donlineChecked2').css('display', 'none');
    } else if (name == "Online Payment") {
        console.log("inside banks");
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
        $('#old').css('display', 'inline-block');
        $('#new').css('display', 'none');
        $('#oldCar').show();
        $('#newCar').hide();

    }


});

/*----------------------------------API CALLS*---------------------------------------*/
function addOldCar() {

    var data = {
            "CarID": $("#olDcarId").val(),
            "DO": "1122",
            "Make": $("#olDcarMake").val(),
            "Model": $("#olDcarModel").val(),
            "Color": $("#olDcarColor").val(),
            "EngineNo": $("#olDcarEng").val(),
            "ChasisNo": $("#olDchNo").val(),
            "ProfitMargin": $("#olDpm").val(),
            "PurchasePrice": $("#olDpp").val(),
            "SalePrice": $("#olDsp").val(),
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

    var data = {
            "CarID": $("#carId").val(),
            "DO": "1122",
            "Make": $("#carMake").val(),
            "Model": $("#carModel").val(),
            "Color": $("#carColor").val(),
            "EngineNo": $("#carEng").val(),
            "ChasisNo": $("#chNo").val(),
            "ProfitMargin": $("#pm").val(),
            "PurchasePrice": $("#pp").val(),
            "SalePrice": $("#sp").val(),
            "PurchaseDate": new Date(),
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
                '<td>' + ele.CarID + '</td><td>' + ele.Make + '</td> <td>' + ele.Color + '</td> <td>' + ele.ChasisNo + '</td> <td>' + ele.EngineNo + '</td> <td>' + ele.PurchasePrice + '</td><td>' + ele.PurchaseDate + '</td><td>' + ele.SalePrice + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a></td></tr>'

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
    var data = {
        "SupplierID": $("#supId").val(),
        "ShowRoomName": $("#supName").val(),
        "ContactNo": $("#supCno").val(),
        "AddedBy": localStorage.getItem("myVar")


    }

    $.post(apiPath + "Suppliers", data, function(success, status) {
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
    });
}

function getSupplier() {
    $.get(apiPath + "Suppliers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += '<tr>' + '<td>' + ele.SupplierID + '</td><td>' + ele.ShowRoomName + '</td><td>' + ele.ContactNo + '</td><td>' + ele.AddedBy + '</td><td>' + ele.Payable + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a></td></tr>'
        }, this)

        $('#tableBodySupplier').append(html);
    });
}

function addInvestor() {
    // var radio = $("input[name='type']:checked").val();
    var data = {
        "InvestorID": $("#inId").val(),
        "Name": $("#inName").val(),
        "ContactNo": $("#inCno").val(),
        "Investment": 5000000,
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
            html += '<tr>' + '<td>' + ele.InvestorID + '</td><td>' + ele.Name + '</td><td>' + ele.ContactNo + '</td><td>' + ele.Type + '</td><td>' + ele.Investment + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a> <a href="viewMore.html"><u>veiw more</a></u></td></tr>'
        }, this)

        $('#tableBodyInvestor').append(html);
    });
}

function addCustomer() {
    var data = {
        "CustomerID": $("#custId").val(),
        "Name": $("#custName").val(),
        "FatherName": $("#custFName").val(),
        "ContactNo": $("#custCno").val(),
        "Address": $("#custAddress").val(),
        "AddedBy": localStorage.getItem("myVar"),
        "CNIC": $("#custCnic").val(),
    }
    $.post(apiPath + "Customers", data, function(success, status) {
        location.reload();
    });
}

function getCustomer() {
    $.get(apiPath + "Customers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += '<tr>' + '<td>' + ele.CustomerID + '</td><td>' + ele.Name + '</td><td>' + ele.FatherName + '</td><td>' + ele.ContactNo + '</td><td>' + ele.Address + '</td><td>' + ele.CNIC + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a></td></tr>'
        }, this)

        $('#tableBodyCustomer').append(html);
    });
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

function getAccount() {
    $.get(apiPath + "Accounts?filter[where][BankName][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.BankName != "Profit Loss") {
                html += '<tr>' + '<td>' + ele.BankName + '</td><td>' + ele.AccountID + '</td><td>' + ele.AccountNo + '</td><td>' + ele.Balance + '</td><td>' + ele.AddedBy + '</td><td><a href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal" data-target="#Update"></i></span></a><a href="#"><span><i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#expense"></i></span></a><a href="#"><span><i class="fa fa-trash" aria-hidden="true"></i></span> </a></td></tr>'
            }
        }, this)

        $('#accountTable').append(html);
    });
}

function addCredit() {
    var data;
    if ($('#sel1').val() == "Car") {



        /*if($('#sel3').val()=="Cash In Hand"){
         data = {
            "InvestorID": $('#creditInvestor').val(),
            "CarID": $('#creditCarID').val(),
            "DO": $('#11').val(),
            "TransactionType": "Credit",
            "PaymentMode": "Cash",
            "Amount": $('#cihCreditAmount').val(),
            "Type": "SalePurchase",
            "ProfitMargin": $('#creditpr').val(),
            "AddedBy" :localStorage.getItem("myVar"),
            "Name": $('#cName').val()
        }
            
        }
        if($('#sel3').val()=="Cheque"){
         data = {
            "InvestorID": $('#creditInvestor').val(),
            "CarID": $('#creditCarID').val(),
            "DO": $('#11').val(),
            "TransactionType": "Credit",
            "PaymentMode": "Cheque",
            "Amount": $('#chequeCreditAmount').val(),
            "ChequeNo":$('#cNoCredit').val(),
            "AccountID":$('#accountIdCredit').val(),
            "Type": "SalePurchase",
            "ProfitMargin": $('#creditpr').val(),
            "AddedBy" :localStorage.getItem("myVar"),
            "Name": $('#cName').val()

        }
            
        }
        if($('#sel3').val()=="Online Payment"){
         data = {
            "InvestorID": $('#creditInvestor').val(),
            "CarID": $('#creditCarID').val(),
            "DO": $('#11').val(),
            "TransactionType": "Credit",
            "AccountID":$('#accountIdCreditOnline').val(),
            "PaymentMode": "IBFT",
            "Amount": $('#onlineCreditAmount').val(),
            "Type": "SalePurchase",
            "ProfitMargin": $('#creditpr').val(),
            "AddedBy" :localStorage.getItem("myVar"),
            "Name": $('#cName').val()

        }*/
        var TotalAmount = (parseInt($('#cihCreditAmount').val()) + parseInt($('#chequeCreditAmount').val()) + parseInt($('#onlineCreditAmount').val()));
        var pay = [];
        pay.push({ "Mode": "Cash", "Amount": parseInt($('#cihCreditAmount').val()) });
        pay.push({ "Mode": "Cheque", "Amount": parseInt($('#chequeCreditAmount').val()), "AccountID": $('#accountIdCredit').val(), "ChequeNo": $('#cNoCredit').val() });
        pay.push({ "Mode": "IBFT", "AccountID": $('#accountIdCreditOnline').val(), "Amount": parseInt($('#onlineCreditAmount').val()) });
        data = {
            "CarID": $('#creditCarID').val(),
            "DO": $('#11').val(),
            "PaymentModes": pay,
            "TotalAmount": TotalAmount,
            "TransactionType": "Credit",
            "Type": "SalePurchase",
            "AddedBy": localStorage.getItem("myVar"),
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
        /* if($('#sel2').val()=="Cheque"){
          $.get(apiPath + "Accounts/ChequeToBank?chequeNo="+$('#chequeNoBdiv').val()+"&Amount="+$('#chequeAmountBdiv').val()+"&AccountID1="+$('#accountId1').val()+"&AccountID2="+$('#accountId2').val()+"", function(success, status) {
             location.reload();
              });
         }
         if($('#sel2').val()=="Online Payment"){
          $.get(apiPath + "Accounts/TransferTobank?Amount="+$('#onlineAmountBdiv').val()+"&AccountID1="+$('#onlineAccountId1').val()+"&AccountID2="+$('#onlineAccountId2').val()+"", function(success, status) {
             location.reload();
              });
         }*/

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

}


$('#creditInvestor').on('change', function() {
    $('#creditCarID').html('');
    $.get(apiPath + "Cars/GetCarByInvestor?InvestorID=" + $('#creditInvestor').val() + "", function(success) {

        var html = '';
        html += `<option> Select CarID</option>`

        success.forEach(function(ele) {
            if (ele.Status != "Sold") {
                html += `<option>` + ele.CarID + `</option>`
            }
        }, this)
        $('#creditCarID').append(html);
    });


});
$('#bankListCredit').on('change', function() {
    $('#accountIdCredit').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListCredit').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#accountIdCredit').append(html);
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
$('#bankListCreditOnline').on('change', function() {
    $('#accountIdCreditOnline').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#bankListCreditOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#accountIdCreditOnline').append(html);
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
    $('#iAListDebitOnline').html('');

    $.get(apiPath + "Accounts?filter[where][BankName]=" + $('#iBListDebitOnline').val() + "", function(success) {

        var html = '';
        html += `<option>Select Account</option>`

        success.forEach(function(ele) {

            html += `<option>` + ele.AccountID + `</option>`
        }, this)
        $('#iAListDebitOnline').append(html);
    });


});
$('#creditCarID').on('change', function() {

    $.get(apiPath + "Cars?filter[where][CarID]=" + $('#creditCarID').val() + "", function(success) {
        var html = '';
        //console.log(success[0].Status);

        $('#creditpr').val(success[0].ProfitMargin);

        /*$('#cihCreditAmount').val(success[0].SalePrice);
        $("#chequeCreditAmount").val(success[0].SalePrice);  
        $("#onlineCreditAmount").val(success[0].SalePrice); */
    });


});
$('#whosCar').on('change', function() {
    var choice = $('#whosCar').val();
    if (choice == "Investor") {
        $('#investorsCar').css('display', 'block');
        $('#suppliersCar').css('display', 'none');
    } else if (choice == "Supplier") {
        $('#investorsCar').css('display', 'none');
        $('#suppliersCar').css('display', 'block');

    }
    /* $.get(apiPath +"Accounts?filter[where][AccountID]="+$('#accountIdCredit').val()+"", function(success){
         var html='';
         $('#accNoCredit').val(success[0].AccountNo);
     });*/


});
$('#accountIdCredit').on('change', function() {

    $.get(apiPath + "Accounts?filter[where][AccountID]=" + $('#accountIdCredit').val() + "", function(success) {
        var html = '';
        $('#accNoCredit').val(success[0].AccountNo);
    });


});
$('#accountIdCreditOnline').on('change', function() {

    $.get(apiPath + "Accounts?filter[where][AccountID]=" + $('#accountIdCreditOnline').val() + "", function(success) {
        var html = '';
        $('#accNoCreditOnline').val(success[0].AccountNo);
    });


});

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

        $('#iListDebitOnline').append(html);
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
        console.log(success);
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

function getBankListCreditOnline() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListCreditOnline').append(html);
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

function getBankListCredit() {
    $.get(apiPath + "Banks?filter[where][Name][neq]=Cash In Hand", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            if (ele.Name != "Profit Loss") {
                html += `<option>` + ele.Name + `</option>`
            }
        }, this)

        $('#bankListCredit').append(html);
    });

}

function getCustomersListCredit() {
    $.get(apiPath + "Customers", function(success, status) {

        var html = '';

        success.forEach(function(ele) {
            html += `<option>` + ele.CustomerID + `</option>`
        }, this)

        $('#creditCustomer').append(html);
    });

}

function addDebit() {

    /* var data = {
         "InvestorID": $('#debitInvestor').val(),
         "CarID": $('#debitCar').val(),
         "DO": $('#debitDo').val()
     }
     console.log(data);*/
    if ($('#dsel1').val() == "Car") {
        if ($(whosCar).val() == "Investor") {
            var investors = [];
            var percentage;
            console.log(carAmount)
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
        if ($(whosCar).val() == "Supplier") {
            $.get(apiPath + "DayBooks/SupplierToCar?SupplierID=" + $('#debitSupplier').val() + "&CarID=" + $('#debitCarSupplier').val() + "&AddedBy=" + localStorage.getItem("myVar") + "", function(success, status) {
                location.reload();
            });
        }
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
        /*if($('#investment2').val()=="Online Payment"){

            $.get(apiPath + "Investors/TransferInInvestor?AccountID="+$('#iAListCreditOnline').val()+"&Amount="+$('#iAmountCreditOnline').val()+"&InvestorID="+$('#iListCreditOnline').val()+"", function(success, status) {
                location.reload();
                 });
        }*/
    }

    if ($('#dsel1').val() == "Supplier") {
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
    $.get(apiPath + "Cars", function(success, status) {
        var html = '';

        success.forEach(function(ele) {
            if (!ele.SupplierID) {
                html += `<option>` + ele.CarID + `</option>`
            }
        }, this)

        $('#debitCarSupplier').append(html);
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
                toastr.success("Price of " + ele.CarID + " is " + ele.PurchasePrice);
                carAmount = ele.PurchasePrice;
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

        console.log("investor removed " + count);
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

function bariProfit() {
    toastr.success('1000000', 'Bari Profit :');
}

function newCar() {
    toastr.success('1000000', 'New Car Profit :');
}

function renovatedCar() {
    toastr.success('1000000', 'Renovated Car Profit:');
}

function oldCar() {
    toastr.success('1000000', 'Old Car Profit :');
}

function carExpense() {
    toastr.success('1000000', 'Car Expense Profit :');
}

function bookings() {
    toastr.success('1000000', 'Booking Profit :');
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
    getSupplierlist();
    getCarListDebitSupplier();
    $('#ifCount').hide();

});

$('#credit').on('show.bs.modal', function() {
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

    /* getBankListAccountBdiv();
     getBankListBdivCheque();
     getBankListBdivCheque2();
     getBankListBdivOnline();
     getBankListBdivOnline2();*/

});
$('#addAccount').on('show.bs.modal', function() {
    getBankListAccount();
});