---
title: "Angular for React Developers: Signals, RxJS, and Best Practices (2025 Guide)"
date: "2025-10-14"
excerpt: "A comprehensive guide bridging React and Angular. Learn how to map React concepts to Angular 18+ with Signals, understand the philosophical differences, and master enterprise-scale development patterns."
tags: ["Angular", "React", "TypeScript", "Web Development", "Frontend", "Signals", "RxJS"]
category: "Web Development"
coverImage: "/articleCovers/angular-for-react-devs.png"
featured: true
author: "Billie Heidelberg Jr."
---

# Angular for React Developers: Signals, RxJS, and Best Practices (2025 Guide)

React and Angular are two of the most popular frontend frameworks, but they come with fundamentally different philosophies. If you're already a confident React developer, learning Angular may feel like switching from jazz improvisation to classical composition. React gives you freedom and flexibility; Angular provides structure and convention.

This comprehensive guide bridges the gap, mapping React concepts directly to Angular equivalents with real-world examples. By the end, you'll understand not just the syntax differences, but the philosophical shifts that make Angular powerful for enterprise applications.

---

## 🎯 Who This Guide Is For

- Developers fluent in **React 18/19** (hooks, context, modern patterns)
- Teams adopting **Angular 18+** for enterprise projects
- Anyone wanting a **side-by-side comparison** to speed up onboarding
- Developers curious about when to choose Angular over React

---

## 🧩 Core Philosophy Differences

Understanding the philosophical differences is crucial for making the mental shift:

| Aspect | React | Angular |
|--------|-------|---------|
| **Nature** | Library for building UI | Full framework with CLI, routing, forms, DI, HTTP, testing |
| **Templates** | JSX + declarative UI | HTML templates with directives and bindings |
| **State & Logic** | Hooks for state & lifecycle | Decorators + lifecycle methods + Signals |
| **Dependency Management** | Context / external state libraries | Built-in Dependency Injection |
| **Philosophy** | Lightweight core, choose your stack | Opinionated, integrated ecosystem |
| **Compilation** | Runtime JSX transformation | Compile-time template compilation with AOT |
| **Learning Curve** | Shallow initial, steep for ecosystem | Steeper initial, plateau faster |
| **Team Size Sweet Spot** | Small to medium teams | Medium to large enterprise teams |

### The Mental Model Shift

**React's Philosophy**: "Here are the primitives. Build your own patterns."
- You choose your router (React Router, Tanstack Router, Next.js)
- You choose your state library (Context, Redux, Zustand, Jotai)
- You choose your form library (React Hook Form, Formik)
- You choose your HTTP client (fetch, axios, React Query)

**Angular's Philosophy**: "Here's a complete, tested, integrated solution."
- Router is built-in with advanced features
- State management via Services + RxJS (or NgRx for complex apps)
- Forms have two robust built-in solutions
- HTTP client is integrated with interceptors and typing

**Why This Matters**:
- React: Freedom to innovate, risk of fragmentation
- Angular: Consistency across teams, less decision fatigue
- React: Faster initial prototyping
- Angular: Faster scaling to 100+ developers

> 💡 **Key Mental Shift**: Angular favors **convention over configuration**. Where React gives you flexibility to choose patterns, Angular provides established patterns that have been battle-tested in enterprise environments. This can feel restrictive at first, but it eliminates "analysis paralysis" and ensures codebases remain maintainable as teams grow.

---

## 🚀 Project Setup & Architecture

### Creating a New Project

**React**:  
```bash
# Lightweight, minimal setup
npx create-react-app my-app

# or modern alternative
npm create vite@latest my-app -- --template react-ts

# Result: ~50MB, basic setup
```

**Angular**:  
```bash
# Install CLI globally (one-time)
npm install -g @angular/cli

# Create project with options
ng new my-app --routing --style=scss --strict

cd my-app
ng serve  # Runs on http://localhost:4200
```

**What Angular's CLI Gives You Out of the Box**:
- TypeScript configuration optimized for Angular
- Testing setup (Karma + Jasmine)
- Linting configuration (ESLint)
- Build optimization (AOT compilation, tree-shaking)
- Development server with hot reload
- Production build configuration
- Routing setup
- End-to-end testing structure

### Project Structure Comparison

**React** (typical structure - you design this):
```
src/
  components/
    Button/
      Button.tsx
      Button.test.tsx
      Button.module.css
  hooks/
    useAuth.ts
    useApi.ts
  contexts/
    AuthContext.tsx
  utils/
    formatters.ts
  pages/
    Home.tsx
    About.tsx
  App.tsx
  index.tsx
```

**Angular** (CLI-generated structure - convention-based):
```
src/
  app/
    components/          # Presentational components
      button/
        button.component.ts
        button.component.html
        button.component.scss
        button.component.spec.ts
    
    services/           # Business logic & state
      auth.service.ts
      api.service.ts
      auth.service.spec.ts
    
    guards/             # Route protection
      auth.guard.ts
    
    pipes/              # Data transformation
      date-format.pipe.ts
    
    directives/         # Custom DOM behavior
      highlight.directive.ts
    
    models/             # TypeScript interfaces
      user.model.ts
    
    interceptors/       # HTTP request/response handling
      auth.interceptor.ts
    
  environments/         # Environment configs
    environment.ts
    environment.prod.ts
```

**Understanding the Structure**:

1. **Components** are split into 4 files:
   - `.component.ts` - Logic (like React component)
   - `.component.html` - Template (like JSX, but separate)
   - `.component.scss` - Styles (scoped by default!)
   - `.component.spec.ts` - Tests (generated automatically)

2. **Services** are singleton classes for:
   - API calls
   - State management
   - Business logic
   - Utility functions

3. **Guards** protect routes (like React Router loaders/middleware)

4. **Pipes** transform data in templates (like React utility functions, but in templates)

**Why Separate Files?**
- Separation of concerns
- Better IDE support (HTML/CSS intellisense)
- Easier to review in PRs
- Cleaner git diffs

> 💡 **React Dev Tip**: This feels verbose at first, but the separation scales incredibly well. In a 100-component app, finding "all the styles" or "all the tests" becomes trivial.

---

## 🔄 Components and Signals

### Understanding Angular Components vs React Components

**React Components** are functions that return JSX:
```jsx
// Everything in one place
function Greeting({ name, onGreet }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(`Name changed to ${name}`);
  }, [name]);
  
  return (
    <div className="greeting">
      <h1>Hello {name}</h1>
      <p>Count: {count}</p>
      <button onClick={onGreet}>Greet</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Angular Components** are classes with decorators:
```typescript
import { Component, Input, Output, EventEmitter, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',           // How to use: <app-greeting></app-greeting>
  standalone: true,                   // No NgModule needed (Angular 18+)
  imports: [CommonModule],            // Import other components/directives
  templateUrl: './greeting.component.html',  // Or use inline template
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {
  // Inputs = Props in React
  @Input() name = signal('');         // Reactive input with Signals
  
  // Outputs = Event handlers passed as props
  @Output() greet = new EventEmitter<void>();
  
  // Local state (like useState)
  count = signal(0);
  
  // Effects (like useEffect)
  constructor() {
    effect(() => {
      console.log(`Name changed to ${this.name()}`);
    });
  }
  
  // Methods (like event handlers)
  onGreetClick() {
    this.greet.emit();
  }
  
  increment() {
    this.count.update(v => v + 1);
  }
}
```

**Template (greeting.component.html)**:
```html
<div class="greeting">
  <h1>Hello {{ name() }}</h1>
  <p>Count: {{ count() }}</p>
  <button (click)="onGreetClick()">Greet</button>
  <button (click)="increment()">Increment</button>
</div>
```

### Angular Signals: React Hooks, Reimagined

Angular Signals (introduced in v16) are Angular's answer to React hooks, but with some key differences:

**React useState**:
```jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);

// Update
setCount(count + 1);
setCount(prev => prev + 1);  // Functional update

// Use
return <div>{count}</div>
```

**Angular Signals**:
```typescript
import { signal, computed, effect } from '@angular/core';

// Declaration
count = signal(0);
user = signal<User | null>(null);

// Update
this.count.set(10);                    // Direct set
this.count.update(v => v + 1);         // Functional update

// Use in template
// {{ count() }}  - Note: must call as function

// Use in code
console.log(this.count());            // Get current value
```

### Computed Values: useMemo → computed()

**React useMemo**:
```jsx
const [count, setCount] = useState(0);
const doubleCount = useMemo(() => count * 2, [count]);
const isEven = useMemo(() => count % 2 === 0, [count]);

return (
  <div>
    <p>Count: {count}</p>
    <p>Double: {doubleCount}</p>
    <p>Is Even: {isEven ? 'Yes' : 'No'}</p>
  </div>
);
```

**Angular computed()**:
```typescript
count = signal(0);

// Computed values automatically track dependencies
doubleCount = computed(() => this.count() * 2);
isEven = computed(() => this.count() % 2 === 0);

// Template
// <p>Count: {{ count() }}</p>
// <p>Double: {{ doubleCount() }}</p>
// <p>Is Even: {{ isEven() ? 'Yes' : 'No' }}</p>
```

**Key Difference**: 
- React: You manually specify dependencies `[count]`
- Angular: Signals automatically track what's accessed inside `computed()`

**Why This Matters**: No dependency array mistakes! Angular Signals eliminate the entire class of bugs caused by missing dependencies.

### Effects: useEffect → effect()

**React useEffect**:
```jsx
useEffect(() => {
  console.log('Component mounted');
  return () => console.log('Cleanup');
}, []);

useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]);

useEffect(() => {
  const subscription = api.subscribe(data => setData(data));
  return () => subscription.unsubscribe();
}, []);
```

**Angular effect()**:
```typescript
constructor() {
  // Runs once
  effect(() => {
    console.log('Component initialized');
  });
  
  // Automatically tracks count
  effect(() => {
    console.log(`Count changed to ${this.count()}`);
  });
  
  // Cleanup happens automatically on destroy
  effect((onCleanup) => {
    const subscription = this.api.subscribe(data => {
      this.data.set(data);
    });
    
    onCleanup(() => subscription.unsubscribe());
  });
}
```

**Comparison**:
- React: Dependencies must be explicitly listed
- Angular: Dependencies automatically tracked
- React: Cleanup via return function
- Angular: Cleanup via `onCleanup` callback
- React: Can run conditionally with dependencies
- Angular: Always runs, but tracks accessed signals

### Complete Component Example

Let's build a real-world component: A todo item with editing capabilities.

**React Version**:
```jsx
function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);
  
  const handleSave = () => {
    if (editText.trim()) {
      onUpdate({ ...todo, text: editText });
      setIsEditing(false);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };
  
  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          ref={inputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
        />
      ) : (
        <>
          <span 
            className={todo.completed ? 'completed' : ''}
            onClick={() => onUpdate({ ...todo, completed: !todo.completed })}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
```

**Angular Version**:
```typescript
// todo-item.component.ts
import { Component, Input, Output, EventEmitter, signal, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;
  @Output() update = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<number>();
  
  @ViewChild('editInput') editInput?: ElementRef<HTMLInputElement>;
  
  isEditing = signal(false);
  editText = signal('');
  
  constructor() {
    // Focus input when editing starts
    effect(() => {
      if (this.isEditing() && this.editInput) {
        setTimeout(() => this.editInput?.nativeElement.focus());
      }
    });
  }
  
  startEdit() {
    this.editText.set(this.todo.text);
    this.isEditing.set(true);
  }
  
  handleSave() {
    if (this.editText().trim()) {
      this.update.emit({ ...this.todo, text: this.editText() });
      this.isEditing.set(false);
    }
  }
  
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.handleSave();
    if (event.key === 'Escape') {
      this.editText.set(this.todo.text);
      this.isEditing.set(false);
    }
  }
  
  toggleComplete() {
    this.update.emit({ ...this.todo, completed: !this.todo.completed });
  }
  
  handleDelete() {
    this.delete.emit(this.todo.id);
  }
}
```

**Template (todo-item.component.html)**:
```html
<div class="todo-item">
  @if (isEditing()) {
    <input
      #editInput
      [value]="editText()"
      (input)="editText.set($any($event.target).value)"
      (keydown)="handleKeyDown($event)"
      (blur)="handleSave()"
    />
  } @else {
    <span 
      [class.completed]="todo.completed"
      (click)="toggleComplete()"
    >
      {{ todo.text }}
    </span>
    <button (click)="startEdit()">Edit</button>
    <button (click)="handleDelete()">Delete</button>
  }
</div>
```

**Key Takeaways from This Example**:

1. **Signals replace useState**: `isEditing = signal(false)`
2. **@ViewChild replaces useRef**: Access DOM elements
3. **effect() replaces useEffect**: Auto-focus logic
4. **@Input/@Output replace props**: Type-safe communication
5. **Template syntax**: `@if`, `(click)`, `[class.completed]`

---

## 🎛 State Management

State management is where Angular's philosophy really shines. React gives you primitives; Angular gives you patterns.

### Local Component State

**React (useState + useReducer)**:
```jsx
// Simple state
const [count, setCount] = useState(0);
const increment = () => setCount(prev => prev + 1);

// Complex state with reducer
const [state, dispatch] = useReducer(
  (state, action) => {
    switch (action.type) {
      case 'INCREMENT': return { ...state, count: state.count + 1 };
      case 'SET_USER': return { ...state, user: action.payload };
      default: return state;
    }
  },
  { count: 0, user: null }
);
```

**Angular (Signals)**:
```typescript
// Simple state
count = signal(0);
increment() {
  this.count.update(v => v + 1);
}

// Complex state with signals
state = signal({
  count: 0,
  user: null as User | null
});

dispatch(action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      this.state.update(s => ({ ...s, count: s.count + 1 }));
      break;
    case 'SET_USER':
      this.state.update(s => ({ ...s, user: action.payload }));
      break;
  }
}
```

### Global State: The Angular Way

This is where Angular differs significantly from React. Instead of Context, Angular uses **Services with Dependency Injection**.

**React (Context API)**:
```jsx
// 1. Create context
const AppContext = createContext();

// 2. Create provider
function AppProvider({ children }) {
  const [state, setState] = useState(initialState);
  
  const updateUser = (user) => {
    setState(prev => ({ ...prev, user }));
  };
  
  return (
    <AppContext.Provider value={{ state, updateUser }}>
      {children}
    </AppContext.Provider>
  );
}

// 3. Wrap app
<AppProvider>
  <App />
</AppProvider>

// 4. Use in components
const { state, updateUser } = useContext(AppContext);
```

**Angular (Service + Dependency Injection)**:
```typescript
// 1. Create service (automatically singleton)
@Injectable({ providedIn: 'root' })
export class AppStateService {
  // Private signal for internal state
  private _state = signal<AppState>(initialState);
  
  // Public read-only computed
  state = this._state.asReadonly();
  
  // Derived state
  user = computed(() => this._state().user);
  isAuthenticated = computed(() => !!this._state().user);
  
  // Actions
  updateUser(user: User) {
    this._state.update(s => ({ ...s, user }));
  }
  
  logout() {
    this._state.update(s => ({ ...s, user: null }));
  }
}

// 2. No provider needed - DI handles it

// 3. Use in any component
@Component({...})
export class MyComponent {
  // Inject the service
  constructor(private appState: AppStateService) {}
  
  // Use it
  user = this.appState.user;
  
  handleLogout() {
    this.appState.logout();
  }
}
```

**Why Services Are Better Than Context for Large Apps**:

1. **No Provider Hell**: No nested providers, no wrapping
2. **Type Safety**: Full TypeScript support
3. **Testing**: Easy to mock services
4. **Performance**: No re-renders from context changes
5. **Lazy Loading**: Services load only when needed
6. **Tree-shakeable**: Unused services don't bundle

### RxJS for Async State

Angular embraces **RxJS Observables** for async operations. Think of them as "promises that can emit multiple values."

**React (useState + useEffect)**:
```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch('/api/users')
    .then(res => res.json())
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
}, []);
```

**Angular (Service + RxJS)**:
```typescript
// Service
@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  
  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}

// Component
@Component({...})
export class UsersComponent {
  private userService = inject(UserService);
  
  // Observable pattern
  users$ = this.userService.getUsers();
  
  // Or use Signals (modern approach)
  users = signal<User[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);
  
  ngOnInit() {
    this.userService.getUsers()
      .subscribe({
        next: (data) => {
          this.users.set(data);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err.message);
          this.loading.set(false);
        }
      });
  }
}
```

**Template with async pipe**:
```html
<!-- Observable pattern - async pipe handles subscription -->
@if (users$ | async; as users) {
  <ul>
    @for (user of users; track user.id) {
      <li>{{ user.name }}</li>
    }
  </ul>
} @else {
  <p>Loading...</p>
}

<!-- Or with Signals -->
@if (loading()) {
  <p>Loading...</p>
} @else if (error()) {
  <p>Error: {{ error() }}</p>
} @else {
  <ul>
    @for (user of users(); track user.id) {
      <li>{{ user.name }}</li>
    }
  </ul>
}
```

**RxJS Superpowers**:
```typescript
// Combine multiple observables
users$ = combineLatest([
  this.userService.getUsers(),
  this.roleService.getRoles()
]).pipe(
  map(([users, roles]) => {
    // Merge data
    return users.map(user => ({
      ...user,
      role: roles.find(r => r.id === user.roleId)
    }));
  })
);

// Debounce search
searchResults$ = this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(query => this.searchService.search(query))
);

// Retry on failure
data$ = this.api.getData().pipe(
  retry(3),
  catchError(err => of([]))
);
```

> 💡 **React Dev Note**: RxJS has a learning curve, but it's incredibly powerful for complex async workflows. Think of it as Promise + EventEmitter + Array methods combined.

---

## 🪝 Lifecycle Methods: Complete Mapping

React hooks are flexible but implicit. Angular lifecycle methods are explicit and predictable.

| React Hook | Angular Equivalent | Timing | Use Case |
|------------|-------------------|--------|----------|
| `useEffect(() => {...}, [])` | `ngOnInit()` | After component initialization | API calls, subscriptions |
| `useEffect(() => {...}, [dep])` | `ngOnChanges(changes)` | When @Input() changes | React to prop changes |
| `useLayoutEffect` | `ngAfterViewInit()` | After view rendered | DOM manipulation, measurements |
| `useEffect` cleanup | `ngOnDestroy()` | Before component destroyed | Cleanup subscriptions, timers |
| `useMemo` | `computed()` (Signals) | On dependency change | Derived state |
| `useCallback` | Method binding | - | Function memoization |
| `useRef` | `@ViewChild/@ViewChildren` | After view init | Access DOM elements/components |

### Complete Lifecycle Example

**React Version**:
```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const containerRef = useRef(null);
  
  // Mount + userId changes
  useEffect(() => {
    console.log('Fetching user:', userId);
    fetchUser(userId).then(setUser);
    fetchPosts(userId).then(setPosts);
  }, [userId]);
  
  // After render (DOM manipulation)
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [userId]);
  
  // Cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Polling...');
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const userWithPosts = useMemo(() => {
    if (!user) return null;
    return { ...user, postCount: posts.length };
  }, [user, posts]);
  
  return (
    <div ref={containerRef}>
      {userWithPosts && (
        <div>
          <h1>{userWithPosts.name}</h1>
          <p>Posts: {userWithPosts.postCount}</p>
        </div>
      )}
    </div>
  );
}
```

**Angular Version**:
```typescript
@Component({
  selector: 'app-user-profile',
  template: `
    <div #container>
      @if (userWithPosts(); as user) {
        <h1>{{ user.name }}</h1>
        <p>Posts: {{ user.postCount }}</p>
      }
    </div>
  `
})
export class UserProfileComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input({ required: true }) userId!: string;
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  
  private userService = inject(UserService);
  private destroy$ = new Subject<void>();
  
  user = signal<User | null>(null);
  posts = signal<Post[]>([]);
  
  // Computed (like useMemo)
  userWithPosts = computed(() => {
    const user = this.user();
    if (!user) return null;
    return { ...user, postCount: this.posts().length };
  });
  
  // Like useEffect with [userId]
  ngOnChanges(changes: SimpleChanges) {
    if (changes['userId']) {
      console.log('Fetching user:', this.userId);
      this.loadUserData();
    }
  }
  
  // Like useEffect with []
  ngOnInit() {
    // Polling with cleanup
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => console.log('Polling...'));
  }
  
  // Like useLayoutEffect
  ngAfterViewInit() {
    if (this.container) {
      this.container.nativeElement.scrollTop = 0;
    }
  }
  
  // Like useEffect cleanup
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  private loadUserData() {
    forkJoin({
      user: this.userService.getUser(this.userId),
      posts: this.userService.getPosts(this.userId)
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: ({ user, posts }) => {
        this.user.set(user);
        this.posts.set(posts);
      }
    });
  }
}
```

**Key Differences**:

1. **Explicit vs Implicit**: Angular's lifecycle methods are explicit, React's hooks are implicit
2. **Cleanup Pattern**: Angular uses RxJS operators like `takeUntil()`, React uses return functions
3. **Multiple Responsibilities**: One Angular method can handle multiple concerns
4. **Predictability**: Angular's lifecycle is strictly ordered and documented

---

## 🛠 Forms: Two Approaches

React relies on **controlled components**. Angular gives you two sophisticated options.

### Template-Driven Forms (Similar to React)

**React Controlled Form**:
```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = 'Required';
    if (password.length < 6) newErrors.password = 'Too short';
    
    if (Object.keys(newErrors).length === 0) {
      login(email, password);
    } else {
      setErrors(newErrors);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span>{errors.email}</span>}
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <span>{errors.password}</span>}
      
      <button type="submit">Login</button>
    </form>
  );
}
```

**Angular Template-Driven**:
```typescript
@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  template: `
    <form #loginForm="ngForm" (ngSubmit)="handleSubmit(loginForm)">
      <input
        name="email"
        [(ngModel)]="email"
        required
        email
        #emailField="ngModel"
      />
      @if (emailField.invalid && emailField.touched) {
        <span>Invalid email</span>
      }
      
      <input
        type="password"
        name="password"
        [(ngModel)]="password"
        required
        minlength="6"
        #passwordField="ngModel"
      />
      @if (passwordField.invalid && passwordField.touched) {
        <span>Password too short</span>
      }
      
      <button type="submit" [disabled]="loginForm.invalid">
        Login
      </button>
    </form>
  `
})
export class LoginFormComponent {
  email = '';
  password = '';
  
  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.login(this.email, this.password);
    }
  }
  
  login(email: string, password: string) {
    // API call
  }
}
```

### Reactive Forms (Recommended for Complex Forms)

Reactive Forms are more powerful and give you programmatic control, similar to React Hook Form.

**React Hook Form**:
```jsx
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  
  const password = watch('password');
  
  const onSubmit = (data) => {
    registerUser(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email'
          }
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input
        type="password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      
      <input
        type="password"
        {...register('confirmPassword', {
          required: 'Please confirm password',
          validate: value =>
            value === password || 'Passwords do not match'
        })}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      
      <button type="submit">Register</button>
    </form>
  );
}
```

**Angular Reactive Forms**:
```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <input formControlName="email" placeholder="Email" />
        @if (form.get('email')?.invalid && form.get('email')?.touched) {
          <span class="error">
            @if (form.get('email')?.errors?.['required']) {
              Email is required
            }
            @if (form.get('email')?.errors?.['email']) {
              Invalid email format
            }
          </span>
        }
      </div>
      
      <div>
        <input
          type="password"
          formControlName="password"
          placeholder="Password"
        />
        @if (form.get('password')?.invalid && form.get('password')?.touched) {
          <span class="error">
            @if (form.get('password')?.errors?.['required']) {
              Password is required
            }
            @if (form.get('password')?.errors?.['minlength']) {
              Password must be at least 8 characters
            }
          </span>
        }
      </div>
      
      <div>
        <input
          type="password"
          formControlName="confirmPassword"
          placeholder="Confirm Password"
        />
        @if (form.get('confirmPassword')?.invalid && form.get('confirmPassword')?.touched) {
          <span class="error">
            @if (form.get('confirmPassword')?.errors?.['required']) {
              Please confirm password
            }
            @if (form.get('confirmPassword')?.errors?.['passwordMismatch']) {
              Passwords do not match
            }
          </span>
        }
      </div>
      
      <button type="submit" [disabled]="form.invalid">
        Register
      </button>
    </form>
  `
})
export class RegistrationFormComponent {
  private fb = inject(FormBuilder);
  
  form: FormGroup;
  
  constructor() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  
  // Custom validator
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (!password || !confirmPassword) {
      return null;
    }
    
    return password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }
  
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.registerUser(formData);
    }
  }
  
  registerUser(data: any) {
    // API call
  }
}
```

**Key Advantages of Reactive Forms**:

1. **Programmatic Control**: Manipulate forms in code
2. **Type Safety**: Strongly typed form controls
3. **Testing**: Easy to unit test
4. **Dynamic Forms**: Add/remove controls dynamically
5. **Complex Validation**: Cross-field validation, async validators
6. **Value Streams**: Subscribe to form changes

**Advanced Reactive Forms Example**:
```typescript
// Dynamic form with conditional fields
export class DynamicFormComponent {
  private fb = inject(FormBuilder);
  
  form = this.fb.group({
    accountType: ['personal', Validators.required],
    personalInfo: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    }),
    businessInfo: this.fb.group({
      companyName: [''],
      taxId: ['']
    })
  });
  
  constructor() {
    // Watch account type and toggle validation
    this.form.get('accountType')?.valueChanges.subscribe(type => {
      const businessGroup = this.form.get('businessInfo');
      
      if (type === 'business') {
        businessGroup?.get('companyName')?.setValidators([Validators.required]);
        businessGroup?.get('taxId')?.setValidators([Validators.required]);
      } else {
        businessGroup?.get('companyName')?.clearValidators();
        businessGroup?.get('taxId')?.clearValidators();
      }
      
      businessGroup?.get('companyName')?.updateValueAndValidity();
      businessGroup?.get('taxId')?.updateValueAndValidity();
    });
  }
}
```

> 💡 **Best Practice**: Use **Reactive Forms** for anything beyond simple forms. They scale much better and give you the control you need for complex validation logic.

---

## 🧭 Routing: Built-in Power

**React Router** is lightweight and flexible. **Angular Router** is a full-featured, integrated routing solution.

### Basic Routing Setup

**React Router**:
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Angular Router**:
```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent }
];

// app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/users">Users</a>
    </nav>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}

// main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
```

### Advanced Routing Features

**1. Route Guards (Protection)**

**React (Custom Hook)**:
```jsx
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  return isAuthenticated ? children : null;
}

// Usage
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
```

**Angular (Guards)**:
```typescript
// auth.guard.ts
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true;
  }
  
  return router.createUrlTree(['/login']);
};

// routes
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]  // Protect this route
  }
];
```

**2. Lazy Loading**

**React (React.lazy)**:
```jsx
const Dashboard = React.lazy(() => import('./Dashboard'));

<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</Suspense>
```

**Angular (Built-in)**:
```typescript
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
      .then(m => m.ADMIN_ROUTES)
  }
];
```

**3. Route Parameters**

**React**:
```jsx
import { useParams, useSearchParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  
  return <div>User {id}, Tab: {tab}</div>;
}
```

**Angular**:
```typescript
@Component({...})
export class UserDetailComponent {
  private route = inject(ActivatedRoute);
  
  // Route params as Observable (updates on navigation)
  userId$ = this.route.paramMap.pipe(
    map(params => params.get('id'))
  );
  
  // Query params
  tab$ = this.route.queryParamMap.pipe(
    map(params => params.get('tab'))
  );
  
  // Or use Signals (modern approach)
  userId = toSignal(this.route.paramMap.pipe(
    map(params => params.get('id'))
  ));
}
```

**4. Programmatic Navigation**

**React**:
```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/users/123');
    navigate('/search?q=angular');
    navigate(-1); // Go back
  };
}
```

**Angular**:
```typescript
@Component({...})
export class MyComponent {
  private router = inject(Router);
  
  handleClick() {
    this.router.navigate(['/users', '123']);
    this.router.navigate(['/search'], { queryParams: { q: 'angular' } });
    this.router.navigate(['../'], { relativeTo: this.route }); // Relative nav
  }
}
```

**5. Route Resolvers (Data Prefetching)**

Angular has built-in support for loading data *before* a route activates:

```typescript
// user.resolver.ts
export const userResolver: ResolveFn<User> = (route, state) => {
  const userService = inject(UserService);
  const userId = route.paramMap.get('id')!;
  
  return userService.getUser(userId);
};

// routes
{
  path: 'users/:id',
  component: UserDetailComponent,
  resolve: { user: userResolver }  // Data loaded before component
}

// component
@Component({...})
export class UserDetailComponent {
  private route = inject(ActivatedRoute);
  
  user = toSignal(this.route.data.pipe(
    map(data => data['user'] as User)
  ));
}
```

**React equivalent** would require custom implementation with loaders (if using React Router 6.4+) or manual data fetching.

> ✅ **Angular Advantage**: Route guards, resolvers, and lazy loading are built-in and well-integrated. No additional libraries needed.

---

## ⚡ Performance Optimization

Both frameworks require optimization for large apps, but they approach it differently.

### React Performance

**React Optimization Tools**:
```jsx
// 1. Memoization
const MemoizedComponent = React.memo(ExpensiveComponent);

// 2. useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// 3. useCallback for stable function references
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// 4. Code splitting
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

// 5. Virtual scrolling for large lists
import { FixedSizeList } from 'react-window';
```

### Angular Performance

**Angular Optimization Tools**:
```typescript
// 1. OnPush Change Detection
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush  // Only check on input changes
})
export class OptimizedComponent {
  @Input() data!: any;
}

// 2. trackBy for lists (critical!)
@Component({
  template: `
    @for (item of items(); track item.id) {
      <app-item [data]="item"></app-item>
    }
  `
})
export class ListComponent {
  items = signal<Item[]>([]);
}

// 3. Signals (automatic optimization)
// Signals only update what's necessary
count = signal(0);
double = computed(() => this.count() * 2);  // Auto-memoized

// 4. Lazy loading routes (built-in)
{
  path: 'feature',
  loadComponent: () => import('./feature.component')
}

// 5. Detaching change detection for manual control
constructor(private cdr: ChangeDetectorRef) {
  this.cdr.detach();  // Manual control
}

// 6. Virtual scrolling (CDK)
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
```

### Performance Comparison

**React**:
- Manual optimization with memo, useMemo, useCallback
- Virtual DOM diffing (can be slow for large updates)
- Need to be careful with unnecessary re-renders
- Profiler tools to find bottlenecks

**Angular**:
- Signals provide automatic optimization
- OnPush strategy reduces checks
- Zone.js can sometimes cause over-checking (Signals help)
- Built-in performance budgets in CLI

**Real-World Example: Optimized List**

**React**:
```jsx
const ListItem = React.memo(({ item, onDelete }) => (
  <div>
    <span>{item.name}</span>
    <button onClick={() => onDelete(item.id)}>Delete</button>
  </div>
));

function OptimizedList({ items }) {
  const handleDelete = useCallback((id) => {
    deleteItem(id);
  }, []);
  
  return (
    <div>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
```

**Angular**:
```typescript
@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,  // Optimize
  template: `
    <div>
      <span>{{ item().name }}</span>
      <button (click)="delete.emit()">Delete</button>
    </div>
  `
})
export class ListItemComponent {
  item = input.required<Item>();
  @Output() delete = new EventEmitter<void>();
}

@Component({
  selector: 'app-optimized-list',
  template: `
    @for (item of items(); track item.id) {
      <app-list-item
        [item]="item"
        (delete)="handleDelete(item.id)"
      ></app-list-item>
    }
  `
})
export class OptimizedListComponent {
  items = input.required<Item[]>();
  
  handleDelete(id: string) {
    this.deleteItem(id);
  }
}
```

> 💡 **Key Insight**: Angular's **OnPush + Signals** combination provides near-automatic optimization, while React requires more manual intervention with memo/useMemo/useCallback.

---

## 🧪 Testing

Both ecosystems have robust testing solutions, but with different defaults.

### Component Testing

**React (Jest + React Testing Library)**:
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  it('increments count when button clicked', () => {
    render(<Counter />);
    
    const button = screen.getByText('Increment');
    const count = screen.getByText(/count:/i);
    
    expect(count).toHaveTextContent('Count: 0');
    
    fireEvent.click(button);
    
    expect(count).toHaveTextContent('Count: 1');
  });
});
```

**Angular (Jasmine + TestBed - Default)**:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should increment count when button clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    const countEl = fixture.nativeElement.querySelector('span');
    
    expect(countEl.textContent).toBe('Count: 0');
    
    button.click();
    fixture.detectChanges();
    
    expect(countEl.textContent).toBe('Count: 1');
  });
});
```

**Angular (Jest + Testing Library - React-like)**:
```typescript
import { render, screen, fireEvent } from '@testing-library/angular';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  it('increments count when button clicked', async () => {
    await render(CounterComponent);
    
    const button = screen.getByText('Increment');
    const count = screen.getByText(/count:/i);
    
    expect(count).toHaveTextContent('Count: 0');
    
    fireEvent.click(button);
    
    expect(count).toHaveTextContent('Count: 1');
  });
});
```

### Service Testing

**React (Custom Hook Testing)**:
```jsx
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('should increment', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

**Angular (Service Testing)**:
```typescript
import { TestBed } from '@angular/core/testing';
import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });
  
  it('should increment', () => {
    service.increment();
    expect(service.count()).toBe(1);
  });
});
```

> ✅ **Pro Tip**: If you love Jest and React Testing Library, you can use them in Angular too! Install `@testing-library/angular` and configure Jest for a familiar testing experience.

---

## 🚧 Common Pitfalls for React Developers

### 1. Template Syntax vs JSX

**React (JSX)**:
```jsx
// Conditional rendering
{isLoggedIn && <Dashboard />}
{user ? <Profile user={user} /> : <Login />}

// List rendering
{items.map(item => <Item key={item.id} data={item} />)}

// Event handling
<button onClick={handleClick}>Click</button>
<input onChange={(e) => setValue(e.target.value)} />

// Dynamic classes
<div className={`box ${isActive ? 'active' : ''}`}>
```

**Angular (Templates)**:
```html
<!-- Conditional rendering -->
@if (isLoggedIn()) {
  <app-dashboard></app-dashboard>
}

@if (user(); as u) {
  <app-profile [user]="u"></app-profile>
} @else {
  <app-login></app-login>
}

<!-- List rendering (trackBy is important!) -->
@for (item of items(); track item.id) {
  <app-item [data]="item"></app-item>
}

<!-- Event handling -->
<button (click)="handleClick()">Click</button>
<input (input)="setValue($any($event.target).value)" />

<!-- Dynamic classes -->
<div [class.active]="isActive()" class="box">
<div [ngClass]="{ 'active': isActive(), 'disabled': !enabled() }">
```

**Key Differences**:
- Angular uses `@if/@for` (new) or `*ngIf/*ngFor` (old)
- Events use `(event)` syntax
- Properties use `[property]` syntax
- Two-way binding: `[(ngModel)]`

### 2. Observables Everywhere

React developers are used to Promises. Angular uses RxJS Observables:

```typescript
// React (Promise)
fetch('/api/users')
  .then(res => res.json())
  .then(data => setUsers(data));

// Angular (Observable)
this.http.get<User[]>('/api/users')
  .subscribe(data => this.users.set(data));

// Or use async pipe in template
users$ = this.http.get<User[]>('/api/users');
// Template: @if (users$ | async; as users) { ... }
```

**Why Observables?**
- Can emit multiple values over time
- Powerful operators (map, filter, debounce, etc.)
- Easy cancellation
- Better for complex async workflows

### 3. Dependency Injection vs Imports

**React** - You import and use:
```jsx
import { apiService } from './api.service';

function MyComponent() {
  const data = apiService.getData();
}
```

**Angular** - You inject:
```typescript
@Component({...})
export class MyComponent {
  private apiService = inject(ApiService);  // DI magic
  
  ngOnInit() {
    const data = this.apiService.getData();
  }
}
```

**Why DI?**
- Easy mocking in tests
- Singleton services
- Hierarchical injection
- Lazy loading friendly

### 4. CSS Scoping

**React** - You choose (CSS Modules, Styled Components, etc.):
```jsx
import styles from './Button.module.css';

<button className={styles.primary}>Click</button>
```

**Angular** - Scoped by default:
```typescript
@Component({
  styles: [`
    .primary {
      background: blue;  /* Only affects this component! */
    }
  `]
})
```

### 5. Bundle Size Perception

Angular apps feel heavier initially, but:
- Everything is included (router, forms, HTTP, etc.)
- Tree-shaking removes unused code
- Lazy loading keeps bundles small
- Production builds are highly optimized

**Typical Bundle Sizes**:
- React (CRA) with routing + state: ~150-200KB
- Angular with everything: ~200-250KB
- The difference narrows as apps grow

---

## 🛠 Your First Angular Project: Step-by-Step

Let's build a real application to solidify your understanding.

### Project: Task Manager App

**Features**:
- List tasks with status
- Add/edit/delete tasks
- Filter by status
- Persist to API

**Step 1: Create Project**
```bash
ng new task-manager --routing --style=scss
cd task-manager
ng serve
```

**Step 2: Create Task Model**
```typescript
// models/task.model.ts
export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  createdAt: Date;
}
```

**Step 3: Create Task Service**
```typescript
// services/task.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = signal<Task[]>([]);
  
  // Computed (derived state)
  allTasks = this.tasks.asReadonly();
  todoTasks = computed(() =>
    this.tasks().filter(t => t.status === 'todo')
  );
  inProgressTasks = computed(() =>
    this.tasks().filter(t => t.status === 'in-progress')
  );
  doneTasks = computed(() =>
    this.tasks().filter(t => t.status === 'done')
  );
  
  addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date()
    };
    this.tasks.update(tasks => [...tasks, newTask]);
  }
  
  updateTask(id: string, updates: Partial<Task>) {
    this.tasks.update(tasks =>
      tasks.map(t => t.id === id ? { ...t, ...updates } : t)
    );
  }
  
  deleteTask(id: string) {
    this.tasks.update(tasks => tasks.filter(t => t.id !== id));
  }
}
```

**Step 4: Create Task List Component**
```typescript
// components/task-list/task-list.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  template: `
    <div class="task-list">
      <h2>Tasks</h2>
      
      <div class="filters">
        <button
          (click)="filter.set('all')"
          [class.active]="filter() === 'all'"
        >
          All ({{ taskService.allTasks().length }})
        </button>
        <button
          (click)="filter.set('todo')"
          [class.active]="filter() === 'todo'"
        >
          Todo ({{ taskService.todoTasks().length }})
        </button>
        <button
          (click)="filter.set('in-progress')"
          [class.active]="filter() === 'in-progress'"
        >
          In Progress ({{ taskService.inProgressTasks().length }})
        </button>
        <button
          (click)="filter.set('done')"
          [class.active]="filter() === 'done'"
        >
          Done ({{ taskService.doneTasks().length }})
        </button>
      </div>
      
      <div class="tasks">
        @for (task of filteredTasks(); track task.id) {
          <app-task-item
            [task]="task"
            (update)="handleUpdate($event)"
            (delete)="handleDelete($event)"
          ></app-task-item>
        } @empty {
          <p>No tasks found</p>
        }
      </div>
    </div>
  `,
  styles: [`
    .filters button.active {
      background: blue;
      color: white;
    }
  `]
})
export class TaskListComponent {
  taskService = inject(TaskService);
  filter = signal<'all' | 'todo' | 'in-progress' | 'done'>('all');
  
  filteredTasks = computed(() => {
    const filterValue = this.filter();
    if (filterValue === 'all') return this.taskService.allTasks();
    if (filterValue === 'todo') return this.taskService.todoTasks();
    if (filterValue === 'in-progress') return this.taskService.inProgressTasks();
    return this.taskService.doneTasks();
  });
  
  handleUpdate(event: { id: string; updates: Partial<Task> }) {
    this.taskService.updateTask(event.id, event.updates);
  }
  
  handleDelete(id: string) {
    this.taskService.deleteTask(id);
  }
}
```

**Step 5: Create Task Form Component**
```typescript
// components/task-form/task-form.component.ts
import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input
        formControlName="title"
        placeholder="Task title"
        required
      />
      
      <textarea
        formControlName="description"
        placeholder="Description"
      ></textarea>
      
      <select formControlName="status">
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      
      <button type="submit" [disabled]="form.invalid">
        Add Task
      </button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }
  `]
})
export class TaskFormComponent {
  private fb = inject(FormBuilder);
  @Output() taskCreated = new EventEmitter<any>();
  
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    status: ['todo', Validators.required]
  });
  
  onSubmit() {
    if (this.form.valid) {
      this.taskCreated.emit(this.form.value);
      this.form.reset({ status: 'todo' });
    }
  }
}
```

**Step 6: Put It All Together**
```typescript
// app.component.ts
import { Component, inject } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  template: `
    <div class="container">
      <h1>Task Manager</h1>
      
      <app-task-form
        (taskCreated)="handleTaskCreated($event)"
      ></app-task-form>
      
      <app-task-list></app-task-list>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
  `]
})
export class AppComponent {
  private taskService = inject(TaskService);
  
  handleTaskCreated(task: any) {
    this.taskService.addTask(task);
  }
}
```

### What You've Learned

This project demonstrates:

1. **Services with Signals** - Global state management
2. **Computed Values** - Derived state (filtered lists)
3. **Reactive Forms** - Form validation and handling
4. **Component Communication** - @Input/@Output
5. **Dependency Injection** - Service injection
6. **Modern Angular** - Standalone components, new control flow

**React Equivalent Comparison**:
```jsx
// In React, you'd need:
// - Context or state library for global state
// - Custom hooks for filtered lists
// - React Hook Form or similar for forms
// - Props for component communication
// - Manual imports for services
```

**Angular gives you all of this out of the box with established patterns.**

---

## ✅ Decision Matrix: When to Choose What

### Choose React When:

1. **Small to Medium Projects**: Quick prototypes, MVPs
2. **Flexible Architecture**: You want to choose your own stack
3. **Large Ecosystem**: Need access to vast npm ecosystem
4. **Server-Side Rendering**: Next.js provides excellent SSR
5. **Mobile Apps**: React Native for cross-platform
6. **Team Preference**: Team already knows React well
7. **Startup Environment**: Need to move fast and pivot
8. **Content-Heavy Sites**: Static site generation with Next.js

### Choose Angular When:

1. **Enterprise Applications**: Large-scale, long-term projects
2. **Large Teams**: Need consistency across 50+ developers
3. **Complex Business Logic**: Heavy forms, validation, workflows
4. **Long-Term Maintenance**: Projects lasting 5+ years
5. **TypeScript First**: Full TypeScript integration
6. **Integrated Solution**: Want everything in one framework
7. **Corporate Environment**: Established patterns and structure
8. **Migration from AngularJS**: Upgrading existing Angular apps

### The Hybrid Approach

Many companies use both:
- **React**: Public-facing websites, marketing pages
- **Angular**: Internal admin dashboards, enterprise tools

---

## 📊 Feature Comparison Table

| Feature | React | Angular |
|---------|-------|---------|
| **Learning Curve** | Moderate (library + ecosystem) | Steep (comprehensive framework) |
| **Bundle Size** | Smaller initially | Larger initially |
| **Performance** | Excellent with optimization | Excellent with OnPush + Signals |
| **TypeScript** | Optional, growing support | First-class, deeply integrated |
| **Tooling** | Choose your own | Integrated CLI |
| **State Management** | Many options (Context, Redux, Zustand) | Services + RxJS (or NgRx) |
| **Forms** | Controlled components + libraries | Template-driven + Reactive Forms |
| **Routing** | React Router (3rd party) | Built-in Angular Router |
| **HTTP Client** | fetch/axios + react-query | Built-in HttpClient |
| **Testing** | Jest + RTL | Jasmine/Karma (or Jest) |
| **Mobile** | React Native | Ionic/NativeScript |
| **SSR** | Next.js (3rd party) | Angular Universal (official) |
| **Animations** | React Spring, Framer Motion | Built-in Animation API |
| **Developer Tools** | React DevTools | Angular DevTools |
| **Community** | Massive, fragmented | Large, focused |
| **Job Market** | More positions overall | More enterprise positions |
| **Corporate Backing** | Meta (Facebook) | Google |
| **Update Frequency** | Frequent, sometimes breaking | Predictable, biannual |
| **Migration Path** | Can be gradual | More structured |
| **Ideal Team Size** | 1-20 developers | 10-200+ developers |

---

## 🎓 Learning Path for React Developers

### Week 1: Fundamentals
- ✅ Set up Angular CLI
- ✅ Understand component structure
- ✅ Learn template syntax (@if, @for)
- ✅ Master Signals (signal, computed, effect)
- ✅ Build simple counter and todo list

### Week 2: Architecture
- ✅ Create Services with DI
- ✅ Understand RxJS basics (Observable, subscribe)
- ✅ Learn HttpClient for API calls
- ✅ Build data fetching with service layer

### Week 3: Forms & Routing
- ✅ Template-driven forms basics
- ✅ Reactive Forms (recommended)
- ✅ Router setup and navigation
- ✅ Route guards and lazy loading

### Week 4: Advanced Patterns
- ✅ Change detection strategies
- ✅ Performance optimization (OnPush, trackBy)
- ✅ Custom pipes and directives
- ✅ Testing with Jasmine or Jest

### Week 5-6: Real Project
- ✅ Build full CRUD application
- ✅ Implement authentication
- ✅ Add complex forms with validation
- ✅ Deploy to production

---

## 🚀 Productivity Tips

### 1. Use Angular CLI Generators

Don't manually create files. Use the CLI:

```bash
# Generate component
ng generate component features/user-profile
# or shorthand
ng g c features/user-profile --standalone

# Generate service
ng g s services/auth

# Generate guard
ng g guard guards/auth

# Generate pipe
ng g pipe pipes/date-format

# Generate directive
ng g directive directives/highlight
```

### 2. Install Angular Snippets

Get VS Code extensions:
- **Angular Language Service** (official)
- **Angular Snippets** by John Papa
- **Angular Console** (GUI for CLI)

### 3. Use Standalone Components

Modern Angular (18+) uses standalone components by default:

```typescript
// Old way (NgModules - avoid for new projects)
@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent]
})
export class MyModule {}

// New way (Standalone - recommended)
@Component({
  standalone: true,
  imports: [CommonModule],
  // ...
})
export class MyComponent {}
```

### 4. Leverage RxJS Operators

Common patterns:

```typescript
// Debounce search input
searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(query => this.search(query))
);

// Combine multiple API calls
forkJoin({
  user: this.getUser(),
  posts: this.getPosts(),
  comments: this.getComments()
}).subscribe(result => {
  // All data loaded
});

// Cancel previous request
this.http.get('/api/data').pipe(
  takeUntil(this.destroy$)
).subscribe();
```

### 5. Use async Pipe in Templates

Automatically handles subscriptions:

```html
<!-- Bad: Manual subscription -->
<div>{{ data }}</div>

<!-- Component -->
data: any;
ngOnInit() {
  this.apiService.getData().subscribe(d => this.data = d);
}

<!-- Good: async pipe -->
<div>{{ data$ | async }}</div>

<!-- Component -->
data$ = this.apiService.getData();
// No subscription needed, pipe handles it
```

---

## 🐛 Debugging Tips

### 1. Angular DevTools

Install Angular DevTools browser extension to:
- Inspect component tree
- View component state (Signals)
- Profile change detection
- Debug dependency injection

### 2. Common Errors and Solutions

**Error: "Cannot read property of undefined"**
```typescript
// Problem
user.name  // user might be null

// Solution 1: Optional chaining
user?.name

// Solution 2: Template
{{ user()?.name }}

// Solution 3: @if
@if (user(); as u) {
  <div>{{ u.name }}</div>
}
```

**Error: "Expression changed after checked"**
```typescript
// Problem: Changing data during change detection

// Solution: Use setTimeout or effect
ngAfterViewInit() {
  setTimeout(() => {
    this.data.set(newValue);
  });
}
```

**Error: "No provider for Service"**
```typescript
// Problem: Service not provided

// Solution 1: Use providedIn: 'root'
@Injectable({ providedIn: 'root' })

// Solution 2: Add to component providers
@Component({
  providers: [MyService]
})
```

### 3. Console Logging Signals

```typescript
// Log signal value
console.log(this.count());  // Not just this.count

// Track signal changes with effect
effect(() => {
  console.log('Count changed:', this.count());
});
```

---

## 🔄 Migration Strategy: React to Angular

If you're migrating an existing React app:

### Phase 1: Parallel Development (Weeks 1-2)
- Set up Angular project alongside React
- Create matching component structure
- Don't try to port everything at once

### Phase 2: Shared Backend (Weeks 3-4)
- Use same API for both apps
- Test Angular implementation thoroughly
- Train team on Angular patterns

### Phase 3: Feature Parity (Weeks 5-8)
- Port features one by one
- Run both apps in parallel
- A/B test if possible

### Phase 4: Gradual Rollout (Weeks 9-12)
- Switch users gradually
- Monitor for issues
- Keep React as fallback

### Phase 5: Full Migration (Week 12+)
- Decommission React app
- Cleanup and optimization
- Document patterns and practices

**Alternative: Micro-frontends**

Use both frameworks in the same app:
- Angular for admin dashboard
- React for customer-facing UI
- Module Federation or Web Components for integration

---

## 📚 Essential Resources

### Official Documentation
- **Angular Docs**: https://angular.dev (new docs, much better!)
- **RxJS Docs**: https://rxjs.dev
- **Angular CLI**: https://angular.io/cli

### Learning Platforms
- **Angular University**: High-quality courses
- **Ultimate Courses**: Todd Motto's Angular courses
- **Frontend Masters**: "Angular Fundamentals" workshop

### Community Resources
- **Angular Blog**: https://blog.angular.io
- **Angular in Depth**: https://indepth.dev/angular
- **This is Angular**: Weekly newsletter
- **Angular Discord**: Active community

### Tools & Libraries
- **Angular Material**: Material Design components
- **PrimeNG**: Rich UI components
- **NgRx**: Redux-style state management
- **Angular CDK**: Component Dev Kit
- **Nx**: Monorepo tools

### People to Follow
- **Minko Gechev**: Angular team lead
- **Ward Bell**: Testing guru
- **Deborah Kurata**: Excellent tutorials
- **Todd Motto**: Angular expert
- **Manfred Steyer**: Micro-frontends expert

---

## 🎯 Key Takeaways

### Philosophy
- **React**: Flexibility and choice
- **Angular**: Structure and convention
- **Both**: Excellent for their use cases

### When You'll Love Angular
1. When prop drilling drives you crazy
2. When you want TypeScript everywhere
3. When you need forms that "just work"
4. When you want one way to do things
5. When you're building for the long term

### When You'll Miss React
1. Smaller bundle sizes for simple apps
2. JSX's flexibility
3. Easier to learn initially
4. Larger ecosystem of libraries
5. More job opportunities (currently)

### The Truth
- **Both frameworks are excellent**
- **Your team and project needs matter most**
- **Learning both makes you a better developer**
- **Skills transfer more than you think**

---

## 🚀 Next Steps

Now that you understand Angular from a React perspective:

1. **Build Something Real**: Don't just read, code
2. **Join the Community**: Angular Discord, Reddit
3. **Read Source Code**: Learn from Angular Material
4. **Contribute**: File issues, help others
5. **Stay Updated**: Angular releases biannually

### Practice Projects

**Beginner**:
- Todo app with CRUD
- Weather dashboard
- Blog with routing

**Intermediate**:
- E-commerce site with cart
- Social media feed
- Admin dashboard with auth

**Advanced**:
- Real-time chat (WebSockets + RxJS)
- Complex forms (multi-step wizard)
- Data visualization dashboard

---

## 💭 Final Thoughts

Coming from React, Angular might feel restrictive at first. That structure is intentional. Angular was designed for teams building applications that will be maintained for years by dozens of developers.

**React is jazz** - improvisation, creativity, freedom
**Angular is classical** - structure, composition, precision

Both create beautiful music. The question isn't which is better, but which fits your project, team, and goals.

**The best part?** Learning Angular makes you better at React. Understanding different approaches to the same problems (state, routing, forms) deepens your frontend expertise.

Now go build something amazing. Welcome to Angular! 🎉

---


**Happy coding, and remember**: The framework doesn't make the developer. Understanding **why** you choose one over the other, and **how** to use it well - that's what matters.

---
