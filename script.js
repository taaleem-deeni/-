
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const id = document.getElementById("studentId").value;
    const resultBox = document.getElementById("result");
    const results = {
        "1001": "الاسم: زيد علي - المدرسة: النور - المرحلة: المتوسطة - النتيجة: ناجح",
        "1002": "الاسم: فاطمة حسين - المدرسة: البيان - المرحلة: الإعدادية - النتيجة: مكمل",
        "1003": "الاسم: محمد كريم - المدرسة: الفرقان - المرحلة: الابتدائية - النتيجة: ناجح"
    };
    resultBox.innerText = results[id] || "لم يتم العثور على نتيجة لهذا الرقم.";
});
