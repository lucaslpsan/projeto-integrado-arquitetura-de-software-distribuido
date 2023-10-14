package dev.lucaslpsan.autoInfo.users.controllers;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.lucaslpsan.autoInfo.users.Garage;
import dev.lucaslpsan.autoInfo.users.repositories.GarageRepository;
import dev.lucaslpsan.autoInfo.users.services.GarageService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("api/garage")
@SecurityRequirement(name = "FirebaseAuth")
public class GarageController {
    private final GarageService service;
    private final GarageRepository repository;

    public GarageController(GarageService service, GarageRepository repository) {
        this.service = service;
        this.repository = repository;
    }

    @GetMapping
    private List<Garage> getGarages(
            @CurrentSecurityContext(expression = "authentication") Authentication authentication)
            throws Exception {

        log.info(authentication.toString());

        List<Garage> list = service.getGarageByUser(authentication.getName());

        return list;
        // return repository.f
    }
}
