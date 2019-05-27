class TimeOut {
    timeOut; 
    start = (func, params, miliseconds) => {
        this.timeOut = setTimeout(() => func(params),miliseconds);
    }
    clear = () => {
        clearTimeout(this.timeOut);
    }
}

export const TimeOutHandler = new TimeOut();