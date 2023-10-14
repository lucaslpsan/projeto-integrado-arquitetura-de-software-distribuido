package dev.lucaslpsan.autoInfo.vehicles.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dev.lucaslpsan.autoInfo.models.EnumTypes;
import dev.lucaslpsan.autoInfo.vehicles.Vehicle;
import dev.lucaslpsan.autoInfo.vehicles.enums.Fuel;
import dev.lucaslpsan.autoInfo.vehicles.repositories.VehicleRepository;
import dev.lucaslpsan.autoInfo.vehicles.services.VehicleService;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@RestController
@RequestMapping("api/vehicle")
public class VehiclesController {

    private final VehicleRepository repository;
    private final VehicleService service;

    public VehiclesController(VehicleRepository vehicleRepository, VehicleService vehicleService) {
        this.repository = vehicleRepository;
        this.service = vehicleService;
    }

    @GetMapping
    private List<Vehicle> getVehicles(@RequestParam("nome") String name) throws Exception {
        return service.searchVehiclesByNameWithLimitQuery(name);
    }

    @GetMapping("/fuel")
    private List<EnumTypes> getAllEngines() {
        List<EnumTypes> enumTypes = new ArrayList<>();

        for (Fuel f : Fuel.values()) {
            enumTypes.add(new EnumTypes(f.name(), f.getDescricao()));
        }
        return enumTypes;
    }

    @PostMapping()
    private Mono<Vehicle> saveNewVehicle(@RequestBody Vehicle vehicle) {
        log.debug("->saveNewVehicle {}", vehicle);
        Mono<Vehicle> newVehicle = repository.save(vehicle);

        newVehicle.subscribe(v -> {
            try {
                service.updateServerTimestamp(v.getId());
            } catch (Exception e) {
                log.error("Error updateServerTimestamp", e);
            }

        });

        return newVehicle;

    }

    @GetMapping("/lasts")
    private List<Vehicle> lastsVehicles() throws Exception {
        return service.searchVehiclesWithTimestapDescAndLimitQuery();
    }

    // @ExceptionHandler
    // @ResponseStatus(HttpStatus.BAD_REQUEST)
    // public void handle(HttpMessageNotReadableException e) {
    // log.warn("Returning HTTP 400 Bad Request", e);
    // }
}
