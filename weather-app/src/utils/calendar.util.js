const dayNames = [
    {short: 'Sun', long : 'Sunday'},
    {short: 'Mon', long : 'Monday'},
    {short: 'Tue', long : 'Tuesday'},
    {short: 'Wed', long : 'Wednesday'},
    {short: 'Thu', long : 'Thursday'},
    {short: 'Fri', long : 'Friday'},
    {short: 'Sat', long : 'Saturday'}
];

export const getDayNamesArrayFromToday = (num) => {
    let arr = [];
    let day = new Date().getDay();
    for (let i=0; i<num; i++) {
        arr.push(dayNames[day % dayNames.length]);
        day++;
    }

    return arr;
};