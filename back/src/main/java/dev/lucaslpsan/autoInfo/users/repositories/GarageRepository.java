package dev.lucaslpsan.autoInfo.users.repositories;

import org.springframework.stereotype.Repository;

import com.google.cloud.spring.data.firestore.FirestoreReactiveRepository;

import dev.lucaslpsan.autoInfo.users.Garage;

@Repository
public interface GarageRepository extends FirestoreReactiveRepository<Garage> {

}
