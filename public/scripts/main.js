var gui = require('nw.gui');
var CronJob = require('cron').CronJob;
var win = gui.Window.get();
var settings = {
    title: 'Daily reminders',
    cronTime: '0 30 8 * * *',
    duration: 15, // in minutes
    reminders: [
        'this is daily'
    ]
};

setTitle(settings.title);
setReminders(settings.reminders);

try {
    new CronJob(settings.cronTime, function () {
        win.show();

        window.setTimeout(function () {
            win.hide()
        }, settings.duration * 60 * 1000);
    }, null, true);
} catch (e) {
    console.log(e);
}

function setTitle(title) {
    document.querySelector('.page-header h1').innerHTML = title;
}

function setReminders(reminders) {
    var out = '';

    for (var i = 0; i < reminders.length; i++) {
        out += '<li><h2>' + settings.reminders[i] + '<img src="images/new.gif"></h2></li>'
    }

    document.querySelector('.well ul').innerHTML = out;
}
