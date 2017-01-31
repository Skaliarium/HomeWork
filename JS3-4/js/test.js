var questionTitle = "Тест по программированию";

var question = [
     {
         ask: "Вопрос №1",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3",
         ],
     },
     {
         ask: "Вопрос №2",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2",
         ],
     },
     {
         ask: "Вопрос №3",
         answers: [
             "Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3",
             "Вариант ответа №4", "Вариант ответа №5",
         ],
     }
];

function newHTNL(q) {
    var newBody = "";

    newBody += "<h1>" + questionTitle + "</h1>";
    newBody += "<form>";
    newBody += "<ol>";

    for (var i = 0; i < q.length; i++) {
        newBody += "<li>" + q[i].ask;
        newBody += '<br>';
        for (var k = 0; k < q[i].answers.length; k++) {
            newBody += '<input type="checkbox" value=\"' + (k+1) + '\">';
            newBody += q[i].answers[k];
            newBody += '<br>';
        }

        newBody += "</li>";
    }
    newBody += "</ol>";
    newBody += '<button type="button" name="button">Проверить мои результаты</button>';
    newBody += "</form>";

    return newBody;
}


document.body.innerHTML = newHTNL(question);
