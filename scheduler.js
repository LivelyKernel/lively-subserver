Object.subclass('MyWorker', {
    initialize: function() {
        this.task = null;
    },
    assign: function(task) {
        this.task = task;
        this.progress = 0;
        this.work.bind(this).delay(1);
    },
    work: function() {
        if (++this.progress == 100) {
            this.task = null;
        } else {
            this.work.bind(this).delay(1);
        }
    },
    report: function() {
        return this.task ?
            this.task + ' (' + this.progress + '%)'
            : '<idle>';
    }
});

Object.subclass('MyScheduler', {
    initialize: function() {
        this.workers = Array.genN(3, function() { return new MyWorker(); });
    },
    addTask: function(task) {
        var freeWorker = this.workers.find(function(w) { return w.task === null; });
        if (freeWorker) {
            freeWorker.assign(task);
            return 'Scheduled ' + task + '.\n';
        } else {
            return 'Could not schedule task!\n';
        }
    },
    report: function() {
        return this.workers.invoke('report').join('\n');
    }
});
