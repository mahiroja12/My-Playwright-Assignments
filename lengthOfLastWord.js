
function lengthOfLastWord(s)
{
    const trimmedString = s.trim();
    
    const words = trimmedString.split(" "); // Splits the string into an array of words.
    
    const lastWord = words[words.length - 1]; // Grab the last word from array
    
    return lastWord.length; // Returns the characters which are in that last word
}

console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to the moon  ")) // Output: 4