// function new_count(word) {
//   word = word.toLowerCase();                                     //word.downcase!
//   if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
//     word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//     word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
//     return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
// }
//
// console.log(new_count('she'));
// console.log(new_count('spain'))
// console.log(new_count('softball'))
// console.log(new_count('contagion'))

// function new_count(word) {
//   word = word.toLowerCase();                                     //word.downcase!
//   if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
//     word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//     word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
//     return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
// }

// function new_count(word) {
//   word = word.toLowerCase();                                     //word.downcase!
//   if(word.length <= 2) { return 1; }                             //return 1 if word.length <= 3
//     word = word.replace(/(?:[^laeiouy]es|ed|lle|eue|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//     word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
//     return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
// }

function new_count(word) {
  word = word.toLowerCase();                                     //word.downcase!
  if(word.length <= 2) { return 1; }                             //return 1 if word.length <= 3
    word = word.replace(/(?:[^laeiouy]es|ed|lle|eue|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    word = word.replace(/^y/, '');
    word = word.replace(/\w*^ey/, '');                                   //word.sub!(/^y/, '')
    return word.match(/[aeiouy]{1,2}/g).length;
                     //word.scan(/[aeiouy]{1,2}/).size
}

new_count('she');
