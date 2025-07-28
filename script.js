
function searchResult() {
    const examId = document.getElementById("examId").value.trim();
    if (!examId) {
        document.getElementById("status").innerText = "يرجى إدخال الرقم الامتحاني.";
        return;
    }

    fetch("results.json")
        .then(response => response.json())
        .then(data => {
            if (data[examId]) {
                window.location.href = examId + ".html";
            } else {
                document.getElementById("status").innerText = "الرقم غير موجود. تأكد من إدخاله بشكل صحيح.";
            }
        });
}
