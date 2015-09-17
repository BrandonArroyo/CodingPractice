var messages = '';
var student;
var search;
function print(message){
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;

}
function getStudentReport( student ){
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    return report;
}
while(true){
    search = prompt("student name ");
    console.log(search);
    if (search === null ||search.toLowerCase() === 'quit'){
        break;
    }
    for(var i = 0; i < students.length; i +=1){
        student = students[i];
        console.log(search);
        if(student.name === search){
            console.log(student);
            messages = getStudentReport(student);
            print(messages);

        }
}


}
