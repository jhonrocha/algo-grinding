// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

fn main(input: i64) -> i64 {
    let max = (input as f64).sqrt() as i64 + 1;
    let mut resp = 0;
    println!("max {}", max);
    for counter in 1..max {
        if input % counter == 0 {
            let factor = input / counter;
            if is_prime(counter) && counter > resp {
                resp = counter;
            }
            if is_prime(factor) && factor > resp {
                resp = factor;
            }
        }
    }
    resp
}

fn is_prime(number: i64) -> bool {
    let mut resp = true;
    let max = (number as f64).sqrt() as i64 + 1;
    for counter in 2..max {
        if number % counter == 0 {
            resp = false;
            break;
        }
    }
    resp
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_prime() {
        assert!(is_prime(3));
        assert!(!is_prime(4));
        assert!(is_prime(5));
        assert!(is_prime(7));
        assert!(!is_prime(9));
        assert!(is_prime(11));
        assert!(is_prime(13));
        assert!(!is_prime(15));
    }

    #[test]
    fn test_known() {
        assert_eq!(main(15), 5);
        assert_eq!(main(13195), 29);
        println!(" Result for 600851475143 is {}", main(600851475143)); 
    }
}
