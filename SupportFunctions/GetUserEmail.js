function GetUserEmail() {
    console.log(Session.getActiveUser().getEmail());
    console.log(Session.getEffectiveUser());
    return Session.getActiveUser().getEmail();
}
