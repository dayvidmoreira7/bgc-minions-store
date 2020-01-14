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
}