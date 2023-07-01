function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`
}

const mondayWork = function (toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`
}

function wrapAdjective(visualFlare = "*") {
    return function (adjective = "special") {
        return `You are ${visualFlare}${adjective}${visualFlare}!`
    }
}