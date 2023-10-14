package dev.lucaslpsan.autoInfo.vehicles.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.lucaslpsan.autoInfo.vehicles.Brand;
import dev.lucaslpsan.autoInfo.vehicles.repositories.BrandRepository;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;

@Slf4j
@RestController
@RequestMapping("api/brand")
public class BrandController {

    private final BrandRepository brandRepository;

    public BrandController(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    @GetMapping
    private Flux<Brand> getAllBrands() {
        return brandRepository.findAll();
    }
}
