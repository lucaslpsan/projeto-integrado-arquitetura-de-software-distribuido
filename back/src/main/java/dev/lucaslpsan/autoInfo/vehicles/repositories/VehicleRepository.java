package dev.lucaslpsan.autoInfo.vehicles.repositories;

import org.springframework.stereotype.Repository;

import com.google.cloud.spring.data.firestore.FirestoreReactiveRepository;

import dev.lucaslpsan.autoInfo.vehicles.Vehicle;
import reactor.core.publisher.Flux;

@Repository
public interface VehicleRepository extends FirestoreReactiveRepository<Vehicle> {

    Flux<Vehicle> findByCountry(String country);

    Flux<Vehicle> findByName(String name);
}
