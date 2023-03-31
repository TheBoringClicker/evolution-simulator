var points = 0;
var upgradeCost = 10;
var upgradeLevel = 1;
var clickValue = 1;

// Button that increases the player's points
var clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", function() {
	points += clickValue;
	document.getElementById("points").innerHTML = points;
});

// Button that purchases an upgrade
var upgradeButton = document.getElementById("upgradeButton");
upgradeButton.addEventListener("click", function() {
	if (points >= upgradeCost) {
		points -= upgradeCost;
		clickValue += 1;
		upgradeLevel += 1;
		upgradeCost *= upgradeLevel;
		document.getElementById("points").innerHTML = points;
		document.getElementById("upgrade").innerHTML = "x" + clickValue;
		document.getElementById("upgradeCost").innerHTML = upgradeCost;
	} else {
		showAlert("Not enough points to purchase upgrade!");
	}
});

// Function that shows an alert message
function showAlert(message) {
	var alertDiv = document.getElementById("alert");
	alertDiv.innerHTML = message;
	alertDiv.style.display = "block";
	setTimeout(function() {
		alertDiv.style.display = "none";
	}, 3000);
};

