export async function test() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        return result.json();
    } catch(err) {
        throw new Error("failed");
    }
}