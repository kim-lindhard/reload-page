function generateRefreshScript(secondsBetweenRefresh, callBack) {
    var client = new XMLHttpRequest();
    client.open('GET', 'scripts/templates/vanilla');
    client.onreadystatechange = function () {
        let responseText= client.responseText;
        let result = responseText.replace('secondsBetweenRefreshToken', secondsBetweenRefresh)
 
        callBack(result);
    }
    client.send();
}