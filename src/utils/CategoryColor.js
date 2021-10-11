import { colorMap } from './ColorMap';

/**
 * Determine the color for a category
 */
export function categoryColor(category) {
    if (category && category in colorMap) {
        return colorMap[category];
    }

    console.warn(`Missing category color ${category}`);

    // Fallback color.
    return '#fff';
}
