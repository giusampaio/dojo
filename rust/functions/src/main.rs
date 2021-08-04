fn main() {
    println!("Hello, world!");

    another_function();

    other_function(5, 10);

    let w = {
        let x = 3;
        x + 1
    };
    
    
    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {}", y);

    println!("The value of W is: {}", w);

    let fx = five();

    println!("The value from five is {}", fx);

    println!("The value is {}", plus_one(5))
}

fn another_function() { 
    println!("Another function here!");
}

fn other_function(x: i32, y: i32) {
    println!("The x value is: {}", x);
    println!("The y value is: {}", y);
}

fn five() -> i32 {
    5
}

fn plus_one(x: i32) -> i32 {
    // in this case, we don't  put semicolon at end. 
    // Because, symbolize a statement and statement doesn't nothing to evaluate
    x + 1 
}
