package dev.lucaslpsan.autoInfo.vehicles.repositories;

import com.google.cloud.spring.data.firestore.FirestoreReactiveRepository;

import dev.lucaslpsan.autoInfo.vehicles.Brand;

import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

/** Demonstrates Spring Data Repository support in Firestore. */
@Repository
public interface BrandRepository extends FirestoreReactiveRepository<Brand> {

    Flux<Brand> findByCountry(String country);
}
