// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

use std::convert::TryInto;

fn main(input: u64) -> u64 {
    let max: u64 = 10_u64.pow(input.try_into().unwrap());
    let mut resp = 0;
    for x in (1..max).rev() {
        for y in (1..max).rev() {
            let multply = x*y;
            if is_palindrome(&get_digits(multply)) && multply > resp {
                resp = multply;
            }
        }
    }
    resp
}

fn is_palindrome(digits: &[u64]) -> bool {
    digits.iter().eq(digits.iter().rev())
}

fn get_digits(number: u64) -> Vec<u64> {
    let mut aux = number;
    let mut digits = Vec::new();
    while aux > 0 {
        digits.push(aux % 10);
        aux /= 10;
    }
    digits.reverse();
    digits
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test () {
        assert_eq!(main(2),9009);
        println!("Biggest 3 product palindrome: {}", main(3));
    }
    #[test]
    fn digits() {
        assert_eq!(get_digits(14598), [1, 4, 5, 9, 8]);
        assert_eq!(get_digits(635), [6, 3, 5]);
        assert_eq!(get_digits(528000), [5, 2, 8, 0, 0, 0]);
        assert_ne!(get_digits(528001), [5, 2, 8, 0, 0, 0]);
    }
    #[test]
    fn palindrome() {
        assert!(is_palindrome(&[1, 0, 0, 1]));
        assert!(is_palindrome(&[2, 1, 1, 2]));
        assert!(is_palindrome(&[2, 1, 5, 1, 2]));
        assert!(!is_palindrome(&[2, 2, 1, 2]));
    }
}
