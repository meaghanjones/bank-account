var account;
var startBalance;
var withdraw;
var deposit;

function User(name, startBalance) {
  this.name = name;
  this.balance = startBalance;
}

User.prototype.exchange = function() {
  this.balance = this.balance + deposit - withdraw;
}

$(document).ready(function() {
  $("#newAccount").click(function(event) {
    debugger;
    event.preventDefault();
    var name = $("#name").val();
    if (isNaN(parseInt($("#startBalance").val()))) {
      startBalance = 0;
    } else {
      startBalance = parseInt($("#startBalance").val());
    }
    account = new User(name, startBalance);
    $("#name").val('');
    $("#startBalance").val('');
    $("#total").text(account.balance);
  });
  $("#exchange").click(function(event) {
    event.preventDefault();
    withdraw = parseInt($("#withdraw").val());
    deposit = parseInt($("#deposit").val());
    if (isNaN(withdraw)) {
      withdraw = 0;
    }
    if (isNaN(deposit)) {
      deposit = 0;
    }
    account.exchange();
    $("#total").text(account.balance);
  });
});
