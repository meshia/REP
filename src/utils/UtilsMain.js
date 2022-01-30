/* Utility Functions */

const GenerateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

const IsElementHidden = (el) => {
    if(el) {
        var style = window.getComputedStyle(el);
        return (style.display === 'none')
    }
}

const IsMobile = () => {
    return ( window.innerWidth <= 767 );
}

const CamelizeString = (str) => {
    return  (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
}

module.exports = {
    GenerateKey,
    IsElementHidden,
    IsMobile,
    CamelizeString
}

