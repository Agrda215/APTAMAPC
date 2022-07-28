addLayer("p", {
    name: "world", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: " ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
      linetemplate:'<input type="text" class="code">',
      lines:1
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "word", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    tabFormat: [
    "main-display",
    ["prestige-button"],
    "blank",
    ["display-text",
        function() { return 'Lines:' + player.p.lines },
        { "color": "yellow", "font-size": "32px", "font-family": "Consolas" }],
      ["display-text",
        function() { return player.p.linetemplate },
        { "color": "yellow", "font-size": "32px", "font-family": "Consolas" }],
    "blank",
    ["toggle", ["c", "beep"]],
    "clickables",
    "blank",
    "blank",
    "upgrades"
],
  clickables: {
    11: {
        display() {return "<h2>Add Line</h2>"},
        canClick(){return true},
        onClick() {
          player.p.lines += 1
          player.p.linetemplate += '<br><input type="text" class="code">'
        }
    }
}
})
