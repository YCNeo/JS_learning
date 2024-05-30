function Stopwatch() {
    let startTime, endTime, running = false, duration = 0;

    this.reset = function () {
        duration = 0;
    };

    this.start = function () {
        if (running)
            throw console.error('start already');
        else {
            startTime = Date.now();
            running = true;
        }
    };

    this.stop = function () {
        if (!running)
            throw console.error('stop already');
        else {
            endTime = Date.now();
            duration += (endTime - startTime) / 1000;
            running = false;
        }
    };

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}