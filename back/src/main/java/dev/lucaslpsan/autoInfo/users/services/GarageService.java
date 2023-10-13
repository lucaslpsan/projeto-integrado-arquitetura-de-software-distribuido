package dev.lucaslpsan.autoInfo.users.services;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;

import dev.lucaslpsan.autoInfo.users.Garage;
import dev.lucaslpsan.autoInfo.users.User;
import dev.lucaslpsan.autoInfo.users.repositories.GarageRepository;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Service
@Slf4j
public class GarageService {
    private final GarageRepository repository;
    private final CollectionReference collection;
    private final Firestore db;
    private final UserService userService;

    public GarageService(GarageRepository repository, Firestore db, UserService userService) {
        this.repository = repository;
        this.db = db;
        this.collection = db.collection("garage");
        this.userService = userService;
    }

    @Transactional
    public Mono<String> removeUserByName(String id) {
        return repository
                .delete(new Garage(id))
                .map(unusedVoid -> id + "was successfully removed");
    }

    public List<Garage> getGarageByUser(@NonNull String userId) throws Exception {
        User user = userService.getUser(userId);
        List<Garage> garegeList = new ArrayList<>();

        for (String docRef : user.getGarage()) {
            try {
                garegeList.add(this.repository.findById(docRef).toFuture().get());
            } catch (InterruptedException | ExecutionException e) {
                log.error("->getGarageByUser {}", docRef, e.getStackTrace());
            }
        }

        return garegeList;
    }
}
