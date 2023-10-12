/*
 * Copyright 2017-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package dev.lucaslpsan.autoInfo.users;

import com.google.cloud.spring.data.firestore.FirestoreReactiveOperations;
import com.google.cloud.spring.data.firestore.FirestoreTemplate;

import lombok.extern.slf4j.Slf4j;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Example controller demonstrating usage of Spring Data Repositories for
 * Firestore.
 */
@Slf4j
@RestController
@RequestMapping("api/users")
public class UserController {

  private final UserRepository userRepository;

  private final FirestoreTemplate firestoreTemplate;

  private final UserService userService;

  public UserController(UserService userService, UserRepository userRepository, FirestoreTemplate firestoreTemplate) {
    this.userService = userService;
    this.userRepository = userRepository;
    this.firestoreTemplate = firestoreTemplate;
  }

  @GetMapping
  private Flux<User> getAllUsers() {
    return userRepository.findAll();
  }

  @GetMapping("/age")
  private Flux<User> getUsersByAge(@RequestParam int age) {
    return userRepository.findByAge(age);
  }

  @GetMapping("/phones")
  private Flux<PhoneNumber> getPhonesByName(@RequestParam String name) {
    return this.firestoreTemplate.withParent(new User(name, 0)).findAll(PhoneNumber.class);
  }

  @GetMapping("/removeUser")
  private Mono<String> removeUserByName(@RequestParam String name) {
    return this.userService.removeUserByName(name);
  }

  @GetMapping("/removePhonesForUser")
  private Mono<String> removePhonesByName(@RequestParam String name) {
    return this.firestoreTemplate
        .withParent(new User(name, 0))
        .deleteAll(PhoneNumber.class)
        .map(numRemoved -> "successfully removed " + numRemoved + " phone numbers");
  }

  // @PostMapping("/saveUser")
  // private Mono<User> saveUser(ServerWebExchange serverWebExchange) {
  // return serverWebExchange
  // .getFormData()
  // .flatMap(
  // formData -> {
  // User user = new User(
  // formData.getFirst("name"),
  // Integer.parseInt(formData.getFirst("age")));
  // List<PhoneNumber> phones = getPhones(formData.getFirst("phones"));

  // return userRepository.save(user)
  // .flatMap(savedUser -> {
  // FirestoreReactiveOperations userTemplate = this.firestoreTemplate.withParent(
  // savedUser);
  // return userTemplate.saveAll(Flux.fromIterable(phones))
  // .then(Mono.just(savedUser));
  // });
  // });
  // }

  @PostMapping(value = "/saveUser")
  private Mono<User> saveUser(@RequestBody User user) {
    log.debug("->saveNewUser {}", user);
    return userRepository.save(user);
  }

  // private List<PhoneNumber> getPhones(String phones) {
  // return phones == null || phones.isEmpty()
  // ? Collections.emptyList()
  // :
  // Arrays.stream(phones.split(",")).map(PhoneNumber::new).collect(Collectors.toList());
  // }
}
