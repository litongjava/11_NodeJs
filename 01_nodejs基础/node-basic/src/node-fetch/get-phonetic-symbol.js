const fetch = require('node-fetch');

// 替换为你喜欢的词典API的端点URL
const apiEndpoint = 'https://api.dictionary.com/api/v3/references/collegiate/json/';

function getPhoneticSymbol(word) {
    const url = apiEndpoint + word;

    // 发送GET请求获取单词的定义信息
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0 && data[0].hwi && data[0].hwi.prs) {
                const phoneticSymbol = data[0].hwi.prs[0].mw;
                console.log(`单词 "${word}" 的音标是: ${phoneticSymbol}`);
            } else {
                console.log(`找不到单词 "${word}" 的音标。`);
            }
        })
        .catch(error => {
            console.error('发生错误:', error);
        });
}

// 用法示例
const word = 'hello';
getPhoneticSymbol(word);

