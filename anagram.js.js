
function isAnagram(str1, str2) {

    if (str1.length !== str2.length) // Checks if the lengths aren't equal, they can't be anagrams
        {
            return false;
        }
    
    const sortedStr1 = str1.split('').sort().join(''); // split('') turns "listen" into ['l', 'i', 's', 't', 'e', 'n'], sort() rearranges it alphabetically to ['e', 'i', 'l', 'n', 's', 't'], join('') glues it back into a string: "eilnst"
    
    const sortedStr2 = str2.split('').sort().join(''); //sorting process for the second string
    
    return sortedStr1 === sortedStr2; // sorted strings are identical, they are anagrams.
}

console.log(isAnagram('listen', 'silent')); // This will print: true

console.log(isAnagram('hello', 'world')); // This will print: false

    