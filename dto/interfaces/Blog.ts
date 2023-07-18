interface BlogElement {
    title: string;
    img: string;
    shortDescription?: string;
    url: string;
}
interface BlogList {
    items: BlogElement[];
}