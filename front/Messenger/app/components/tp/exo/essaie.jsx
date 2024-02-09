
export function increment(nb = 0){
    const [n, setN] = useState(nb)
    const incr = () => setN(a =>a+1)
    const decr = ()=> setN(a=>a-1)

    return [n, incr, decr]

}