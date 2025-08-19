


/*---- 核となる定数 ---------------------------*/
// 正解の数字を用意する
let targetNumberCore = Math.floor(Math.random() * 10) + 1;


/*---- DOM要素を取得 ---------------------------*/
const guessInputEl = document.getElementById('guessInput'); // 入力欄
const guessBtnEl = document.getElementById('guessBtn'); // 「答える」ボタン
const resetBtnEl = document.getElementById('resetBtn'); // 「リセット」ボタン
const resultEl = document.getElementById('result'); // 結果


/*---- ボタンを押したらチェックする関数 ---------------------------*/
guessBtnEl.addEventListener('click', () => {
   // 入力値を取り出して数値に
  const guessValue = Number(guessInputEl.value);

  // 入力チェック(未入力や 1〜10 以外を弾く)
  if ( Number.isNaN(guessValue) || guessValue < 1 || guessValue > 10 ) {
    resultEl.textContent = "1〜10 の数字を入れてね";
    return; // ← 不正な入力なのでここで処理を終了（以降の判定に進ませない）
  }

  ///////////////////////////////////
  // 正解かどうかの判定
  if ( guessValue === targetNumberCore ) {
    // 入力値と正解がイコール
    resultEl.textContent = "正解！🎉";
  } else if ( guessValue > targetNumberCore ) {
    // 入力値の方が大きいなら
    resultEl.textContent = "もっと小さいよ ⬇️";
  } else {
    // 入力値の方が小さいなら
    resultEl.textContent = "もっと大きいよ ⬆️";
  }
});


/*---- リセット処理 ---------------------------*/
resetBtnEl.addEventListener('click', () => {
  // 新しい正解を作り直す
  targetNumberCore = Math.floor(Math.random() * 10) + 1;

  // 入力欄を空にする
  guessInputEl.value = "";

  // 結果を初期メッセージに
  resultEl.textContent = "新しいゲームを始めたよ！🎲";
});



/*
[核となる定数]
targetNumberCore => 当てるべき数字

[DOM要素]…ずっと使う
guessInputEl => 入力ボックス
guessBtnEl   => 「答える」ボタン
resetBtnEl   => 「リセット」ボタン
resultEl     => 結果

[処理の途中でだけ使う定数]
guessValue => 入力値
*/







