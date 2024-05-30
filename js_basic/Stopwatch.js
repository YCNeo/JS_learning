function Stopwatch() {
    let startTime, endTime, running = false, duration = 0;

    this.reset = function () {
        duration = 0;
    };

    this.start = function () {
        if (running)
            throw new Error('start already');

        startTime = Date.now();
        running = true;
    };

    this.stop = function () {
        if (!running)
            throw console.error('stop already');

        endTime = Date.now();
        duration += (endTime - startTime) / 1000;
        running = false;
        // console.log('STOP!');
    };

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}