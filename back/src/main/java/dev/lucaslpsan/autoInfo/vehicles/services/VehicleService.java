package dev.lucaslpsan.autoInfo.vehicles.services;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.FieldValue;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.Query.Direction;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;

import dev.lucaslpsan.autoInfo.vehicles.Vehicle;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class VehicleService {
    private final Firestore db;
    private final CollectionReference collection;

    VehicleService(Firestore db) {
        this.db = db;
        this.collection = db.collection("vehicles");
    }

    public void updateServerTimestamp(@NonNull String id) throws Exception {

        // [START firestore_data_set_server_timestamp]
        DocumentReference docRef = db.collection("vehicles").document(id);
        // Update the timestamp field with the value from the server
        ApiFuture<WriteResult> writeResult = docRef.update("timestamp", FieldValue.serverTimestamp());

        log.info(writeResult.get().toString());
    }

    public List<Vehicle> searchVehiclesByNameWithLimitQuery(@NonNull String text) throws Exception {
        // [START firestore_query_order_desc_limit]
        Query query = collection.whereGreaterThanOrEqualTo("name", text);

        ApiFuture<QuerySnapshot> future = query.get();
        // [END firestore_query_order_desc_limit]

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        return documents.stream().map(d -> d.toObject(Vehicle.class)).toList();
    }

    public List<Vehicle> searchVehiclesWithTimestapDescAndLimitQuery() throws Exception {
        // [START firestore_query_order_desc_limit]
        Query query = collection.orderBy("name", Direction.DESCENDING).limit(3);

        ApiFuture<QuerySnapshot> future = query.get();
        // [END firestore_query_order_desc_limit]

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        return documents.stream().map(d -> d.toObject(Vehicle.class)).toList();
    }
}
