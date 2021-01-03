const omikujiButton = document.getElementById('omikujiImgWrap');
let beforeOmikuji = true;
omikujiButton.addEventListener('click', function() {
    if (beforeOmikuji) {
        omikujiButton.classList.add('omikujiOn');
        resultShow();
        beforeOmikuji = false;
    }
}, false);

function resultShow() {
    const ON = Math.random();
    let ORN;
    let omikujiResultData;

    if (0 <= ON && ON < 0.01) {
        ORN = "大大吉";
        omikujiResultData = "大大吉!今年はいっぱい良いことあるかも！";
        OmikujiRenai = "超最高";
        OmikujiStudy = "超最高";
    } else if (0.01 <= ON && ON < 0.3) {
        ORN = "大吉";
        omikujiResultData = "大吉!今年はたくさんいいことあるかも!";
    } else if (0.3 <= ON && ON < 0.6) {
        ORN = "中吉";
        omikujiResultData = "中吉!今年はいいことあるかも";
    } else if (0.6 <= ON && ON < 1) {
        ORN = "小吉";
        omikujiResultData = "小吉!今年もいい年に!";
    }
    if (0.01 <= ON) {
        OmikujiRenai = makeSubData();
        OmikujiStudy = makeSubData();
    }

    const element = document.body;
    const omikujiResultMakeDiv = document.createElement('div');
    const omikujiResultMakeDivWrap = document.createElement('div');

    omikujiResultMakeDiv.id = 'omikujiResult';
    element.appendChild(omikujiResultMakeDiv);

    omikujiResultMakeDivWrap.id = 'omikujiResultMakeDivWrap';
    omikujiResultMakeDiv.appendChild(omikujiResultMakeDivWrap);

    omikujiResultMakeDivWrap.innerHTML = `<p id="omikujiText">御みくじ</p>
<p id="resultOmikujiTitle">${ORN}</p>
<p id="omikujiResultData">${omikujiResultData}</p>
<p class="omikujiResultData">恋愛 : ${OmikujiRenai}</p>
<p class="omikujiResultData">学問 : ${OmikujiStudy}</p>
<p id="reOmikuji" onclick="resultButtonDo();">もう一度</p></div>`;
}

function resultButtonDo() {
    location.reload();
}

function makeSubData() {
    const ONSub = Math.random();
    if (0 <= ONSub && ONSub < 0.01) {
        return "めちゃチャチャ最高"
    } else if (0.01 <= ONSub && ONSub < 0.4) {
        return "超最高"
    } else if (0.4 <= ONSub && ONSub < 0.7) {
        return "最高"
    } else if (0.7 <= ONSub && ONSub < 1) {
        return "普通"
    }
}