function solution(nums) {
    var answer = 0;
    
    nums = nums.sort();
    let arr = [nums[0]];
    
    for (let i=1; i<nums.length; i++){
        if (arr[arr.length-1] !== nums[i])
            arr.push(nums[i]);
    }
    
    if (nums.length/2 > arr.length){
        return arr.length;
    }
    else return nums.length/2
    
    return answer;
}
