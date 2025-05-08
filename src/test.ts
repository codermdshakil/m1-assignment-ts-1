

enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
  }
  
  console.log(Direction.Up);    // Output: 0
  console.log(Direction.Right); // Output: 3
  

  enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
  }
  
  console.log(Status.Success); // 200