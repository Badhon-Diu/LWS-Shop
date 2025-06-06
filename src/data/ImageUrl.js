export default function getimageUrl(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
}
