package dev.lucaslpsan.autoInfo.vehicles.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Origin {
    NATIONAL("Nacional"),
    IMPORTED("Importado");

    private String descricao;
}