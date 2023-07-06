function searchSummoner() {
  var summonerName = document.getElementById("summonerName").value;
  var resultDiv = document.getElementById("result");

  // Summoner 정보 요청을 위한 API 호출
  // 예시를 위해 여기서는 단순히 결과를 텍스트로 표시하는 것으로 가정합니다.
  resultDiv.innerHTML = "소환사 이름: " + summonerName + "<br>";
  resultDiv.innerHTML += "티어: 다이아몬드 4";

  // 게임 히스토리 요청을 위한 API 호출
  // 예시를 위해 여기서는 게임 히스토리를 단순히 텍스트로 표시하는 것으로 가정합니다.
  resultDiv.innerHTML += "<h3>게임 히스토리</h3>";
  var gameHistory = [
    { champion: "이즈리얼", result: "승리", kills: 12, deaths: 4, assists: 10 },
    { champion: "제드", result: "패배", kills: 7, deaths: 9, assists: 5 },
    { champion: "리신", result: "승리", kills: 10, deaths: 2, assists: 8 }
  ];

  var gameHistoryDiv = document.createElement("div");
  gameHistoryDiv.setAttribute("id", "game-history");

  for (var i = 0; i < gameHistory.length; i++) {
    var gameItemDiv = document.createElement("div");
    gameItemDiv.classList.add("game-item");

    var gameInfo = gameHistory[i];
    var gameText = "챔피언: " + gameInfo.champion + " / 결과: " + gameInfo.result + " / KDA: " + gameInfo.kills + "/" + gameInfo.deaths + "/" + gameInfo.assists;
    gameItemDiv.innerText = gameText;

    gameHistoryDiv.appendChild(gameItemDiv);
  }

  resultDiv.appendChild(gameHistoryDiv);
}
