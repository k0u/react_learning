const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    if (inputText == "") {
        return;
    }

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = inputText;

    //完了buttonタグ生成
    const completeButton = createCompleteButton();
    
    //削除buttonタグ生成
    const deleteButton = createDeleteButton();
    
    //divタグの子要素に書く要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);
}

const createCompleteButton = () => {
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //削除
        removeIncompleteList(completeButton.parentNode);   
        //完了リストに追加する要素
        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;

        //div以下を初期化
        addTarget.textContent = null;

        //liタグの生成
        const li = document.createElement("li");
        li.innerText = text;

        //戻すbuttonの生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
        //削除
        removeCompleteList(backButton.parentNode);
        const backTarget = backButton.parentNode;
        const text = backTarget.firstElementChild.innerText;
        backTarget.textContent = null;
        const li = document.createElement("li");
        li.innerText = text;
        const completeButton = createCompleteButton();
        const deleteButton = createDeleteButton();
        backTarget.appendChild(li);
        backTarget.appendChild(completeButton);
        backTarget.appendChild(deleteButton);

        //完了リストに追加
        document.getElementById("incomplete-list").appendChild(backTarget);
        });

        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        //完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);
    });
    return completeButton;
}

const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        removeIncompleteList(deleteButton.parentNode)
    });
    return deleteButton;
}

const removeIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

const removeCompleteList = (target) => {
    document.getElementById("complete-list").removeChild(target);
}


document.getElementById("add-button")
.addEventListener("click", () => onClickAdd());
