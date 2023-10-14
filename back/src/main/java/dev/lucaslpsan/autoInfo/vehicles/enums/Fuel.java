package dev.lucaslpsan.autoInfo.vehicles.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Fuel {
    GASOLINE("Gasolina"),
    DIESEL("Diesel"),
    FLEX("Flex (Álcool/Gasolina)"),
    ALCOHOL("Álcool"),
    BIODIESEL("Biodiesel"),
    HYDROGEN("Hidrogênio"),
    ELETRICITY("Eletricidade");

    private String descricao;
}