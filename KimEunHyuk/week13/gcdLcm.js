function solution(n, m) {
    const gcd = (a, b) => { // 최대공약수 함수
        if (b === 0)
            return a;
        else 
            return gcd(b, a % b);
    }
    const lcm = (a, b) => { // 최소공배수 함수
        return (a * b) / gcd(a, b);
    }
    
    return [gcd(n, m), lcm(n, m)];
}
