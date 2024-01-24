
import moment from "moment";

export const trLocale =moment.locale('tr', {
    months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
    monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    monthsParseExact: true,
    weekdays: 'bazar_bazar ertəsi çərşənbə axşamı çərşənbə cümə axşamı cümə şənbə'.split('_'),
    weekdaysShort: 'Baz_BzE_Çər_Ax_Çüm_CAx_Cüm_Şən'.split('_'),
    weekdaysMin: 'Bz_BE_ÇA_AE_ÇÇ_CS_Ş'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Bugün saat] LT',
        nextDay: '[Sabah saat] LT',
        nextWeek: 'dddd [saat] LT',
        lastDay: '[Dünən saat] LT',
        lastWeek: 'dddd [keçən həftə saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: ' %s sonra',
        past: ' %s əvvəl',
        s: 'birneçə saniyə',
        m: 'bir dəqiqə',
        mm: '%d dəqiqə',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir il',
        yy: '%d il'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\-ci|\-nci|\-cü|\-ncü)/,
    ordinal: function (number) {
        var suffixes = ['-ci', '-nci', '-cü', '-ncü'];
        var lastDigit = number % 10;
        var suffix = (lastDigit === 0 || (lastDigit >= 5 && lastDigit <= 9) || (number % 100 >= 11 && number % 100 <= 19)) ? suffixes[0] : suffixes[lastDigit];
        return number + suffix;
    },
    meridiemParse: /AM|PM/,
    isPM: function (input) {
        return input.toUpperCase() === 'PM';
    },
    meridiem: function (hours, minutes, isLower) {
        return hours < 12 ? 'AM' : 'PM';
    },
    week: {
        dow: 1, // Bazar ertəsi həftənin birinci günüdür.
        doy: 4  // İlin ilk həftəsini müəyyənləşdirmək üçün istifadə edilir.
    }
});