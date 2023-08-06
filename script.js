// サブイメージを動的に生成する
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const ovarlay = document.querySelector(".ovarlay");

// サムネイル画像の動き
for (let i = 1; i < 6; i++) {
  // サムネイルを動的に作成
  const subImg = document.createElement("img");
  subImg.src = `images/00${i}.png`; // 画像を選択
  subImg.className = "sub-img";  // クラスを設定
  thumbBar.appendChild(subImg); // thumb-barの小要素として追加

  // サムネイルをクリックすると、拡大表示される動作
  subImg.onclick = function() {
    const displayedImg = document.querySelector(".displayed-img");
    displayedImg.src = this.src;
  }
};

// 暗くするボタンの動き
// ボタンの初期状態を定義
let btnOn = false;

// ボタンをクリックするたびに、overlayの背景色を変える
btn.addEventListener("click", () => {
  btnOn = !btnOn;
  if (btnOn) {
    ovarlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    console.log("false");
  } else {
    ovarlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    console.log("true");
  }
});
