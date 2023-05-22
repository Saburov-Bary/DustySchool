const gameButtons = document.querySelectorAll('.button');


function onClick( {target} ) {
    if (target.classList.contains('game-button')) {
        location.assign('./start.html');
        return;
    }

    if (target.classList.contains('unwanted-button')) {
        location.assign('./nextstep.html');
        return;
    }

    if (target.classList.contains('boom-button')) {
        location.assign('./boom.html');
        return;
    }

    if (target.classList.contains('wall-button')) {
        location.assign('./wall.html');
        return;
    }

    if (target.classList.contains('bus-station-button')) {
        location.assign('./bus_station');
        return;
    }

    if (target.classList.contains('door-button')) {
        location.assign('./door');
        return;
    }

    if (target.classList.contains('road-button')) {
        location.assign('./road.html');
        return;
    }

    if (target.classList.contains('black-button')) {
        location.assign('./black.html');
        return;
    }

    if (target.classList.contains('shedule-button')) {
        location.assign('./shedule.html');
        return;
    }

    if (target.classList.contains('sit-button')) {
        location.assign('./sit.html');
        return;
    }

    if (target.classList.contains('stay-button')) {
        location.assign('./stay.html');
        return;
    }

    if (target.classList.contains('stay-again-button')) {
        location.assign('./stay_again.html');
        return;
    }

    if (target.classList.contains('lay-button')) {
        location.assign('./lay.html');
        return;
    }

    if (target.classList.contains('sub-wall-button')) {
        location.assign('./../wall.html');
        return;
    }

    if (target.classList.contains('sub-bus-station-button')) {
        location.assign('./../bus_station');
        return;
    }

    if (target.classList.contains('sub-road-button')) {
        location.assign('./../road.html');
        return;
    }

    if (target.classList.contains('sub-game-button')) {
        location.assign('./../start.html');
        return;
    }

}

gameButtons.forEach(element => element.addEventListener('click', onClick));