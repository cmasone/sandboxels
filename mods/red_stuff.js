elements.red_stuff = {
    color: "#ff0000",
    behavior: behaviors.POWDER,
    category: "Modded_Elements",
    state: "solid"
}

elements.THE_MAKER_up = {
    color: "#0a3d0c",
    behavior: [
        "M2|M1|M2",
        "CR:red_stuff|XX|CR:red_stuff",
        "XX|XX|XX",
    ],
    category: "Modded_Elements",
    state: "solid"
}

elements.THE_MAKER_right = {
    color: "#0a3d0c",
    behavior: [
        "CR:red_stuff|XX|M2",
        "XX|XX|M1",
        "CR:red_stuff|XX|M2",
    ],
    category: "Modded_Elements",
    state: "solid"
}

elements.THE_MAKER_down = {
    color: "#0a3d0c",
    behavior: [
        "CR:red_stuff|XX|CR:red_stuff",
        "XX|XX|XX",
        "M2|M1|M2",
    ],
    category: "Modded_Elements",
    state: "solid"
}

elements.THE_MAKER_left = {
    color: "#0a3d0c",
    behavior: [
        "M2|XX|CR:red_stuff",
        "M1|XX|XX",
        "M2|XX|CR:red_stuff",
    ],
    category: "Modded_Elements",
    state: "solid"
}

elements.THE_STATIONARY_MAKER = {
    color: "#4143b7",
    behavior: [
        "CR:red_stuff|CR red_stuff|CR:red_stuff",
        "CR:red_stuff|M1|CR:red_stuff",
        "CR:red_stuff|CR:red_stuff|CR:red_stuff",
    ],
    category: "Modded_Elements",
    state: "solid"
}