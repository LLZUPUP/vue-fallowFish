// 默认格式
const DEFAULT_FORMAT = 'yyyy-MM-dd'
const REGEXP = /([yMdhms])(\1*)/g
function result(s, l) {
    var l = l - (s + '').length
    for (var i = 0; i < l; i++) { 
    	s = '0' + s 
    }
    return s
}
export default {
	formatDate: {
		format: function(date, pattern) {
			pattern = pattern || DEFAULT_FORMAT;
			return pattern.replace(REGEXP, function($0){
				switch($0.charAt(0)) {
					case 'y': return result(date.getFullYear(),$0.length)
					case 'M': return result(date.getMonth() + 1, $0.length)
                    case 'd': return result(date.getDate(), $0.length)
                    case 'w': return date.getDay() + 1
                    case 'h': return result(date.getHours(), $0.length)
                    case 'm': return result(date.getMinutes(), $0.length)
                    case 's': return result(date.getSeconds(), $0.length)

				}
			})
		}
	}
}