/* tab script*/
function openTab(tabId) {
    // 隱藏所有內容
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.classList.remove('active');
    });

    // 隱藏所有標籤
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // 顯示指定內容
    var tabContent = document.getElementById(tabId);
    tabContent.classList.add('active');

    // 標記對應的顯示狀態
    var activeTab = document.querySelector('[onclick="openTab(\'' + tabId + '\')"]');
    activeTab.classList.add('active');

    if (tabId === 'tab2') {
        document.querySelector('.logo_roll').style.transform = 'translateX(232.5px) rotate(360deg)';
    } else {
        document.querySelector('.logo_roll').style.transform = 'translateX(-232.5px) rotate(-360deg)';
    }
}

