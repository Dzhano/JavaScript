function condenseArray(nums){
    for (let i = 0; i < nums.length; i++){
        nums[i] = Number(nums[i]);
    }

    while (nums.length > 1){
        let condensed = [];
        for(let i = 0; i < nums.length - 1; i++){
            condensed.push(nums[i] + nums[i + 1]);
        }
        nums = condensed;
    }

    console.log(nums[0]);
}

condenseArray([5, 0, 4, 1, 2]);