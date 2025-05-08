
# Blog - 1 : Type vs Interface in TypeScript: What’s the Difference?

## 🎯 What is an Interface?

An `interface` defines the **shape of an object** in TypeScript. It specifies what properties and methods an object should have. We can create a blueprint of an object using an interface.

### 🧑‍💻 Example: Create a blueprint of User using Interface

```tsx
interface User {
  // properties
  name: string;
  age: number;
}
```

### 🧑‍💻 Create a user using User interface

```tsx
const user1 : User = {
    name:"Shakil Ahmed",
    age:21
}
```

### 🚀 Where we can use Interface?
- Defining the Shape of an Object
- Function parameter/return type
- Class implementation
- Function type signature
- Interface extension
- React components (Props/State)

### ✅ Benefits of Using Interfaces

- **Type safety:** Interface help to catch mistakes early by ensuring with your data matched with the interface expected data structure.

- **Readability & Maintainability:**  Interface helps  we to make our code easier to understand and maintain.

- **Code Reusability:**  We can reuse interfaces across multiple files and functions.

- **Supports OOP (Object-Oriented Programming):** Interfaces can be implemented by classes to define strict contracts

- **Extensibility:** Interfaces can extend other interfaces, making it easy to build scalable system.






## 🎯 What is an type?

`Type alias` n typescript allows us to `give name to any types` including primitive types, object types, unions, intersection, tuples.



### 🧑‍💻 When  we need to use Type?

- when we need union or intersection
- when we need multiple data type (primitive + object)
- when we define tuples, mapped types or conditional types
- when we need complex type compositions


### 🚀  When Should You Use type ?

- Primitives

```tsx
type ID = string | number;
```
- Unions 

```tsx
type Status = "success" | "error" | "loading";
```

- Intersection

```tsx
type FullUser = User & Address;
```
- Function types

```tsx
type Greet = (name: string) => string;
```



### 🎯 Difference between Type vs Interface

| Feature | `interface` | `type` |
| --- | --- | --- |
| Extends/Implements | ✅ `extends`, `implements` | ✅ via intersection (`&`) |
| Used with classes | ✅ Yes | ❌ No |
| Union/Intersection | ❌ No | ✅ Yes |
| Primitive types | ❌ No | ✅ Yes |
| Tuple support | ❌ No | ✅ Yes |
| Declaration merging | ✅ Yes | ❌ No |

