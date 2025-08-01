// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

//Cant use concat and sort :'(


function mergeTwoLists(l1, l2){
    const mixed = [...l1, ...l2];
    let merged = [];
    let max;
    while(merged.length < [...l1,...l2].length){
        max = mixed[0];
        for(let i = 0; i < mixed.length  ; i++){
           if(mixed[i] > max) max = mixed[i];
        }
        merged = [max, ...merged]
        mixed.splice(mixed.findIndex(n => n === max), 1);
    }
    return mixed;
}

console.log(mergeTwoLists([], [0]));