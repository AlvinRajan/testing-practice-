function capitalize(string) {
    if (typeof string !== 'string' || !string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
module.exports = capitalize;