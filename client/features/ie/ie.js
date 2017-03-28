function continueWarned() {
    var date = new Date();
    date.setTime(date.getTime() + (1*24*60*60*1000));
    
    document.cookie = "warned=1; expires=" + date.toUTCString() + "; path=/";
    
    window.location = "/";
}
