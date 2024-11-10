function loadPage(page) {
    const content = document.getElementById("content");
  
    console.log(`Loading page: ${page}`);  // デバッグメッセージ
  
    if (page === "home") {
      content.innerHTML = "<h2>Loading Home...</h2>";
      import('./home.js')
        .then(module => {
          console.log('Home page loaded successfully'); // 成功メッセージ
          content.innerHTML = module.default;
        })
        .catch(error => {
          console.error("Error loading home.js:", error);
          content.innerHTML = "<h2>Error loading Home page</h2>";
        });
    } else if (page === "home2") {
      content.innerHTML = "<h2>Loading Home2...</h2>";
      import('./home2.js')
        .then(module => {
          console.log('Home2 page loaded successfully'); // 成功メッセージ
          content.innerHTML = module.default;
        })
        .catch(error => {
          console.error("Error loading home2.js:", error);
          content.innerHTML = "<h2>Error loading Home2 page</h2>";
        });
    }
  }
  
  // ボタンにイベントリスナーを追加
  document.getElementById('homeButton').addEventListener('click', () => loadPage('home'));
  document.getElementById('home2Button').addEventListener('click', () => loadPage('home2'));
  
  