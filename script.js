
document.getElementById("result-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const examId = document.getElementById("exam-id").value.trim();
    fetch("results.json")
        .then(response => response.json())
        .then(data => {
            const student = data.find(entry => entry.id === examId);
            const resultDiv = document.getElementById("result");

            if (student) {
                let gradesList = "";
                for (const [subject, grade] of Object.entries(student.grades)) {
                    gradesList += `<li>${subject}: ${grade}</li>`;
                }

                resultDiv.innerHTML = `
                    <h3>الاسم: ${student.name}</h3>
                    <p>المدرسة: ${student.school}</p>
                    <p>المرحلة: ${student.stage}</p>
                    <p>النتيجة: ${student.status}</p>
                    <h4>الدرجات:</h4>
                    <ul>${gradesList}</ul>
                `;
            } else {
                resultDiv.innerHTML = "<p style='color:red'>الرقم الامتحاني غير موجود</p>";
            }
        })
        .catch(error => {
            console.error("خطأ:", error);
        });
});
