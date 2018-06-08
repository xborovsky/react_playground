export const searchPhotos = (searchText, pageNum = 1) => {
    return fetch(`https://api.500px.com/v1/photos/search?term=${searchText}&page=${pageNum}&rpp=20&image_size=440&sort=highest_rating&consumer_key=sPvXEpW2sFrch65rpyZQf01lBHuRGkEDDROTG1r4`)
        .then(res => res.json());
}