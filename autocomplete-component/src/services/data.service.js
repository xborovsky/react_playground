export const filterData = (data, searchStr) => {
    let result = [];
    data.forEach(element => {
        if (element.toLowerCase().startsWith(searchStr.toLowerCase())) {
            result.push(element);
        }
    });
    return result;
};