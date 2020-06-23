//Objective is to find the k closest coordinates to the origin (0,0).

let points = [[1,3],[-2,2]]
let k = 1


//O(nlogn) solution that maps out each point to it's distance from the origin
//then sorts the distances and returns the top k points.

let map = {}

//Map their distances using sqrt(a^2 + b^2)
for (let point of points) {
    map[point] = Math.sqrt(point[0]**2 + point[1]**2)
}
    
let sorted = Object.keys(map).sort((a,b) => {
    return map[a] - map[b]
})
    
let array = []
for (let i = 0; i < sorted.length; i++) {
    array.push(sorted[i].split(','))
}
    
return array.slice(0, k)