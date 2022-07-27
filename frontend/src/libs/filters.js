import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatMoney', function(value, currency, code = true) {
    if(!currency) {
        return value
    }
    const amount = Number(value)
        .toFixed(currency.decimal_place)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

    return code
        ? `${currency.code} ${amount}`
        : amount
})

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
    }
})

Vue.filter('formatDateTime', function(value) {
    if (value) {
        return moment(String(value)).format('ddd DD, MMM' +
            ' hh:mm a')
    }
})

Vue.filter('titleCase',function (value) {
    var testString = value

    var titleCaseString = testString
        .replace(/(_|-)/g, ' ')
        .trim()
        .replace(/\w\S*/g, function(str) {
            return str.charAt(0).toUpperCase() + str.substr(1)
        })
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')

    return titleCaseString
})

Vue.filter('trim', (value, max) => {
    if(!value) {
        return value
    }
    const len = value.length
    return len > max
        ? `${value.substring(0, max)}...`
        : value
})
