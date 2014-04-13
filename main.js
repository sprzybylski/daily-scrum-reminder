var gui = require('nw.gui');
var CronJob = require('cron').CronJob;
var win = gui.Window.get();
var config = {
    "title": "Daily reminders",
    "cronTime": "0 30 8 * * *",
    "duration": 15, // in minutes
    "reminders": [
        "Insert your reminders here"
    ]
};

function getEndPattern() {
    var cronPattern = config.cronTime.split(' ');
    cronPattern[1] = parseInt(cronPattern[1], 10) + config.duration;
    return cronPattern.join(' ');
}

function setTitle() {
    document.querySelector('.page-header h1').innerHTML = config.title;
}

function setReminders() {
    var out = '';

    for (var i = 0; i < config.reminders.length; i++) {
        out += '<li><h2>' + config.reminders[i] + '<img src="images/new.gif"></h2></li>'
    }

    document.querySelector('.well ul').innerHTML = out;
}

setTitle();
setReminders();

try {
    new CronJob(config.cronTime, function () {
        win.show();
    }, null, true);

    new CronJob(getEndPattern(), function () {
        win.hide();
    }, null, true);
} catch (e) {
    console.log(e);
}
