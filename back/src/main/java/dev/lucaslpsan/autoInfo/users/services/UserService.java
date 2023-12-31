/*
 * Copyright 2022-2022 the original author or authors.
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

package dev.lucaslpsan.autoInfo.users.services;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dev.lucaslpsan.autoInfo.users.User;
import dev.lucaslpsan.autoInfo.users.repositories.UserRepository;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Service
@Slf4j
public class UserService {

  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  // Testing that Transactional works;
  // see https://github.com/GoogleCloudPlatform/spring-cloud-gcp/issues/1297
  @Transactional
  public Mono<String> removeUserByName(String name) {
    return userRepository
        .delete(new User(name))
        .map(unusedVoid -> name + "was successfully removed");
  }

  public User getUser(@NonNull String userId) {
    User user = null;
    try {
      user = this.userRepository.findById(userId).toFuture().get();
    } catch (InterruptedException | ExecutionException e) {
      log.error("->getUser {}", userId, e.getStackTrace());
    }

    return user;
  }
}
