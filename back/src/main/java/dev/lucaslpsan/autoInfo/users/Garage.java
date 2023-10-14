package dev.lucaslpsan.autoInfo.users;

import java.util.Map;

import com.google.cloud.firestore.annotation.DocumentId;
import com.google.cloud.spring.data.firestore.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collectionName = "garage")
public class Garage {

    @DocumentId
    String id;

    String owner;
    String vehicle;
    Map<String, Object> km;
    Map<String, Object> oil;
    Map<String, Object> expenses;

    public Garage(String id) {
        this.id = id;
    }

}
