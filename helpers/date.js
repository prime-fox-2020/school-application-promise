class Date{
    static changeToWord(month){
        switch(month){
            case '01': month = 'Januari'
                break;
            case '02': month = 'Februari'
                break;
            case '03': month = 'Maret'
                break;
            case '04': month = 'April'
                break;
            case '05': month = 'Mei'
                break;
            case '06': month = 'Juni'
                break;
            case '07': month = 'Juli'
                break;
            case '08': month = 'Agustus'
                break;
            case '09': month = 'September'
                break;
            case '10': month = 'Oktober'
                break;
            case '11': month = 'November'
                break;
            case '12': month = 'Desember'
                break;
            default:
                break;
        }
        return month;
    }

    static changeToNumber(month){
        switch (month) {
            case 'Januari': month = '01'
                break;
            case 'Februari': month = '02'
                break;
            case 'Maret': month = '03'
                break;
            case 'April': month = '04'
                break;
            case 'Mei': month = '05'
                break;
            case 'Juni': month = '06'
                break;
            case 'Juli': month = '07'
                break;
            case 'Agustus': month = '08'
                break;
            case 'September': month = '09'
                break;
            case 'Oktober': month = '10'
                break;
            case 'November': month = '11'
                break;
            case 'Desember': month = '12'
                break;
            default:
                break;
        }
        return month;
    }
}

module.exports = Date;