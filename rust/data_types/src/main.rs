use std::io;

fn main() {
    
    // numbers
    let x = 2.0;    
    let y:f32 = 3.0; 

    // operational
    let sum = 5 + 100;
    let difference = 95.5 - 4.3;
    let product = 4 * 30;
    let quotient =56.7 / 32.2;
    let remainder = 43 % 5;

    // boolean
    let t = true;
    let f: bool = false;

    // chars
    let c = 'z';
    let z = 'ℤ';    
    let heart_eyed_cat = '😻';

    // tuples
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (x, y, z) = tup;

    let one = tup.2;

    println!("The value of y is: {}", y);    
    println!("The value of one is: {}", one);

    // array
    let arr = [1, 2, 3, 4, 5];
    let months =  ["Jan", "Feb", "Marc", "Apr"];
    let a: [i32; 5] = [1, 2, 3, 4, 5];

    let fixed = [3; 5];

    let first = a[0];
    let second = a[1];

    println!("Please enter an array index.");

    let mut index = String::new();

    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");

    let index:usize = index
        .trim()
        .parse()
        .expect("Index entered was not a number");

    let element = a[index];

    println!(
        "The value of the element at index  {} is {}", 
        index, element
    );
}

