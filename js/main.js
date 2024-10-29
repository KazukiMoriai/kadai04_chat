$(document).ready(function () {
    // モーダルをダイアログとして設定
    $("#myModal").dialog({
        autoOpen: false, // 自動では開かない設定
        modal: true,     // モーダル外クリックをブロックする設定
        buttons: {
            "close": function () { // モーダル内に「閉じる」ボタンを追加
                $(this).dialog("close"); // ボタンが押されたらモーダルを閉じる
            }
        }
    });

    // 「モーダルを開く」ボタンがクリックされた時にモーダルを表示
    $("#openModal").click(function () {
        $("#myModal").dialog("open"); // モーダルを開く
    });

    // モーダルの外側（背景部分）をクリックした時にモーダルを閉じる
    $(document).on("click", ".ui-widget-overlay", function () {
        $("#myModal").dialog("close"); // 背景をクリックするとモーダルを閉じる
    });
});
