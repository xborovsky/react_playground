export const formatTimerStr = (elapsed) => {
    elapsed = Math.trunc(elapsed / 1000);

    let hours = 0,
        minutes = 0,
        seconds = 0;

    hours = Math.trunc(elapsed / (60*60));
    elapsed %= (60*60);

    minutes = Math.trunc(elapsed / 60);
    elapsed %= 60;

    seconds = Math.trunc(elapsed);

    return (hours > 10 ? hours : ('0' + hours)) + ':' +
        (minutes > 10 ? minutes : ('0' + minutes)) + ':' +
        (seconds > 10 ? seconds : ('0' + seconds));
};