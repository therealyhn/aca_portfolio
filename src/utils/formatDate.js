export const formatDate = (date) =>
    new Date(date).toLocaleDateString("sr-Latn-RS", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
