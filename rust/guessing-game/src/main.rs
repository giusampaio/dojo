use std::io;
use rand::Rng;
use std::cmp::Ordering;


fn main() {
    println!("Hi dude! Let's play a game! Guess the number.");
    
    let secret = rand::thread_rng().gen_range(1..11); // 1..=100 - equivalent 
    
    loop {
        println!("Please input yor guess:");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue
        };                 
        
        println!("You guessed: {}", guess);

        match guess.cmp(&secret) {
            Ordering::Less => println!("Too small!!"),
            Ordering::Greater => println!("Too big!!"),
            Ordering::Equal => { 
                println!("You won!!");
                break;
            }
        }
    }
}
