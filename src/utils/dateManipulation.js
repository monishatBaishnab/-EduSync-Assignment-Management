export const formatDate = (data) => {
    const date = new Date(data);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    let dayWithSuffix;
    if (day === 1 || day === 21 || day === 31) {
        dayWithSuffix = day + 'st';
    } else if (day === 2 || day === 22) {
        dayWithSuffix = day + 'nd';
    } else if (day === 3 || day === 23) {
        dayWithSuffix = day + 'rd';
    } else {
        dayWithSuffix = day + 'th';
    }

    return `${dayWithSuffix} ${month} ${year}`;
}
export const dateDifferance = (data) => {
    const lastDate = new Date(data);
    const today = new Date();
    return lastDate >= today;
}