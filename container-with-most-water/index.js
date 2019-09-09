/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length -1 ;
    let result = 0;
    
    while (i < j) {
        const min = Math.min(height[i], height[j]);
        result = Math.max(result, min * (j - i) );

        if(height[i] < height[j]) {
            i++;
        }else{ 
            j--;
        }
    }
    return result;
};
