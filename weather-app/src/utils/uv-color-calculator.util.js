export const calculateUvColor = (val) => {
    if (val <= 2.4) {
        return popisky.NIZKY.color;
    } else if (val <= 5.4) {
        return popisky.STREDNI.color;
    } else if (val <= 7.4) {
        return popisky.VYSOKY.color;
    } else if (val <= 10.4) {
        return popisky.VELMI_VYSOKY.color;
    }

    return popisky.EXTREMNE_VYSOKY.color;
};

const popisky = [
    { text: "Nízký index",
      textDlouhy: "Při jasném počasí a na sněhové pokrývce používat sluneční brýle, jinak nevyžaduje opatření.",
      color: "#94bd00",
      hranice : 2.4
    },
    {
      text: "Střední index",
      textDlouhy: "V poledních hodinách se doporučuje omezit pohyb na přímém slunci, jinak používat sluneční brýle (zejména při sněhové pokrývce), oblečení chránící pokožku, na nechráněnou pokožku je vhodné použít prostředky s vyšším ochranným faktorem.",
      color: "#ffd600",
      hranice : 5.4
    },
    {
      text: "Vysoký index",
      textDlouhy: "Omezit pohyb na přímém slunci mezi 11. a 15. hodinou SELČ. Použít pokrývku hlavy a oblečení, chránící pokožku. Na nezakrytá místa je vhodné použít prostředky s vyšším ochranným faktorem.",
      color: "#ffc400",
      hranice : 7.4
    },
    {
      text: "Velmi vysoký index",
      textDlouhy: "Maximálně omezit pohyb na přímém slunci mezi 11. a 15. hodinou SELČ. Důsledně používat sluneční brýle, pokrývku hlavy, oblečení chránící pokožku, na nezakrytá místa použít prostředky s vysokým ochranným faktorem.",
      color: "#f86000",
      hranice : 10.4
    },
    {
      text: "Extrémně vysoký index",
      textDlouhy: "Vyhýbat se přímému slunci mezi 11. a 15. hodinou SELČ. Nutno používat sluneční brýle, pokrývku hlavy, oblečení maximálně chránící pokožku, na nezakrytá místa použít prostředky s velmi vysokým ochranným faktorem.",
      color: "#9565ea",
      hranice : 20
    }
];

export const getPopisek = (val) => {
    return popisky.filter((entry) => {
        return val <= entry.hranice;
    });
}