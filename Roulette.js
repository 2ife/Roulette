function deposit() {
  const deposit = document.querySelector("#deposit");
  const depositMoney = document.querySelector("#depositMoney");
  if (depositMoney.value !== "0") {
    alert("한 판 더! 또는 상환 버튼을 눌러주세요.");
  } else if (isNaN(Number(deposit.value))) {
    alert("입금하실 금액을 정확히 기입해 주세요.");
    deposit.value = "0";
  } else {
    if (confirm(deposit.value + "원을 입금하시겠습니까?")) {
      if (Number(deposit.value) < 100) {
        alert("최소 100원부터 입금 가능합니다!");
      } else {
        depositMoney.value = deposit.value;
        alert(deposit.value + "원 입금되었습니다. 룰렛 타입을 골라주세요!");
        deposit.value = "0";
      }
    }
  }
}
function chooseRouletteType(sector) {
  const hideDisplay = document.querySelectorAll("#hideDisplay");
  const resultMoney = document.querySelector("#resultMoney");
  if (depositMoney.value === "0") {
    alert("먼저 입금을 해주세요!");
  } else if (resultMoney.value === "0" && sector === ".gridInside3") {
    alert(
      "Roulette_4, Roulette_8, Roulette_16 중에 하나를 먼저 하셔야 Roulette_bonus를 하실 수 있습니다."
    );
    for (i = 0; i < hideDisplay.length; i++) {
      hideDisplay[i].style.display = "none";
    }
  } else {
    for (i = 0; i < hideDisplay.length; i++) {
      hideDisplay[i].style.display = "none";
    }
    for (
      i = 0;
      i < document.querySelectorAll(sector + " #hideDisplay").length;
      i++
    ) {
      document.querySelectorAll(sector + " #hideDisplay")[i].style.display =
        "block";
    }
  }
}
function extractNumber(number) {
  const earningsRate = document.querySelector("#earningsRate");
  if (
    document.querySelector("body").style.backgroundColor === "snow" &&
    number !== 4
  ) {
    alert(
      "번호 추출은 1회만 가능합니다. 추가로 하고 싶으시면 Roulette_bonus를 이용해주세요."
    );
  } else if (
    document.querySelector("body").style.backgroundColor === "ghostwhite"
  ) {
    alert("이번 게임은 완료되었습니다. 한 번 더! 또는 상환 버튼을 눌러주세요.");
  } else {
    document.querySelector("#extractedNumber" + number).value = Math.ceil(
      Math.random() * Math.pow(2, number + 1)
    );
    var tableNumber = "";
    var chooseTypeOfMoney = depositMoney.value;
    var cellsNumber = Number(
      document.querySelector("#extractedNumber" + number).value
    );
    document.querySelector("body").style.backgroundColor = "snow";
    if (number === 3) {
      if (document.querySelector("#extractedNumber" + number).value <= 7) {
        var tableNumber = "_1";
      } else if (
        document.querySelector("#extractedNumber" + number).value > 7
      ) {
        var tableNumber = "_2";
        var cellsNumber = Number(
          document.querySelector("#extractedNumber" + number).value - 7
        );
      }
    } else if (number === 4) {
      document.querySelector("#extractedNumber" + number).value = Math.ceil(
        Math.random() * 2
      );
      var tableNumber = "";
      var cellsNumber = Number(
        document.querySelector("#extractedNumber" + number).value
      );
      var chooseTypeOfMoney = resultMoney.value;
      document.querySelector("body").style.backgroundColor = "ghostwhite";
    }
    document.querySelector("#result" + number).value = eval(
      chooseTypeOfMoney +
        document.querySelector("#table" + number + tableNumber).rows[1].cells[
          cellsNumber
        ].className
    );
    resultMoney.value = document.querySelector("#result" + number).value;
    earningsRate.value = eval(
      ((resultMoney.value - depositMoney.value) / depositMoney.value) * 100
    );
  }
}
function regame() {
  if (resultMoney.value === "0") {
    alert("잔액이 남아 있지 않습니다. 입금을 해주세요.");
    depositMoney.value = "0";
  } else {
    depositMoney.value = resultMoney.value;
    resultMoney.value = "0";
  }
  earningsRate.value = "0";
  for (i = 0; i < hideDisplay.length; i++) {
    hideDisplay[i].style.display = "none";
  }
  document.querySelector("body").style.backgroundColor = "white";
}
function payBack() {
  alert("상환받으실 금액은 " + resultMoney.value + "원입니다.");
  depositMoney.value = "0";
  earningsRate.value = "0";
  resultMoney.value = "0";
  for (i = 0; i < hideDisplay.length; i++) {
    hideDisplay[i].style.display = "none";
  }
  document.querySelector("body").style.backgroundColor = "white";
}
