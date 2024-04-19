async function dataLoad() {
    const response = await fetch('./src/json/motogp.json');
    const data = await response.json();
    return data;
}

export const data = await dataLoad();