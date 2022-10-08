const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
let count = 0
//ボタンをクリックしたときの処理を登録
plusButton.onclick = function () {
  //ここにクリック後の処理を書く
  //countを更新
  count += 1
  //countを表示
  display.textContent = count
}
