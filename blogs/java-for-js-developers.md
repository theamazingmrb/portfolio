---
title: "Java for JavaScript Developers: Fundamentals and Spring Boot"
date: "2026-09-12"
excerpt: "A 2026 guide for JavaScript developers learning Java and Spring Boot. Covers modern Java language features, static typing, the Stream API, object-oriented patterns, and building production-ready REST APIs with Spring Boot 3.x."
tags: ["Java", "JavaScript", "Spring Boot", "Backend", "Full Stack", "Type Safety", "JVM"]
category: "Backend Development"
featured: false
author: "Billie Heidelberg Jr."
---

# Java for JavaScript Developers: Fundamentals and Spring Boot

Java and JavaScript share a name, but they were built for different kinds of software. JavaScript started as a way to make web pages interactive and has become a full-stack ecosystem powered by Node.js, browsers, and frontend frameworks. Java was designed from the beginning for large, long-lived, strongly typed systems that run on the Java Virtual Machine.

If you are a JavaScript developer learning Java and Spring Boot, the shift can feel like trading a dynamically typed, event-loop runtime for a compiled, object-oriented platform with strict conventions. The good news is that modern Java has absorbed many functional programming ideas, and Spring Boot removes much of the historical ceremony that once made Java feel heavy. This guide maps what you already know from JavaScript to Java, then walks through building a real backend with Spring Boot.

Version and scope: the examples use Java 21 LTS and Spring Boot 3.3.x. Java 21 is the current long-term support release and includes records, pattern matching for switch, and virtual threads. Spring Boot 3.x builds on Spring Framework 6 and the Jakarta EE namespace, and it supports native image compilation with GraalVM.

---

## Who This Guide Is For

- JavaScript or TypeScript developers who want to learn backend development with Java.
- Frontend engineers moving into full-stack or platform engineering.
- Teams evaluating or adopting Java and Spring Boot.
- Anyone who learns best by comparing a new language to one they already know.

---

## Core Philosophy Differences

The following table highlights the differences you will feel every day.

| Aspect | JavaScript | Java |
|---|---|---|
| Type system | Dynamic (optional TypeScript) | Static and strong |
| Compilation | Interpreted or JIT in the runtime | Compiled to JVM bytecode |
| Runtime | Browser, Node.js, Deno, Bun | Java Virtual Machine |
| Concurrency | Event loop, async/await, single-threaded | Threads, virtual threads, thread pools |
| Package manager | npm, yarn, pnpm | Maven, Gradle |
| Module system | ES modules, CommonJS | Java Platform Module System, packages |
| Memory | Garbage collected | Garbage collected, with more tuning options |

JavaScript optimizes for flexibility and fast iteration. Java optimizes for correctness, observability, and maintainability at scale. In Java, many problems that would become runtime errors in JavaScript become compile-time errors, which can feel restrictive until you are working in a large codebase.

---

## From JavaScript to Java: The Environment

Before writing code, install a Java Development Kit. JDK 21 LTS is the safest choice for new Spring Boot work. You will also want an IDE. IntelliJ IDEA Community Edition is the standard, though Visual Studio Code with the Extension Pack for Java works well.

A Java project is usually built with Maven or Gradle. The build file lists dependencies and plugins, and the build tool downloads them from Maven Central. This is similar to `package.json`, except the ecosystem is more conservative and the versions are often pinned by Spring Boot's dependency management.

### A minimal Maven project

```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>hello-java</artifactId>
  <version>1.0.0</version>

  <properties>
    <maven.compiler.source>21</maven.compiler.source>
    <maven.compiler.target>21</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>
</project>
```

Run the build with:

```bash
mvn clean compile
```

If you prefer Gradle, the equivalent is:

```groovy
plugins {
  id 'java'
}

group = 'com.example'
version = '1.0.0'

java {
  sourceCompatibility = JavaVersion.VERSION_21
}

repositories {
  mavenCentral()
}
```

Then run `gradle build`.

---

## Types and Variables

### Dynamic vs static typing

In JavaScript, a variable can hold any value and change its type at runtime.

```javascript
let value = "hello";
value = 42;
value = { name: "Alice" };
```

In Java, every variable has a type that is checked at compile time.

```java
String value = "hello";
// value = 42; // compile error
```

Java has primitive types for numbers and booleans, and reference types for everything else.

```java
int count = 42;
double price = 19.99;
boolean active = true;
char grade = 'A';
String name = "Alice";
```

### Strings and text blocks

Java strings are immutable like in JavaScript. Text blocks, introduced in Java 15, make multiline strings readable.

```java
String json = """
  {
    "name": "Alice",
    "active": true
  }
  """;
```

### Type inference with var

Java 10 added `var` for local variables. The type is still static; it is just inferred by the compiler.

```java
var name = "Alice"; // String
var count = 42;     // int
```

You can use `var` for local variables, but not for fields or method parameters.

### Records

Records are a compact way to declare immutable data classes. They are similar to TypeScript interfaces or object literals, but they are classes with generated constructors, getters, `equals`, `hashCode`, and `toString`.

```java
public record User(String name, String email) {}
```

Use records for DTOs and value objects.

```java
User user = new User("Alice", "alice@example.com");
System.out.println(user.name()); // "Alice"
```

### Pattern matching for switch

Java 21 adds pattern matching for switch, which is similar to TypeScript discriminated unions and switch exhaustiveness.

```java
String describe(Object value) {
  return switch (value) {
    case Integer i -> "integer: " + i;
    case String s -> "string: " + s;
    case null -> "null";
    default -> "unknown";
  };
}
```

---

## Object-Oriented Java

Java is class-based and object-oriented. Every piece of code lives inside a class.

### Classes and fields

```java
public class User {
  private String name;
  private String email;

  public User(String name, String email) {
    this.name = name;
    this.email = email;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}
```

Fields are usually `private` and accessed through getters and setters. The JavaBeans convention is common in Spring applications, though records are increasingly used for data transfer.

### Inheritance and overriding

```java
public class Animal {
  private String name;

  public Animal(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public String speak() {
    return getName() + " makes a sound";
  }
}

public class Dog extends Animal {
  public Dog(String name) {
    super(name);
  }

  @Override
  public String speak() {
    return getName() + " barks";
  }
}
```

The `@Override` annotation is not required, but it catches mistakes at compile time.

### Interfaces

Java interfaces are contracts that a class can implement. Unlike JavaScript's duck typing, Java requires an explicit `implements` declaration.

```java
public interface PaymentService {
  Payment process(Order order);
}

public class StripePaymentService implements PaymentService {
  public Payment process(Order order) {
    // implementation
  }
}
```

### Abstract classes

An abstract class can declare methods without implementations. It sits between a concrete class and an interface.

```java
public abstract class Shape {
  public abstract double area();

  public void printArea() {
    System.out.println("Area: " + area());
  }
}
```

### Access modifiers

| Modifier | Same class | Same package | Subclass | Anywhere |
|---|---|---|---|---|
| public | yes | yes | yes | yes |
| protected | yes | yes | yes | no |
| package-private | yes | yes | no | no |
| private | yes | no | no | no |

If you omit a modifier, the member is package-private. This is a common source of confusion for JavaScript developers.

---

## Functional Java: Lambdas and Streams

Java 8 added lambdas and the Stream API. If you are used to `map`, `filter`, and `reduce` in JavaScript, the Stream API will feel familiar.

### Lambdas

```java
List<String> names = List.of("Alice", "Bob", "Charlie");

List<String> upper = names.stream()
  .map(String::toUpperCase)
  .toList();
```

The `String::toUpperCase` syntax is a method reference, a shorthand for the lambda `s -> s.toUpperCase()`.

### Common stream operations

```java
List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);

List<Integer> evens = numbers.stream()
  .filter(n -> n % 2 == 0)
  .toList();

int sum = numbers.stream()
  .reduce(0, Integer::sum);

double average = numbers.stream()
  .mapToInt(Integer::intValue)
  .average()
  .orElse(0.0);
```

### Collecting

```java
Set<String> unique = names.stream().collect(Collectors.toSet());

Map<String, Integer> nameLengths = names.stream()
  .collect(Collectors.toMap(Function.identity(), String::length));
```

### Optional

`Optional` is Java's answer to null safety. It is a container that may or may not hold a value.

```java
public Optional<User> findById(Long id) {
  // return Optional.of(user) or Optional.empty()
}
```

Use `Optional` to avoid `null` checks everywhere.

```java
userService.findById(id)
  .map(User::name)
  .orElse("Unknown");
```

---

## Handling Nulls and Exceptions

### Null in Java

Java does not have a `?.` optional chaining operator. Calling a method on `null` throws a `NullPointerException`. Modern Java reduces null pain with `Optional`, records, and pattern matching.

```java
String city = user.getAddress().getCity(); // can throw NPE
```

Using `Optional`:

```java
String city = Optional.ofNullable(user.getAddress())
  .map(Address::getCity)
  .orElse("Unknown");
```

### Exception handling

Java has two families of exceptions: checked and unchecked. Checked exceptions are declared in method signatures and must be caught or propagated. Unchecked exceptions extend `RuntimeException`.

```java
try {
  Files.readString(Path.of("data.json"));
} catch (IOException e) {
  logger.error("Could not read file", e);
  throw new RuntimeException("Failed to load data", e);
} finally {
  // cleanup
}
```

The `try-with-resources` statement automatically closes resources.

```java
try (var reader = Files.newBufferedReader(Path.of("data.json"))) {
  return reader.readLine();
} catch (IOException e) {
  throw new RuntimeException(e);
}
```

### Custom exceptions

```java
public class UserNotFoundException extends RuntimeException {
  public UserNotFoundException(Long id) {
    super("User not found: " + id);
  }
}
```

---

## Concurrency: From Promises to Threads and Virtual Threads

JavaScript concurrency is single-threaded with an event loop. Java concurrency is multi-threaded.

### Classic threads

```java
var thread = new Thread(() -> {
  System.out.println("Running in a thread");
});
thread.start();
```

### Virtual threads

Java 21 introduced virtual threads, which are lightweight threads managed by the JVM. They are similar to green threads or goroutines.

```java
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
  executor.submit(() -> fetchUser(1L));
  executor.submit(() -> fetchUser(2L));
}
```

Virtual threads make it easier to write straightforward, blocking code that scales like async code.

### CompletableFuture

For functional composition, `CompletableFuture` is the closest Java equivalent to JavaScript promises.

```java
CompletableFuture.supplyAsync(() -> fetchUser(1L))
  .thenApply(User::name)
  .thenAccept(System.out::println);
```

---

## Spring Boot at a Glance

Spring Boot is an opinionated layer on top of the Spring Framework. It provides auto-configuration, embedded servers, and starter dependencies that group common libraries together.

A Spring Boot application begins with a single main class.

```java
@SpringBootApplication
public class BlogApplication {
  public static void main(String[] args) {
    SpringApplication.run(BlogApplication.class, args);
  }
}
```

Add a dependency with a starter:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

Run the application:

```bash
./mvnw spring-boot:run
```

The embedded Tomcat server starts on port 8080 by default.

---

## A Spring Boot Project from Scratch

Use the Spring Initializr at https://start.spring.io/ to generate a project. Select Java 21, Spring Boot 3.3 or later, and the following dependencies:

- Spring Web
- Spring Data JPA
- H2 Database (for development)
- Validation
- Spring Boot DevTools

A typical project layout:

```
src/
  main/
    java/
      com/example/blog/
        BlogApplication.java
        controller/
        service/
        repository/
        model/
        config/
    resources/
      application.properties
      application-dev.properties
  test/
    java/
      com/example/blog/
```

This layout enforces separation of concerns. The package structure is important because Spring scans for components from the main class downward.

---

## Building a REST API

A REST controller in Spring Boot combines the route and handler annotations that Express developers split between `app.get` and a callback.

```java
@RestController
@RequestMapping("/api/posts")
public class PostController {

  private final PostService postService;

  public PostController(PostService postService) {
    this.postService = postService;
  }

  @GetMapping
  public List<Post> getAllPosts() {
    return postService.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Post> getPostById(@PathVariable Long id) {
    return postService.findById(id)
      .map(ResponseEntity::ok)
      .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<Post> createPost(@RequestBody @Valid Post post) {
    Post saved = postService.save(post);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deletePost(@PathVariable Long id) {
    postService.deleteById(id);
    return ResponseEntity.noContent().build();
  }
}
```

Key annotations:

- `@RestController` marks the class as a web controller.
- `@RequestMapping` sets a base path.
- `@GetMapping`, `@PostMapping`, `@DeleteMapping` map HTTP methods.
- `@PathVariable` binds URL variables.
- `@RequestBody` deserializes JSON to a Java object.
- `@Valid` triggers Bean Validation.

The `ResponseEntity` type lets you control the response status and headers explicitly.

---

## Data Access with Spring Data JPA

Spring Data JPA removes boilerplate. You define an entity and a repository interface; Spring generates the implementation.

### Entity

```java
@Entity
@Table(name = "posts")
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String title;

  private String content;

  @Column(nullable = false)
  private String author;

  @CreationTimestamp
  private LocalDateTime createdAt;

  // getters, setters, equals, hashCode, toString
}
```

Records cannot be JPA entities in the current specification, so use a class for entities.

### Repository

```java
public interface PostRepository extends JpaRepository<Post, Long> {
  List<Post> findAllByOrderByCreatedAtDesc();
  List<Post> findByAuthorIgnoreCase(String author);
}
```

### Service

```java
@Service
public class PostService {

  private final PostRepository postRepository;

  public PostService(PostRepository postRepository) {
    this.postRepository = postRepository;
  }

  public List<Post> findAll() {
    return postRepository.findAllByOrderByCreatedAtDesc();
  }

  public Optional<Post> findById(Long id) {
    return postRepository.findById(id);
  }

  public Post save(Post post) {
    return postRepository.save(post);
  }

  public void deleteById(Long id) {
    postRepository.deleteById(id);
  }
}
```

Spring creates the `PostRepository` implementation automatically and injects it through the constructor. This is dependency injection in action.

---

## Configuration and Profiles

Configuration lives in `application.properties` or `application.yml`. Profiles let you vary configuration by environment.

```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/blog
    username: blog
    password: blog

  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false

  profiles:
    active: dev
```

Profile-specific files like `application-dev.yml` override the base file when the `dev` profile is active.

```yaml
spring:
  datasource:
    url: jdbc:h2:mem:blogdb
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
```

Use `@Value` to inject a property into a bean.

```java
@Service
public class FeatureService {
  @Value("${feature.new-dashboard:false}")
  private boolean newDashboard;
}
```

Or use `@ConfigurationProperties` for type-safe configuration.

---

## Security with Spring Security

Spring Security configures a filter chain that runs before your controllers.

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .csrf(csrf -> csrf.disable())
      .authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/public/**").permitAll()
        .requestMatchers("/api/admin/**").hasRole("ADMIN")
        .anyRequest().authenticated()
      )
      .httpBasic(Customizer.withDefaults());

    return http.build();
  }
}
```

For a stateless, token-based API, you would replace `httpBasic` with a JWT filter. Spring Security 6 and later use `Customizer.withDefaults()` and lambda-style configuration for all security settings.

---

## Testing

Spring Boot includes JUnit 5, Mockito, and AssertJ. The `@SpringBootTest` annotation loads the application context for integration tests.

```java
@SpringBootTest
@AutoConfigureMockMvc
class PostControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Test
  void shouldReturnAllPosts() throws Exception {
    mockMvc.perform(get("/api/posts"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$", hasSize(2)));
  }

  @Test
  void shouldCreatePost() throws Exception {
    String json = """
      {
        "title": "Hello Java",
        "content": "Spring Boot is great",
        "author": "Alice"
      }
      """;

    mockMvc.perform(post("/api/posts")
        .contentType(MediaType.APPLICATION_JSON)
        .content(json))
      .andExpect(status().isCreated())
      .andExpect(jsonPath("$.title").value("Hello Java"));
  }
}
```

Unit tests in Java use the Mockito extension.

```java
@ExtendWith(MockitoExtension.class)
class PostServiceTest {

  @Mock
  private PostRepository postRepository;

  @InjectMocks
  private PostService postService;

  @Test
  void shouldFindAllPosts() {
    when(postRepository.findAllByOrderByCreatedAtDesc())
      .thenReturn(List.of(new Post()));

    List<Post> result = postService.findAll();

    assertThat(result).hasSize(1);
  }
}
```

---

## Build Tools and Packaging

A Spring Boot application is packaged as an executable JAR with an embedded Tomcat. You can run it anywhere a JVM is installed.

```bash
./mvnw clean package
java -jar target/blog-1.0.0.jar
```

For Gradle:

```bash
./gradlew bootJar
java -jar build/libs/blog-1.0.0.jar
```

The build tool also generates a dependency lock. Spring Boot's `spring-boot-starter-parent` or `spring-boot-dependencies` BOM pins versions, which is similar to a lock file.

---

## Deployment and Native Images

Spring Boot 3.x supports native images through GraalVM. A native image starts faster and uses less memory, which is ideal for containers and serverless functions.

You can build a Docker image with the Spring Boot Maven plugin:

```bash
./mvnw spring-boot:build-image
```

Or write a small Dockerfile:

```dockerfile
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY target/blog-1.0.0.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

For GraalVM native images, add the `spring-boot-starter-aot` and use the `native` Maven profile.

---

## Complete Example: URL Shortener

The following is a small but realistic URL shortener service. It shows custom short-code generation, unique constraints, HTTP 302 redirects, and basic click analytics.

### Entity

```java
@Entity
@Table(name = "short_links", indexes = @Index(columnList = "shortCode", unique = true))
public class ShortLink {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true, length = 7)
  private String shortCode;

  @Column(nullable = false, length = 2048)
  private String targetUrl;

  private long clickCount = 0;

  @CreationTimestamp
  private LocalDateTime createdAt;

  // constructors, getters, setters
}
```

### Repository

```java
public interface ShortLinkRepository extends JpaRepository<ShortLink, Long> {
  Optional<ShortLink> findByShortCode(String shortCode);
  boolean existsByShortCode(String shortCode);
}
```

### Request DTO

```java
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ShortenRequest {
  @NotBlank
  @Size(max = 2048)
  private String targetUrl;

  public String getTargetUrl() {
    return targetUrl;
  }

  public void setTargetUrl(String targetUrl) {
    this.targetUrl = targetUrl;
  }
}
```

### Service

```java
import java.security.SecureRandom;

@Service
public class ShortLinkService {

  private static final String ALPHANUM =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  private static final int CODE_LENGTH = 7;

  private final ShortLinkRepository shortLinkRepository;
  private final SecureRandom random = new SecureRandom();

  public ShortLinkService(ShortLinkRepository shortLinkRepository) {
    this.shortLinkRepository = shortLinkRepository;
  }

  public ShortLink shortenUrl(String targetUrl) {
    ShortLink link = new ShortLink();
    link.setShortCode(generateUniqueShortCode());
    link.setTargetUrl(targetUrl);
    return shortLinkRepository.save(link);
  }

  public Optional<ShortLink> findByShortCode(String shortCode) {
    return shortLinkRepository.findByShortCode(shortCode);
  }

  public Optional<ShortLink> recordClickAndReturn(String shortCode) {
    return shortLinkRepository.findByShortCode(shortCode)
      .map(link -> {
        link.setClickCount(link.getClickCount() + 1);
        return shortLinkRepository.save(link);
      });
  }

  private String generateUniqueShortCode() {
    StringBuilder code = new StringBuilder(CODE_LENGTH);
    for (int i = 0; i < CODE_LENGTH; i++) {
      int index = random.nextInt(ALPHANUM.length());
      code.append(ALPHANUM.charAt(index));
    }
    String candidate = code.toString();
    if (shortLinkRepository.existsByShortCode(candidate)) {
      return generateUniqueShortCode();
    }
    return candidate;
  }
}
```

### Controller

```java
import java.net.URI;

@RestController
public class ShortLinkController {

  private final ShortLinkService shortLinkService;

  public ShortLinkController(ShortLinkService shortLinkService) {
    this.shortLinkService = shortLinkService;
  }

  @PostMapping("/api/links")
  public ResponseEntity<ShortLink> createShortLink(
    @RequestBody @Valid ShortenRequest request
  ) {
    ShortLink saved = shortLinkService.shortenUrl(request.getTargetUrl());
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
  }

  @GetMapping("/{shortCode}")
  public ResponseEntity<Void> redirect(@PathVariable String shortCode) {
    return shortLinkService.recordClickAndReturn(shortCode)
      .map(link -> ResponseEntity.status(HttpStatus.FOUND)
        .location(URI.create(link.getTargetUrl()))
        .build())
      .orElse(ResponseEntity.notFound().build());
  }

  @GetMapping("/api/links/{shortCode}/stats")
  public ResponseEntity<ShortLink> stats(@PathVariable String shortCode) {
    return shortLinkService.findByShortCode(shortCode)
      .map(ResponseEntity::ok)
      .orElse(ResponseEntity.notFound().build());
  }
}
```

This example is more realistic than a task list because it covers custom short-code generation, unique constraints, HTTP redirects, and analytics while keeping the same controller, service, and repository flow.

---

## When to Choose Which

Choose JavaScript when:

- You need rapid prototyping or a small team.
- The workload is I/O-bound and event-driven.
- You are building a frontend, a serverless function, or a full-stack Next.js app.

Choose Java when:

- You need strong typing and compile-time correctness.
- The application is expected to live for years and grow in size.
- You want mature libraries for security, data access, and messaging.
- You are building enterprise backends, batch processing, or high-throughput services.

---

## Resources

- [Official Java documentation](https://docs.oracle.com/en/java/)
- [OpenJDK 21 features](https://openjdk.org/projects/jdk/21/)
- [Spring Boot documentation](https://spring.io/projects/spring-boot)
- [Spring Initializr](https://start.spring.io/)
- [Baeldung Java and Spring tutorials](https://www.baeldung.com/)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) and the [Extension Pack for Java for VS Code](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)

---

## Conclusion

Moving from JavaScript to Java means trading some flexibility for predictability and scale. Java's type system, the JVM, and the Spring ecosystem give you powerful tools for building long-lived, maintainable backends. Modern Java features like records, pattern matching, and virtual threads, combined with Spring Boot's auto-configuration, make the transition less intimidating than it once was.

Start with the fundamentals, build a small Spring Boot project, and compare each Java concept to its JavaScript equivalent. The mental model takes time to shift, but the patterns are closer than the syntax suggests.
