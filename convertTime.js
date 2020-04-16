'use strict'

class Convert {
    static dateToString(birth_date) {
        birth_date = birth_date.split("-")
        let bulan = "";
        switch (birth_date[1]) {
            case "01":
                bulan = "Januari";
                break;
            case "02":
                bulan = "Februari";
                break;
            case "03":
                bulan = "Maret";
                break;
            case "04":
                bulan = "April";
                break;
            case "05":
                bulan = "Mei";
                break;
            case "06":
                bulan = "Juni";
                break;
            case "07":
                bulan = "Juli";
                break;
            case "08":
                bulan = "Agustus";
                break;
            case "09":
                bulan = "September";
                break;
            case "10":
                bulan = "Oktober";
                break;
            case "11":
                bulan = "November";
                break;
            case "12":
                bulan = "Desember";
                break;
        }
        return `${birth_date[2]} ${bulan} ${birth_date[0]}`;
    }

    static stringToDate(birth_date) {
        birth_date = birth_date.split(" ");
        let bulan = "";
        switch (birth_date[1]) {
            case "Januari":
                bulan = "01";
                break;
            case "Februari":
                bulan = "02";
                break;
            case "Maret":
                bulan = "03";
                break;
            case "April":
                bulan = "04";
                break;
            case "Mei":
                bulan = "05";
                break;
            case "Juni":
                bulan = "06";
                break;
            case "Juli":
                bulan = "07";
                break;
            case "Agustus":
                bulan = "08";
                break;
            case "September":
                bulan = "09";
                break;
            case "Oktober":
                bulan = "10";
                break;
            case "November":
                bulan = "11";
                break;
            case "Desember":
                bulan = "12";
                break;
        }
        return `${birth_date[2]}-${bulan}-${birth_date[0]}`;
    }

    static toIndo(birth_date) {
        birth_date = birth_date.split(" ")
        let bulan = "";
        switch (birth_date[0]) {
            case "Jan":
                bulan = "January";
                break;
            case "Feb":
                bulan = "February";
                break;
            case "Mar":
                bulan = "March";
                break;
            case "Apr":
                bulan = "April";
                break;
            case "May":
                bulan = "May";
                break;
            case "Jun":
                bulan = "June";
                break;
            case "Jul":
                bulan = "July";
                break;
            case "Aug":
                bulan = "August";
                break;
            case "Sep":
                bulan = "September";
                break;
            case "Oct":
                bulan = "October";
                break;
            case "Nov":
                bulan = "November";
                break;
            case "Dec":
                bulan = "December";
                break;
        }
        return `${birth_date[1]} ${bulan} ${birth_date[2]}`;
    }

    static toISOIndo(birth_date) {
        birth_date = birth_date.split(" ")
        let bulan = "";
        switch (birth_date[0]) {
            case "Jan":
                bulan = "01";
                break;
            case "Feb":
                bulan = "02";
                break;
            case "Mar":
                bulan = "03";
                break;
            case "Apr":
                bulan = "04";
                break;
            case "May":
                bulan = "05";
                break;
            case "Jun":
                bulan = "06";
                break;
            case "Jul":
                bulan = "07";
                break;
            case "Aug":
                bulan = "08";
                break;
            case "Sep":
                bulan = "09";
                break;
            case "Oct":
                bulan = "10";
                break;
            case "Nov":
                bulan = "11";
                break;
            case "Dec":
                bulan = "12";
                break;
        }
        return `${birth_date[2]}-${bulan}-${birth_date[1]}`;
    }
}




module.exports = Convert;