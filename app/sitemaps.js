import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

const links = [{ url: "/", priority: 1 }];

const stream = new SitemapStream({ hostname: "https://tarangjanawalkar.com" });
const writeStream = createWriteStream("public/sitemap.xml");

Readable.from(links).pipe(stream).pipe(writeStream);
