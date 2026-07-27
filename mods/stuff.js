elements.random_stuff = {
 color: "#2b1bba",
    behavior: [
        "CR:blue_stuff|M1%20|M1%20",
        "M1%20|XX|CR:blue_stuff",
        "M1%20|CR:blue_stuff|M1%20"
    ],category:"random",
    state: "solid"
}
elements.solid_stuff = {
    color: "#5c5d5e",
    behavior: [
    "CR:gas_stuff|CR:gas_stuff|CR:gas_stuff",
    "CR:gas_stuff|XX|XX",
    "XX|CR:gas_stuff|XX",
],
    category: "random",
    state: "solid"
}
elements.gas_stuff = {
    color: "#4c89b2",
    behavior: [
    "CR:basic_stuff|XX|CR:basic_stuff",
    "XX|XX|XX",
    "CR:basic_stuff|XX|CR:basic_stuff",
],
    category: "random",
    state: "gas"
}
elements.basic_stuff = {
    color: "#fcfdfa",
    behavior: [
    "CR:crazy_stuff|XX|CR:crazy_stuff",
    "XX|XX|XX",
    "CR:crazy_stuff|XX|CR:crazy_stuff",
],
    category: "random",
    state: "solid"
}
elements.crazy_stuff = {
    color: "#0394fc",
    behavior: [
    "M2%15|M1%15|CR:random_stuff",
    "CR:random_stuff|XX|CR:random_stuff",
    "M2%15|CR:random_stuff|M2%15",
],
    category: "random",
    state: "solid"
}
elements.blue_stuff = {
    color: "#0394fc",
    behavior: [
    "CR:solid_stuff%7|CR:solid_stuff%7|CR:solid_stuff%7",
    "CR:solid_stuff%7|XX|CR:solid_stuff%7",
    "CR:solid_stuff%7|CR:solid_stuff%7|CR:solid_stuff%7",
],
    category: "random",
    state: "solid"
}
