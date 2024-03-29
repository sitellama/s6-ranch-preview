import JSON5 from "json5";
import { CardInfo } from "./types";
import { TestimonialData } from "./types-testimonial";
import { TrainerData } from "./types-trainers";

export * from "./types";
export * from "./types-testimonial";

export type DynamicData = {             // global data from jsonl files
    horses: CardInfo[];                 // horses for sale
    breeding: CardInfo[];               // breeding
    testimonials: TestimonialData[];    // testimonials
    trainers: TrainerData[];            // trainers
    error: string | undefined;          // errors from parsing jsonl files
    filename: string;                   // filename of the jsonl file
};

export const dynamicData: DynamicData = {
    horses: [],
    breeding: [],
    testimonials: [],
    trainers: [],
    error: undefined,
    filename: '',
};

async function initMdSDataWithFetch(url: string): Promise<any> {
    const res = await fetch(url);
    const text = await res.text();
    const obj = JSON5.parse(text);
    return obj;
}

function fixRelativePaths<TElement extends string>(items: TElement[], folder: string): TElement[] {
    return items.map(
        (item) => {
            if (item) {
                const isAbsolute = item.match(/^(\/|\.)/);
                if (!isAbsolute) {
                    return `${folder}${item}` as TElement;
                }
            }
            return item;
        }
    );
}

export async function initDataWithFetch() {
    let folder = '';
    try {
        folder = "./data/horses/";
        dynamicData.filename = "horses-for-sale.jsonl";
        dynamicData.horses = await initMdSDataWithFetch(`${folder}${dynamicData.filename}`);
        dynamicData.horses.forEach((item) => {
            item.images = fixRelativePaths(item.images, folder);
        });

        folder = "./data/breeding/";
        dynamicData.filename = "breeding.jsonl";
        dynamicData.breeding = await initMdSDataWithFetch(`${folder}${dynamicData.filename}`);
        dynamicData.breeding.forEach((item) => {
            item.images = fixRelativePaths(item.images, folder);
        });

        folder = "./data/testimonials/";
        dynamicData.filename = "testimonials.jsonl";
        dynamicData.testimonials = await initMdSDataWithFetch(`${folder}${dynamicData.filename}`);

        folder = "./data/trainers/";
        dynamicData.filename = "trainers.jsonl";
        dynamicData.trainers = await initMdSDataWithFetch(`${folder}${dynamicData.filename}`);
        dynamicData.trainers.forEach((item) => {
            item.imageUrl = fixRelativePaths([item.imageUrl], folder)[0];
        });

    } catch (err) {
        dynamicData.error = err instanceof Error ? err.message : '' + err;
        console.error('11', err);
    }
}

