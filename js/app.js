// 超簡易ベンチマーク
function benchmark() {
    // ベンチマーク対象の処理を実行する前のタイムスタンプを取得
    const startTime = performance.now();
  
    // ベンチマークの実行回数
    const iterations = 10000000;
  
    for (let i = 0; i < iterations; i++) {
        // テストしたいコードのセクション
        // 例: 配列のソート
        const array = [5, 3, 1, 4, 2];
        array.sort();
    }  
    // ベンチマーク対象の処理を実行した後のタイムスタンプを取得
    const endTime = performance.now();

    // 実行時間を計算
    const executionTime = endTime - startTime;

    // 整数に変換して返す
    return Math.floor(executionTime);
}

function showLocalStorage()
{
    $("#list").empty();
    for(let i = localStorage.length; i > 0 ; i--)
    {
        let value = localStorage.getItem(i);
        if(value !== '')
        {
            const json = JSON.parse(value);
            const html =
            `
            <div class="grid">
                <div class="id">ID: ${json.id}</div>
                <div class="platform">OS: ${json.platform}</div>
                <div class="date">${json.date}</div>
                <div class="cpu">CPU: ${json.cpu}</div>
                <div class="system">SYS: ${json.system}</div>
                <div class="single">${json.single}</div>
            </div>
            `;
            $("#list").append(html);
        }
    }
}