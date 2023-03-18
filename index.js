function saturdayFun(fun=`roller-skate`){
    return `this Saturday, i want to ${fun}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork(`work from home`);

function wrapAdjective(flair=`*`){
    return function (adjective = `a hard worker`){
        return `you are ${flair}${adjective}${flair}!`;
    };
}
wrapAdjective(`||`)(`a dedicated programmer`);