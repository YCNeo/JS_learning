// Date.now() only includes timestamp
// new Date() includes full time information

// throw new Error() can be catch as error and interrupt the runtime
// console.error() only output the error message, but return undefine

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
            throw new Error('stop already');

        endTime = Date.now();
        duration += (endTime - startTime) / 1000;
        running = false;
        // console.log('STOP!');
    };

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}