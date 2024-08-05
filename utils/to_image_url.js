export default function toImageUrl(url) {
    if (url.startsWith("http") || url.startsWith("https")) {
        return url;
    } else {
        return `${process.env.IMG_URL}${url}`;
    }
}