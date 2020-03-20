function cleanUpDateWOW(date) {
    var Date1Obj = String(date).split('-');
    new_Date = new Date(Date1Obj[0], Number(Date1Obj[1])-1, Number(Date1Obj[2]));
    console.log('took in ', date, 'output ', new_Date);
    return new_Date;
}
