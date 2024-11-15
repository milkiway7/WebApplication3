export function timeWithoutSeconds() {
    const date = new Date();
    date.setMilliseconds(0);
    
    return date.toISOString().slice(0, 19);
}