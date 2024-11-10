const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 静的ファイルを提供するディレクトリを指定
app.use(express.static(path.join(__dirname, '..')));

// ルートへのリクエストに対して index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


  
  