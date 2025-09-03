
// ipApi.js

export async function fetchCountry() {
    try {
        const res = await fetch(`https://ipinfo.io/json/?token=${process.env.NEXT_PUBLIC_IP_TOKEN}`);
        const data = await res.json();
        return data; // Returns the country code, e.g., 'US'
    } catch (error) {
        return null; // Or handle error as needed
    }
}
