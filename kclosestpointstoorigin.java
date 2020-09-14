//Java Solution (using priority queue)

class Solution {
    public int[][] kClosest(int[][] points, int K) {
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (a,b) -> ((a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]))
        );
        
        for (int[] point : points) {
            pq.add(point);
        }
        
        int[][] result = new int[K][2];
        for (int i = 0; i < K; i++) {
            int[] temp = pq.poll();
            result[i][0] = temp[0];
            result[i][1] = temp[1];
        }
        
        return result;
    }
}