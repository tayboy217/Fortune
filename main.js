const results = [
  '大吉',
  '小吉',
  '大吉',
  '中吉',
  '小吉',
  '凶'
]

function draw() {
  const key = Math.floor(Math.random()*results.length)
  console.log(key)
  const fortune = document.getElementById("fortune")
  fortune.textContent = results[key]
}
// Math.random()乱数の出力によく使う