package dev.lucaslpsan.autoInfo.vehicles;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.cloud.spring.data.firestore.Document;

import dev.lucaslpsan.autoInfo.vehicles.enums.Engine;
import dev.lucaslpsan.autoInfo.vehicles.enums.Fuel;
import dev.lucaslpsan.autoInfo.vehicles.enums.Origin;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collectionName = "vehicles")
public class Vehicle {

    @DocumentId
    String id;

    String photoURL;
    Timestamp timestamp;

    /* Modelo */
    String brand;
    String name;
    int year;
    Origin origin;
    String country;

    /* Motor */
    Engine engine;
    Fuel fuel;
    String aspiration;
    int hp;
}
