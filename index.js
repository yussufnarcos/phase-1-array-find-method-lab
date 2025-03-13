function superbowlWin(record) {
    let win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

console.log(superbowlWin(broncosRecord)); 
