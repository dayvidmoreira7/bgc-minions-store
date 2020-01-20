export default {
    isAuthenticated: () => {
        return true;
    },
    toCurrency: (value) => {
        let formated = parseFloat(value)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let [int, decimal] = formated.split('.');
        let newformated = `${int.replace(',', '.')},${decimal}`
        return newformated;
    },
    queryParams: () => {
        let { href } = window.location
        let query = href.split('?').pop()
        let params = query.split('&');

        let callback = {};
        for(let param of params) {
            callback[param.split('=')[0]] = param.split('=')[1];
        }

        return callback;
    },
}