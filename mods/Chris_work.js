elements.cool_laser_blue = {
    color: "#008bdc",
    behavior: [
        "M2 AND CR:new_laser_blue|M2 AND CR:new_laser_blue|M2 AND CR:new_laser_blue",
        "M1 AND CR:new_laser_blue|XX|M2 AND CR:new_laser_blue",
        "M2 AND CR:new_laser_blue|M2 AND CR:new_laser_blue|M2 AND CR:new_laser_blue",
    ],
    temp:9999999999999,
    tempHigh:9999999999999999,
    tempLow:9999999999,    
    category: "energy",
    state: "gas"
}
elements.new_laser_orange = {
    color: "#ff9100",
    behavior: [
        "XX|XX|XX",
        "XX|XX|M1 AND CH:plasma",
        "XX|XX|XX",
    ],
    temp:3000,
    tempHigh:3000,
    tempLow:3000,    
    category: "energy",
    state: "gas"
}