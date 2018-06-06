export const loadPageData = (pageNum) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`This is page ${pageNum + 1} data!`), 650)
    });
    return promise;
};