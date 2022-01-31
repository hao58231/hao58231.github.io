window.onload = function () {
    // 添加影片按钮
    let add_pic_btn = document.getElementById('add-pic-btn');
    add_pic_btn.onclick = function () {
        alert("前方正在施工!");
    }

    // 加载动画2s
    let load = document.querySelector('.loading');
    let container_main = document.querySelector('.container-main');
    let timer = setTimeout(() => {
        // loading加载完毕
        load.classList.remove('loading');
        load.classList.add('not-show');
        // 显示主体内容
        container_main.classList.remove('not-show');

        clearTimeout(timer);
    }, 1400)
}