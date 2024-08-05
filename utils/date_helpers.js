export function timeAgo(date){
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " yıl önce";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " ay önce";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " gün önce";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " saat önce";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " dakika önce";
    }
    return Math.floor(seconds) + " saniye önce";
}

/**
 * 
 * @param {Date} date 
 * @returns DD MM YYYY Day Hour:Minute
 */
export function dateToTR(date) {
    const months = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
    ]

    const days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ]

    const dateObj = new Date(date)
    const day = dateObj.getDay()
    const hour = `${dateObj.getHours()}`
    const minute = `${dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes()}`
    return `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()} ${days[day]} ${hour}:${minute}`
}
