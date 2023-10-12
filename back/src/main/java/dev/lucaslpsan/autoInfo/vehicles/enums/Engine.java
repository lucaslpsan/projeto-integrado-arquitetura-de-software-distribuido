package dev.lucaslpsan.autoInfo.vehicles.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Engine {
    ELETRIC("Elétrico"),
    COMBUSTION("Combustão");

    private String descricao;
}
